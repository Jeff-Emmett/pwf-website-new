import { z } from 'zod';

// JWT utilities
async function signJWT(payload: any, secret: string): Promise<string> {
  const header = {
    alg: 'HS256',
    typ: 'JWT'
  };
  
  const encodedHeader = btoa(JSON.stringify(header));
  const encodedPayload = btoa(JSON.stringify(payload));
  
  const data = `${encodedHeader}.${encodedPayload}`;
  const signature = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  
  const signatureBuffer = await crypto.subtle.sign('HMAC', signature, new TextEncoder().encode(data));
  const encodedSignature = btoa(String.fromCharCode(...new Uint8Array(signatureBuffer)));
  
  return `${data}.${encodedSignature}`;
}

async function verifyJWT(token: string, secret: string): Promise<any> {
  const [header, payload, signature] = token.split('.');
  
  const data = `${header}.${payload}`;
  const signatureBuffer = new Uint8Array(
    atob(signature).split('').map(c => c.charCodeAt(0))
  );
  
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['verify']
  );
  
  const isValid = await crypto.subtle.verify('HMAC', key, signatureBuffer, new TextEncoder().encode(data));
  
  if (!isValid) {
    throw new Error('Invalid token');
  }
  
  return JSON.parse(atob(payload));
}

// Password hashing
async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

async function comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
  const hashedInput = await hashPassword(password);
  return hashedInput === hashedPassword;
}

// Validation schemas
const registerSchema = z.object({
  username: z.string().min(3).max(50),
  email: z.string().email(),
  password: z.string().min(8),
  fullName: z.string().optional()
});

const loginSchema = z.object({
  username: z.string(),
  password: z.string()
});

// User interface
interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  fullName?: string;
  createdAt: string;
}

export const onRequest: PagesFunction = async (context) => {
  const { request, env } = context;
  const url = new URL(request.url);
  const path = url.pathname.split('/').pop();
  
  const JWT_SECRET = env.JWT_SECRET || 'pilateswithfadia-secret-key';
  
  // Helper function to get user from KV
  async function getUserByUsername(username: string): Promise<User | null> {
    const userData = await env.STORAGE.get(`user:${username}`);
    return userData ? JSON.parse(userData) : null;
  }
  
  async function getUserByEmail(email: string): Promise<User | null> {
    const userData = await env.STORAGE.get(`user_email:${email}`);
    return userData ? JSON.parse(userData) : null;
  }
  
  async function createUser(userData: Omit<User, 'id' | 'createdAt'>): Promise<User> {
    const id = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const user: User = {
      ...userData,
      id,
      createdAt: new Date().toISOString()
    };
    
    await env.STORAGE.put(`user:${user.username}`, JSON.stringify(user));
    await env.STORAGE.put(`user_email:${user.email}`, JSON.stringify(user));
    
    return user;
  }
  
  // Register endpoint
  if (path === 'register' && request.method === 'POST') {
    try {
      const body = await request.json();
      const { username, email, password, fullName } = registerSchema.parse(body);
      
      // Check if username already exists
      const existingUserByUsername = await getUserByUsername(username);
      if (existingUserByUsername) {
        return new Response(JSON.stringify({ message: "Username already exists" }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      // Check if email already exists
      const existingUserByEmail = await getUserByEmail(email);
      if (existingUserByEmail) {
        return new Response(JSON.stringify({ message: "Email already in use" }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      const hashedPassword = await hashPassword(password);
      const user = await createUser({
        username,
        email,
        password: hashedPassword,
        fullName
      });
      
      const token = await signJWT(
        { userId: user.id, username: user.username },
        JWT_SECRET
      );
      
      // Return user without password
      const { password: _, ...userWithoutPassword } = user;
      
      return new Response(JSON.stringify({
        user: userWithoutPassword,
        token
      }), {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return new Response(JSON.stringify({ 
          message: "Invalid registration data", 
          errors: error.errors 
        }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      return new Response(JSON.stringify({ message: "Registration failed" }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
  
  // Login endpoint
  if (path === 'login' && request.method === 'POST') {
    try {
      const body = await request.json();
      const { username, password } = loginSchema.parse(body);
      
      const user = await getUserByUsername(username);
      if (!user || !(await comparePasswords(password, user.password))) {
        return new Response(JSON.stringify({ message: "Invalid username or password" }), {
          status: 401,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      const token = await signJWT(
        { userId: user.id, username: user.username },
        JWT_SECRET
      );
      
      // Return user without password
      const { password: _, ...userWithoutPassword } = user;
      
      return new Response(JSON.stringify({
        user: userWithoutPassword,
        token
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return new Response(JSON.stringify({ 
          message: "Invalid login data", 
          errors: error.errors 
        }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      return new Response(JSON.stringify({ message: "Login failed" }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
  
  // Me endpoint (get current user)
  if (path === 'me' && request.method === 'GET') {
    try {
      const authHeader = request.headers.get('Authorization');
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return new Response(JSON.stringify({ message: "Not authenticated" }), {
          status: 401,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      const token = authHeader.substring(7);
      const payload = await verifyJWT(token, JWT_SECRET);
      
      const user = await getUserByUsername(payload.username);
      if (!user) {
        return new Response(JSON.stringify({ message: "User not found" }), {
          status: 404,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      // Return user without password
      const { password: _, ...userWithoutPassword } = user;
      
      return new Response(JSON.stringify(userWithoutPassword), {
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error) {
      return new Response(JSON.stringify({ message: "Invalid token" }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
  
  return new Response(JSON.stringify({ message: "Not found" }), {
    status: 404,
    headers: { 'Content-Type': 'application/json' }
  });
};

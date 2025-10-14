import { z } from 'zod';

const bookingSchema = z.object({
  classId: z.number(),
  date: z.string(),
  paid: z.boolean().default(false),
  status: z.string().default("pending")
});

// JWT verification helper
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

// Booking interface
interface Booking {
  id: string;
  userId: string;
  classId: number;
  date: string;
  paid: boolean;
  status: string;
  createdAt: string;
}

export const onRequest: PagesFunction = async (context) => {
  const { request, env } = context;
  
  const JWT_SECRET = env.JWT_SECRET || 'pilateswithfadia-secret-key';
  
  // Helper function to get user from token
  async function getCurrentUser(): Promise<any> {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new Error('No valid token provided');
    }
    
    const token = authHeader.substring(7);
    return await verifyJWT(token, JWT_SECRET);
  }
  
  // Helper function to get user bookings
  async function getUserBookings(userId: string): Promise<Booking[]> {
    const bookingsData = await env.STORAGE.get(`bookings:${userId}`);
    return bookingsData ? JSON.parse(bookingsData) : [];
  }
  
  // Helper function to save user bookings
  async function saveUserBookings(userId: string, bookings: Booking[]): Promise<void> {
    await env.STORAGE.put(`bookings:${userId}`, JSON.stringify(bookings));
  }
  
  // GET /api/bookings - Get user's bookings
  if (request.method === 'GET') {
    try {
      const user = await getCurrentUser();
      const bookings = await getUserBookings(user.userId);
      
      return new Response(JSON.stringify(bookings), {
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error) {
      return new Response(JSON.stringify({ message: "Unauthorized" }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
  
  // POST /api/bookings - Create new booking
  if (request.method === 'POST') {
    try {
      const user = await getCurrentUser();
      const body = await request.json();
      const bookingData = bookingSchema.parse(body);
      
      const bookings = await getUserBookings(user.userId);
      
      const newBooking: Booking = {
        id: `booking_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        userId: user.userId,
        classId: bookingData.classId,
        date: bookingData.date,
        paid: bookingData.paid,
        status: bookingData.status,
        createdAt: new Date().toISOString()
      };
      
      bookings.push(newBooking);
      await saveUserBookings(user.userId, bookings);
      
      return new Response(JSON.stringify(newBooking), {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return new Response(JSON.stringify({ 
          message: "Invalid booking data", 
          errors: error.errors 
        }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      if (error instanceof Error && error.message === 'No valid token provided') {
        return new Response(JSON.stringify({ message: "Unauthorized" }), {
          status: 401,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      return new Response(JSON.stringify({ message: "Failed to create booking" }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
  
  return new Response(JSON.stringify({ message: "Method not allowed" }), {
    status: 405,
    headers: { 'Content-Type': 'application/json' }
  });
};

import { z } from 'zod';

// Types
interface Class {
  id: number;
  name: string;
  description: string;
  duration: number;
  price: number;
  capacity: number;
  classType: string;
  imageUrl?: string;
}

// Default classes data
const defaultClasses: Class[] = [
  {
    id: 1,
    name: "Mat Pilates",
    description: "A foundational class focusing on core strength, proper alignment, and mindful movement patterns.",
    duration: 60,
    price: 2500, // $25.00
    capacity: 15,
    classType: "group",
    imageUrl: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f"
  },
  {
    id: 2,
    name: "Reformer Classes",
    description: "Equipment-based sessions that enhance resistance training for deeper muscle engagement.",
    duration: 55,
    price: 4000, // $40.00
    capacity: 8,
    classType: "small-group",
    imageUrl: "https://images.unsplash.com/photo-1562088287-bde35a1ea917"
  },
  {
    id: 3,
    name: "Private Sessions",
    description: "Personalized attention and customized programming to meet your specific goals and needs.",
    duration: 60,
    price: 7500, // $75.00
    capacity: 1,
    classType: "private",
    imageUrl: "https://images.unsplash.com/photo-1616279969856-759f316a5ac1"
  },
  {
    id: 4,
    name: "Online Classes",
    description: "Practice pilates from the comfort of your own home or wherever you happen to be with our convenient online sessions.",
    duration: 50,
    price: 2000, // $20.00
    capacity: 20,
    classType: "online",
    imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a"
  }
];

export const onRequest: PagesFunction = async (context) => {
  const { request, env } = context;
  
  if (request.method === 'GET') {
    const url = new URL(request.url);
    const classId = url.pathname.split('/').pop();
    
    if (classId && classId !== 'classes') {
      // Get specific class
      const id = parseInt(classId);
      if (isNaN(id)) {
        return new Response(JSON.stringify({ message: "Invalid class ID" }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      const classData = defaultClasses.find(c => c.id === id);
      if (!classData) {
        return new Response(JSON.stringify({ message: "Class not found" }), {
          status: 404,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      return new Response(JSON.stringify(classData), {
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      // Get all classes
      return new Response(JSON.stringify(defaultClasses), {
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
  
  return new Response(JSON.stringify({ message: "Method not allowed" }), {
    status: 405,
    headers: { 'Content-Type': 'application/json' }
  });
};

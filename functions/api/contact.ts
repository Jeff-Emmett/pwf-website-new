import { z } from 'zod';

const contactMessageSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  subject: z.string().min(2).max(200).optional(),
  message: z.string().min(10).max(2000)
});

export const onRequest: PagesFunction = async (context) => {
  const { request, env } = context;
  
  if (request.method === 'POST') {
    try {
      const body = await request.json();
      const contactData = contactMessageSchema.parse(body);
      
      // Store in KV storage
      const messageId = `contact:${Date.now()}:${Math.random().toString(36).substr(2, 9)}`;
      const messageRecord = {
        id: messageId,
        name: contactData.name,
        email: contactData.email,
        subject: contactData.subject,
        message: contactData.message,
        createdAt: new Date().toISOString()
      };
      
      await env.STORAGE.put(messageId, JSON.stringify(messageRecord));
      
      // Log the contact request
      console.log(`Contact form submission from ${contactData.name} (${contactData.email})`);
      console.log(`Subject: ${contactData.subject || "No subject"}`);
      console.log(`Message: ${contactData.message}`);
      
      return new Response(JSON.stringify({ 
        message: "Message sent successfully",
        info: "Your message has been received and will be reviewed shortly."
      }), {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return new Response(JSON.stringify({ 
          message: "Invalid contact data", 
          errors: error.errors 
        }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      return new Response(JSON.stringify({ message: "Failed to send message" }), {
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

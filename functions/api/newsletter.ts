import { z } from 'zod';

const newsletterSchema = z.object({
  email: z.string().email(),
  agreedToTerms: z.boolean()
});

// Mailchimp integration
async function subscribeToMailchimp(email: string, env: any) {
  const API_KEY = env.MAILCHIMP_API_KEY;
  const SERVER_PREFIX = env.MAILCHIMP_SERVER_PREFIX;
  const LIST_ID = env.MAILCHIMP_LIST_ID;

  if (!API_KEY || !SERVER_PREFIX || !LIST_ID) {
    throw new Error('Mailchimp configuration missing. Please check your environment variables.');
  }

  try {
    // Create MD5 hash of lowercase email for Mailchimp
    const emailHash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex');
    
    // Set up the request
    const url = `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;
    const data = {
      email_address: email,
      status: 'subscribed'
    };
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${btoa(`apikey:${API_KEY}`)}`
      },
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      if (response.status === 400 && errorData.title === 'Member Exists') {
        return { status: 'already_subscribed', message: 'This email is already subscribed to our newsletter.' };
      }
      throw new Error(`Mailchimp API error: ${errorData.detail || 'Unknown error'}`);
    }
    
    return await response.json();
  } catch (error: any) {
    throw new Error(`Failed to subscribe to newsletter: ${error.message}`);
  }
}

export const onRequest: PagesFunction = async (context) => {
  const { request, env } = context;
  
  if (request.method === 'POST') {
    try {
      const body = await request.json();
      const newsletterData = newsletterSchema.parse(body);
      
      // Check if email already exists in KV storage
      const existingNewsletter = await env.STORAGE.get(`newsletter:${newsletterData.email}`);
      
      // Store in KV storage
      if (!existingNewsletter) {
        const newsletterRecord = {
          email: newsletterData.email,
          agreedToTerms: newsletterData.agreedToTerms,
          createdAt: new Date().toISOString()
        };
        await env.STORAGE.put(`newsletter:${newsletterData.email}`, JSON.stringify(newsletterRecord));
      }
      
      // Subscribe to Mailchimp
      try {
        const mailchimpResponse = await subscribeToMailchimp(newsletterData.email, env);
        
        if (mailchimpResponse && mailchimpResponse.status === 'already_subscribed') {
          return new Response(JSON.stringify({ message: mailchimpResponse.message }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          });
        }
        
        return new Response(JSON.stringify({ message: "Successfully subscribed to the newsletter" }), {
          status: 201,
          headers: { 'Content-Type': 'application/json' }
        });
      } catch (mailchimpError: any) {
        console.error('Mailchimp error:', mailchimpError.message);
        // Still return success if we stored in KV but Mailchimp failed
        return new Response(JSON.stringify({ message: "Successfully subscribed to the newsletter" }), {
          status: 201,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        return new Response(JSON.stringify({ 
          message: "Invalid newsletter data", 
          errors: error.errors 
        }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      console.error('Newsletter subscription error:', error);
      return new Response(JSON.stringify({ message: "Failed to subscribe to newsletter" }), {
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

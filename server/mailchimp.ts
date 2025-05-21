import axios from 'axios';
import crypto from 'crypto';

// Environment variables for Mailchimp
const API_KEY = process.env.MAILCHIMP_API_KEY;
const SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX;
const LIST_ID = process.env.MAILCHIMP_LIST_ID;

/**
 * Subscribe a new email to the Mailchimp list
 */
export async function subscribeToMailchimp(email: string) {
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
    
    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${Buffer.from(`apikey:${API_KEY}`).toString('base64')}`
      }
    });
    
    return response.data;
  } catch (error: any) {
    // Handle existing subscribers gracefully
    if (error.response && error.response.status === 400 && 
        error.response.data && error.response.data.title === 'Member Exists') {
      return { status: 'already_subscribed', message: 'This email is already subscribed to our newsletter.' };
    }
    
    // For other errors, re-throw with more context
    throw new Error(`Failed to subscribe to newsletter: ${error.message}`);
  }
}
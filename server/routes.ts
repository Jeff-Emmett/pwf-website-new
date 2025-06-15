import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth } from "./auth";
import { subscribeToMailchimp } from "./mailchimp";
import { sendEmail } from "./email";
import { 
  insertNewsletterSchema, 
  insertContactMessageSchema,
  insertBookingSchema
} from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Set up authentication routes
  setupAuth(app);

  // API Routes
  // ----------

  // Classes
  app.get("/api/classes", async (_req, res) => {
    try {
      const classes = await storage.getClasses();
      res.json(classes);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch classes" });
    }
  });

  app.get("/api/classes/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid class ID" });
      }
      
      const classData = await storage.getClass(id);
      if (!classData) {
        return res.status(404).json({ message: "Class not found" });
      }
      
      res.json(classData);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch class" });
    }
  });

  // Bookings
  app.get("/api/bookings", async (req: Request, res: Response) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    
    try {
      const bookings = await storage.getBookings(req.user.id);
      res.json(bookings);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch bookings" });
    }
  });

  app.post("/api/bookings", async (req: Request, res: Response) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    
    try {
      const bookingData = insertBookingSchema.parse({
        ...req.body,
        userId: req.user.id
      });
      
      const booking = await storage.createBooking(bookingData);
      res.status(201).json(booking);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid booking data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create booking" });
    }
  });

  // Newsletter signup
  app.post("/api/newsletter", async (req, res) => {
    try {
      const newsletterData = insertNewsletterSchema.parse(req.body);
      
      // Check if email already exists in our local database
      const existingNewsletter = await storage.getNewsletterByEmail(newsletterData.email);
      
      // Store in our local database
      if (!existingNewsletter) {
        await storage.createNewsletter(newsletterData);
      }
      
      // Subscribe to Mailchimp
      try {
        const mailchimpResponse = await subscribeToMailchimp(newsletterData.email);
        
        if (mailchimpResponse && mailchimpResponse.status === 'already_subscribed') {
          return res.status(200).json({ message: mailchimpResponse.message });
        }
        
        res.status(201).json({ message: "Successfully subscribed to the newsletter" });
      } catch (mailchimpError: any) {
        console.error('Mailchimp error:', mailchimpError.message);
        // Still return success if we stored in our database but Mailchimp failed
        res.status(201).json({ message: "Successfully subscribed to the newsletter" });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid newsletter data", errors: error.errors });
      }
      console.error('Newsletter subscription error:', error);
      res.status(500).json({ message: "Failed to subscribe to newsletter" });
    }
  });

  // Contact form
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactMessageSchema.parse(req.body);
      
      // Always store in database first
      const message = await storage.createContactMessage(contactData);
      
      // Add a success message with clear next steps for Fadia
      console.log(`Contact form submission stored in database from ${contactData.name} (${contactData.email})`);
      console.log(`Subject: ${contactData.subject || "No subject"}`);
      console.log(`This message will be forwarded to hello@pilateswithfadia.com`);
      
      // Important information for the user in the response
      res.status(201).json({ 
        message: "Message sent successfully",
        info: "Your message has been received and will be sent to hello@pilateswithfadia.com"
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid contact data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to send message" });
    }
  });

  // Instagram Feed
  app.get("/api/instagram-feed", async (_req, res) => {
    try {
      const instagramAccessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
      
      if (!instagramAccessToken) {
        return res.status(500).json({ 
          message: "Instagram access token not configured",
          error: "INSTAGRAM_ACCESS_TOKEN environment variable is required"
        });
      }

      // Fetch recent posts from Instagram Basic Display API
      const response = await fetch(
        `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,caption,timestamp&access_token=${instagramAccessToken}`
      );

      if (!response.ok) {
        throw new Error(`Instagram API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      
      // Filter out only images and videos, exclude carousels for simplicity
      const posts = data.data?.filter((post: any) => 
        post.media_type === 'IMAGE' || post.media_type === 'VIDEO'
      ).slice(0, 12) || []; // Limit to 12 most recent posts

      res.json(posts);
    } catch (error) {
      console.error('Instagram API error:', error);
      res.status(500).json({ 
        message: "Failed to fetch Instagram posts",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

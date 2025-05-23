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
      const message = await storage.createContactMessage(contactData);
      
      // Send email to hello@pilateswithfadia.com
      try {
        await sendEmail({
          to: "hello@pilateswithfadia.com",
          from: contactData.email,
          subject: contactData.subject || "New contact form submission from Pilates with Fadia website",
          text: `You received a new message from your website contact form:\n\nName: ${contactData.name}\nEmail: ${contactData.email}\n\nMessage:\n${contactData.message}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
              <h2 style="color: #0c8991; border-bottom: 1px solid #eaeaea; padding-bottom: 10px;">New Message from Pilates with Fadia Website</h2>
              <p><strong>From:</strong> ${contactData.name} (${contactData.email})</p>
              <p><strong>Subject:</strong> ${contactData.subject || "No subject"}</p>
              <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; margin-top: 20px;">
                <p style="white-space: pre-line;">${contactData.message}</p>
              </div>
              <p style="color: #666; font-size: 12px; margin-top: 30px; border-top: 1px solid #eaeaea; padding-top: 10px;">
                This message was sent from the contact form on your Pilates with Fadia website.
              </p>
            </div>
          `
        });
        console.log('Contact form email sent successfully');
      } catch (emailError) {
        console.error('Failed to send contact form email:', emailError);
        // Continue with response even if email sending fails
      }
      
      res.status(201).json({ message: "Message sent successfully" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid contact data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to send message" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

import express from 'express';
import { storage } from '../server/storage';
import { setupAuth } from '../server/auth';
import { subscribeToMailchimp } from '../server/mailchimp';
import { z } from 'zod';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: any;

  const originalResJson = res.json;
  res.json = function(bodyJson: any, ...args: any[]) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on('finish', () => {
    const duration = Date.now() - start;
    if (path.startsWith('/api')) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + '…';
      }
      console.log(logLine);
    }
  });
  next();
});

// Set up authentication routes
setupAuth(app);

// Simple validation schemas
const newsletterSchema = z.object({
  email: z.string().email(),
  agreedToTerms: z.boolean()
});

const contactMessageSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  subject: z.string().min(2).max(200).optional(),
  message: z.string().min(10).max(2000)
});

const bookingSchema = z.object({
  classId: z.number(),
  date: z.string(),
  paid: z.boolean().default(false),
  status: z.string().default("pending")
});

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
app.get("/api/bookings", async (req: any, res: any) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  
  try {
    const user = req.user as any;
    const bookings = await storage.getBookings(user.id);
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch bookings" });
  }
});

app.post("/api/bookings", async (req: any, res: any) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  
  try {
    const user = req.user as any;
    const bookingData = bookingSchema.parse(req.body);
    
    const booking = await storage.createBooking({
      ...bookingData,
      userId: user.id,
      date: new Date(bookingData.date)
    });
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
    const newsletterData = newsletterSchema.parse(req.body);
    
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
    const contactData = contactMessageSchema.parse(req.body);
    
    // Store in database
    const message = await storage.createContactMessage(contactData);
    
    // Log the contact request
    console.log(`Contact form submission from ${contactData.name} (${contactData.email})`);
    console.log(`Subject: ${contactData.subject || "No subject"}`);
    console.log(`Message: ${contactData.message}`);
    
    res.status(201).json({ 
      message: "Message sent successfully",
      info: "Your message has been received and will be reviewed shortly."
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: "Invalid contact data", errors: error.errors });
    }
    res.status(500).json({ message: "Failed to send message" });
  }
});

// Error handling middleware
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(status).json({ message });
  throw err;
});

// Export the Express app for Vercel
export default app; 
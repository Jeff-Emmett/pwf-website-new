import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  fullName: text("full_name"),
  createdAt: timestamp("created_at").defaultNow()
});

export const classes = pgTable("classes", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  duration: integer("duration").notNull(), // in minutes
  price: integer("price").notNull(), // in cents
  capacity: integer("capacity").notNull(),
  classType: text("class_type").notNull(), // "group", "small-group", "private"
  imageUrl: text("image_url")
});

export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  classId: integer("class_id").notNull(),
  date: timestamp("date").notNull(),
  paid: boolean("paid").default(false),
  status: text("status").notNull().default("pending"), // pending, confirmed, cancelled
  createdAt: timestamp("created_at").defaultNow()
});

export const newsletters = pgTable("newsletters", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  agreedToTerms: boolean("agreed_to_terms").notNull(),
  createdAt: timestamp("created_at").defaultNow()
});

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow()
});

// Create insert schemas
export const insertUserSchema = createInsertSchema(users)
  .omit({ id: true, createdAt: true });

export const insertClassSchema = createInsertSchema(classes)
  .omit({ id: true });

export const insertBookingSchema = createInsertSchema(bookings)
  .omit({ id: true, createdAt: true });

export const insertNewsletterSchema = createInsertSchema(newsletters)
  .omit({ id: true, createdAt: true });

export const insertContactMessageSchema = createInsertSchema(contactMessages)
  .omit({ id: true, createdAt: true });

// Auth schemas
export const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

// Type exports
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertClass = z.infer<typeof insertClassSchema>;
export type Class = typeof classes.$inferSelect;

export type InsertBooking = z.infer<typeof insertBookingSchema>;
export type Booking = typeof bookings.$inferSelect;

export type InsertNewsletter = z.infer<typeof insertNewsletterSchema>;
export type Newsletter = typeof newsletters.$inferSelect;

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;

export type Login = z.infer<typeof loginSchema>;

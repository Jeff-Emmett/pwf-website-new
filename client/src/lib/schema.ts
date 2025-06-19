import { z } from "zod";

// User schemas
export const insertUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(2).max(100),
  role: z.enum(["user", "admin"]).default("user"),
});

export type InsertUser = z.infer<typeof insertUserSchema>;

export const userSchema = insertUserSchema.extend({
  id: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type User = z.infer<typeof userSchema>;

// Login schema
export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type Login = z.infer<typeof loginSchema>;

// Class schemas
export const classSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  duration: z.number(),
  price: z.number(),
  maxCapacity: z.number(),
  instructor: z.string(),
  category: z.string(),
  level: z.enum(["beginner", "intermediate", "advanced"]),
  classType: z.enum(["group", "small-group", "private", "online"]),
  imageUrl: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Class = z.infer<typeof classSchema>;

// Booking schemas
export const insertBookingSchema = z.object({
  classId: z.number(),
  userId: z.number(),
  date: z.string(),
  paid: z.boolean().default(false),
  status: z.enum(["pending", "confirmed", "cancelled"]).default("pending"),
});

export type InsertBooking = z.infer<typeof insertBookingSchema>;

// Newsletter schemas
export const insertNewsletterSchema = z.object({
  email: z.string().email(),
  agreedToTerms: z.boolean(),
});

export type InsertNewsletter = z.infer<typeof insertNewsletterSchema>;

// Contact message schemas
export const insertContactMessageSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  subject: z.string().min(2).max(200).optional(),
  message: z.string().min(10).max(2000),
});

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>; 
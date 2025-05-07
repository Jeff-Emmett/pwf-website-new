import { z } from "zod";
import { insertUserSchema, insertContactMessageSchema, insertNewsletterSchema } from "@shared/schema";

/**
 * Extended registration schema with password confirmation
 */
export const registrationSchema = insertUserSchema.extend({
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

/**
 * Contact form schema with validation
 */
export const contactFormSchema = insertContactMessageSchema.extend({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters"),
  email: z.string()
    .email("Please enter a valid email address"),
  subject: z.string()
    .min(2, "Subject must be at least 2 characters")
    .max(200, "Subject cannot exceed 200 characters")
    .optional(),
  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message cannot exceed 2000 characters"),
});

/**
 * Newsletter signup schema with validation
 */
export const newsletterSchema = insertNewsletterSchema.extend({
  email: z.string()
    .email("Please enter a valid email address"),
  agreedToTerms: z.boolean()
    .refine(val => val === true, {
      message: "You must agree to receive emails",
    }),
});

/**
 * Booking form schema
 */
export const bookingFormSchema = z.object({
  classId: z.number({
    required_error: "Please select a class",
  }),
  date: z.date({
    required_error: "Please select a date",
  }),
  time: z.string({
    required_error: "Please select a time",
  }),
});

/**
 * Email validation function
 */
export function validateEmail(email: string): boolean {
  return z.string().email().safeParse(email).success;
}

/**
 * Password strength validation
 * Returns a score from 0-4 and feedback
 */
export function validatePasswordStrength(password: string): {
  score: number;
  feedback: string;
} {
  // Start with a score of 0
  let score = 0;
  let feedback = "Password is too weak";

  // If password is empty, return early
  if (!password) {
    return { score, feedback };
  }

  // Add points for length
  if (password.length >= 8) score += 1;
  if (password.length >= 12) score += 1;

  // Add points for complexity
  if (/[A-Z]/.test(password)) score += 0.5;
  if (/[a-z]/.test(password)) score += 0.5;
  if (/[0-9]/.test(password)) score += 0.5;
  if (/[^A-Za-z0-9]/.test(password)) score += 0.5;

  // Provide feedback based on score
  if (score < 1) {
    feedback = "Password is too weak";
  } else if (score < 2) {
    feedback = "Password is weak";
  } else if (score < 3) {
    feedback = "Password is moderate";
  } else if (score < 4) {
    feedback = "Password is strong";
  } else {
    feedback = "Password is very strong";
  }

  // Ensure score is between 0-4
  score = Math.min(4, Math.max(0, Math.floor(score)));

  return { score, feedback };
}

/**
 * Format phone number for display
 */
export function formatPhoneNumber(phoneNumber: string): string {
  // Remove all non-digits
  const cleaned = phoneNumber.replace(/\D/g, '');
  
  // Format based on length
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
  } else if (cleaned.length === 11) {
    return `+${cleaned.slice(0, 1)} (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7, 11)}`;
  } else if (cleaned.length === 12) {
    return `+${cleaned.slice(0, 2)} (${cleaned.slice(2, 5)}) ${cleaned.slice(5, 8)}-${cleaned.slice(8, 12)}`;
  }
  
  // Return original if we can't format it
  return phoneNumber;
}

/**
 * Format price for display (e.g., $25.00)
 */
export function formatPrice(priceInCents: number): string {
  return `$${(priceInCents / 100).toFixed(2)}`;
}

/**
 * Validate URL function
 */
export function validateUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

import { users, classes, bookings, newsletters, contactMessages } from "@shared/schema";
import type { 
  User, InsertUser, 
  Class, InsertClass,
  Booking, InsertBooking,
  Newsletter, InsertNewsletter,
  ContactMessage, InsertContactMessage
} from "@shared/schema";
import session from "express-session";
import createMemoryStore from "memorystore";

const MemoryStore = createMemoryStore(session);

export interface IStorage {
  // User Management
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Class Management
  getClasses(): Promise<Class[]>;
  getClass(id: number): Promise<Class | undefined>;
  createClass(classData: InsertClass): Promise<Class>;
  
  // Booking Management
  getBookings(userId?: number): Promise<Booking[]>;
  getBooking(id: number): Promise<Booking | undefined>;
  createBooking(booking: InsertBooking): Promise<Booking>;
  updateBookingStatus(id: number, status: string): Promise<Booking | undefined>;
  
  // Newsletter Management
  getNewsletterByEmail(email: string): Promise<Newsletter | undefined>;
  createNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
  
  // Contact Management
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;

  // Session Store
  sessionStore: session.SessionStore;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private classes: Map<number, Class>;
  private bookings: Map<number, Booking>;
  private newsletters: Map<number, Newsletter>;
  private contactMessages: Map<number, ContactMessage>;
  
  currentUserId: number;
  currentClassId: number;
  currentBookingId: number;
  currentNewsletterId: number;
  currentContactMessageId: number;
  sessionStore: session.SessionStore;

  constructor() {
    this.users = new Map();
    this.classes = new Map();
    this.bookings = new Map();
    this.newsletters = new Map();
    this.contactMessages = new Map();
    
    this.currentUserId = 1;
    this.currentClassId = 1;
    this.currentBookingId = 1;
    this.currentNewsletterId = 1;
    this.currentContactMessageId = 1;
    
    this.sessionStore = new MemoryStore({
      checkPeriod: 86400000 // prune expired entries every 24h
    });
    
    // Initialize with some default classes
    this.seedClasses();
  }

  // User Management
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.email === email
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { 
      ...insertUser, 
      id,
      createdAt: new Date()
    };
    this.users.set(id, user);
    return user;
  }

  // Class Management
  async getClasses(): Promise<Class[]> {
    return Array.from(this.classes.values());
  }

  async getClass(id: number): Promise<Class | undefined> {
    return this.classes.get(id);
  }

  async createClass(classData: InsertClass): Promise<Class> {
    const id = this.currentClassId++;
    const newClass: Class = { ...classData, id };
    this.classes.set(id, newClass);
    return newClass;
  }

  // Booking Management
  async getBookings(userId?: number): Promise<Booking[]> {
    const bookings = Array.from(this.bookings.values());
    if (userId) {
      return bookings.filter(booking => booking.userId === userId);
    }
    return bookings;
  }

  async getBooking(id: number): Promise<Booking | undefined> {
    return this.bookings.get(id);
  }

  async createBooking(booking: InsertBooking): Promise<Booking> {
    const id = this.currentBookingId++;
    const newBooking: Booking = { 
      ...booking, 
      id,
      createdAt: new Date()
    };
    this.bookings.set(id, newBooking);
    return newBooking;
  }

  async updateBookingStatus(id: number, status: string): Promise<Booking | undefined> {
    const booking = this.bookings.get(id);
    if (booking) {
      const updatedBooking = { ...booking, status };
      this.bookings.set(id, updatedBooking);
      return updatedBooking;
    }
    return undefined;
  }

  // Newsletter Management
  async getNewsletterByEmail(email: string): Promise<Newsletter | undefined> {
    return Array.from(this.newsletters.values()).find(
      (newsletter) => newsletter.email === email
    );
  }

  async createNewsletter(newsletter: InsertNewsletter): Promise<Newsletter> {
    const id = this.currentNewsletterId++;
    const newNewsletter: Newsletter = { 
      ...newsletter, 
      id,
      createdAt: new Date()
    };
    this.newsletters.set(id, newNewsletter);
    return newNewsletter;
  }

  // Contact Management
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentContactMessageId++;
    const newMessage: ContactMessage = { 
      ...message, 
      id,
      createdAt: new Date()
    };
    this.contactMessages.set(id, newMessage);
    return newMessage;
  }

  // Seed default data
  private seedClasses() {
    const defaultClasses: InsertClass[] = [
      {
        name: "Mat Pilates",
        description: "A foundational class focusing on core strength, proper alignment, and mindful movement patterns.",
        duration: 60,
        price: 2500, // $25.00
        capacity: 15,
        classType: "group",
        imageUrl: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f"
      },
      {
        name: "Reformer",
        description: "Equipment-based sessions that enhance resistance training for deeper muscle engagement.",
        duration: 55,
        price: 4000, // $40.00
        capacity: 8,
        classType: "small-group",
        imageUrl: "https://images.unsplash.com/photo-1562088287-bde35a1ea917"
      },
      {
        name: "Private Sessions",
        description: "Personalized attention and customized programming to meet your specific goals and needs.",
        duration: 60,
        price: 7500, // $75.00
        capacity: 1,
        classType: "private",
        imageUrl: "https://images.unsplash.com/photo-1616279969856-759f316a5ac1"
      },
      {
        name: "Online Classes",
        description: "Practice pilates from the comfort of your own home or wherever you happen to be with our convenient online sessions.",
        duration: 50,
        price: 2000, // $20.00
        capacity: 20,
        classType: "online",
        imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a"
      }
    ];

    defaultClasses.forEach(classData => {
      this.createClass(classData);
    });
  }
}

export const storage = new MemStorage();

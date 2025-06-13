// Primary colors
export const COLORS = {
  teal: {
    primary: "#0c8991",
    light: "#E6F4F5"
  },
  purple: {
    primary: "#9D5E9B",
    light: "#F5E6F4"
  },
  rose: {
    primary: "#B55076",
    light: "#F9E6EE"
  }
};

// Contact information
export const CONTACT_INFO = {
  studioAddress: "123 Serenity Lane, Wellness District\nDubai, United Arab Emirates",
  email: "hello@pilateswithfadia.com",
  phone: "+971 50 123 4567",
  hours: {
    weekday: "Monday-Friday: 7AM-9PM",
    saturday: "Saturday: 8AM-6PM",
    sunday: "Sunday: 9AM-4PM"
  },
  socialMedia: {
    instagram: "https://instagram.com/pilateswithfadia",
    facebook: "https://facebook.com/pilateswithfadia",
    youtube: "https://www.youtube.com/channel/UCUbMEjCowuRroSFzkP31Jlw",
    twitter: "https://twitter.com/pilateswithfadia"
  }
};

// Studio features
export const FEATURES = [
  {
    title: "Balance",
    description: "Find harmony between body and mind through mindful movement.",
    icon: "fa-align-center",
    color: "teal" as const,
  },
  {
    title: "Strength",
    description: "Build core power and muscular endurance through controlled exercises.",
    icon: "fa-dumbbell",
    color: "purple" as const,
  },
  {
    title: "Flexibility",
    description: "Enhance your range of motion and release tension throughout your body.",
    icon: "fa-wind",
    color: "rose" as const,
  },
];

// Class types
export const CLASS_TYPES = {
  group: {
    name: "Group",
    badgeClass: "bg-teal-light text-teal",
    buttonClass: "bg-teal text-white"
  },
  smallGroup: {
    name: "Small Group",
    badgeClass: "bg-purple-light text-purple",
    buttonClass: "bg-purple text-white"
  },
  private: {
    name: "1-on-1",
    badgeClass: "bg-rose-light text-rose",
    buttonClass: "bg-rose text-white"
  }
};

// SEO metadata
export const SEO = {
  home: {
    title: "Pilates with Fadia - Feel at Home in Your Body",
    description: "Online pilates classes to help you feel stronger and more connected to your body and breath."
  },
  about: {
    title: "About Fadia | Pilates with Fadia",
    description: "Learn about Fadia's journey and philosophy as a dedicated Pilates instructor with over a decade of experience."
  },
  classes: {
    title: "Classes | Pilates with Fadia",
    description: "Book Pilates classes with Fadia. Choose from Mat Pilates, Reformer sessions, or personalized private training."
  },
  community: {
    title: "Community | Pilates with Fadia",
    description: "Join our supportive Pilates community. Connect with like-minded individuals on your wellness journey."
  },
  contact: {
    title: "Contact | Pilates with Fadia",
    description: "Get in touch with Fadia. Send a message, find studio hours, or book a consultation for your Pilates journey."
  },
  auth: {
    title: "Login or Sign Up | Pilates with Fadia",
    description: "Create an account or login to book classes, access community features, and more with Pilates with Fadia."
  }
};

// Testimonials
export const TESTIMONIALS = [
  {
    quote: "Fadia's approach to Pilates has completely transformed my relationship with my body. The community she's built is supportive and encouraging.",
    author: "Sarah H.",
    memberSince: "2021",
    initials: "SH",
    color: "teal" as const,
  },
  {
    quote: "As someone recovering from back surgery, I was hesitant to try Pilates. Fadia's expertise made me feel safe and I've gained strength I never thought possible.",
    author: "Michael K.",
    memberSince: "2022",
    initials: "MK",
    color: "purple" as const,
  },
  {
    quote: "The community aspect of Pilates with Fadia sets it apart. I've not only improved my physical health but have made wonderful connections with fellow members.",
    author: "Amina L.",
    memberSince: "2020",
    initials: "AL",
    color: "rose" as const,
  },
];

// Navigation links
export const NAV_LINKS = [
  { name: "Book a Class", path: "/calendar" },
  { name: "Meet Fadia", path: "/about" },
  { name: "Contact", path: "/contact" },
];

// Studio certifications
export const CERTIFICATIONS = [
  {
    title: "Certified Instructor",
    description: "Comprehensive Pilates Certification",
    icon: "fa-certificate",
    color: "teal",
  },
  {
    title: "Advanced Training",
    description: "Specialized in Rehabilitation",
    icon: "fa-graduation-cap",
    color: "purple",
  },
  {
    title: "Wellness Expert",
    description: "Holistic Approach to Health",
    icon: "fa-heartbeat",
    color: "rose",
  },
  {
    title: "10+ Years Experience",
    description: "Guiding Hundreds of Students",
    icon: "fa-users",
    color: "teal",
  },
];

// Business hours for studio operation
export const BUSINESS_HOURS = {
  start: 9, // 9 AM
  end: 20,  // 8 PM
};

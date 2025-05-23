import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  from: string;
  subject: string;
  text: string;
  html?: string;
}

// Create a transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // You may need to change this depending on your email provider
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // email address used for sending
    pass: process.env.EMAIL_PASSWORD, // email password or app-specific password
  },
  tls: {
    rejectUnauthorized: false // only for development
  }
});

export async function sendEmail(options: EmailOptions): Promise<boolean> {
  try {
    // Set sender if not specified
    const mailOptions = {
      from: options.from || `"Pilates with Fadia" <${process.env.EMAIL_USER}>`,
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html,
      replyTo: options.from // Set reply-to as the sender's email
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}
import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  from: string;
  subject: string;
  text: string;
  html?: string;
}

// Log email configuration (without password)
console.log(`Email configuration: Using ${process.env.EMAIL_USER} to send emails`);

// Create a transporter 
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use predefined settings for Gmail
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD, // This needs to be an app password for Gmail
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
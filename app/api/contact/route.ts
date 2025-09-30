import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { message: 'Missing required fields' }, 
        { status: 400 }
      );
    }

    // Check if email configuration is available
    if (!process.env.GMAIL || !process.env.GMAIL_PWD) {
      console.log('Email configuration not found. Storing contact form data locally.');
      
      // For development, just log the contact form data
      console.log('Contact Form Submission:', {
        name: body.name,
        email: body.email,
        message: body.message,
        timestamp: new Date().toISOString()
      });
      
      return NextResponse.json(
        { message: 'Contact form received successfully' }, 
        { status: 200 }
      );
    }

    const transporter = nodemailer.createTransport({
      port: 465,
      host: 'smtp.gmail.com',
      secure: true,
      auth: {
        user: process.env.GMAIL,
        pass: process.env.GMAIL_PWD,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL, // Use your email as sender
      to: process.env.GMAIL,   // Send to yourself
      replyTo: body.email,     // Allow replies to the original sender
      subject: `Portfolio Contact: ${body.name}`,
      text: `Name: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: 'Email sent successfully' }, 
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'Failed to send message. Please try again.' }, 
      { status: 500 }
    );
  }
}
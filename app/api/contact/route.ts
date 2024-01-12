import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  
    const body = await request.json();

  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    //service: 'gmail',
    auth: {
      user: process.env.GMAIL,
      pass: process.env.GMAIL_PWD,
    },
  });

  const mailOptions = {
    from: body.email,
    to: process.env.GMAIL,
    subject: `From Portofolio`,
    text: `Name: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, {status: 200});
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, {status: 500});
  }

}
import nodemailer from "nodemailer";
import { NextRequest } from "next/server";


export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    // Create SMTP transporter (example uses Brevo)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Archomak Contact" <support@archomak.tech>`,
      to: "deantoshdaiddoh@gmail.com",  
      replyTo: email,
      subject: `New Contact Form: ${subject}`,
      html: `
        <h2>New Message From Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Email failed" }), { status: 500 });
  }
}

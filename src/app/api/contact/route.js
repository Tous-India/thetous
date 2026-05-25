import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { getFormRecipients } from "@/lib/email-config";

const strip = (str) => String(str || "").replace(/[<>"'&]/g, "").trim().slice(0, 1000);
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return NextResponse.json({ error: "Email service is not configured" }, { status: 500 });
  }

  try {
    const { name, email, phone, message, services } = await request.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Please fill all required fields" }, { status: 400 });
    }
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const safeName     = strip(name);
    const safeEmail    = strip(email);
    const safePhone    = strip(phone);
    const safeMessage  = strip(message);
    const safeServices = Array.isArray(services) ? services.map(strip).join(", ") : "";

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === "true",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    const adminMailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: getFormRecipients(),
      replyTo: process.env.EMAIL_FROM || "grow@thetous.com",
      subject: `New Enquiry from ${safeName}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#f5f5f5">
          <div style="background:white;padding:30px;border-radius:10px;box-shadow:0 2px 4px rgba(0,0,0,0.1)">
            <h2 style="color:#333;border-bottom:2px solid #000;padding-bottom:10px">New Contact Form Submission</h2>
            <div style="margin:20px 0">
              <p style="margin:8px 0"><strong>Name:</strong> ${safeName}</p>
              <p style="margin:8px 0"><strong>Email:</strong> <a href="mailto:${safeEmail}" style="color:#000">${safeEmail}</a></p>
              ${safePhone ? `<p style="margin:8px 0"><strong>Phone:</strong> ${safePhone}</p>` : ""}
              ${safeServices ? `<p style="margin:8px 0"><strong>Interested in:</strong> ${safeServices}</p>` : ""}
            </div>
            ${safeMessage ? `
            <div style="margin:20px 0">
              <h3 style="color:#555;margin-bottom:5px">Message:</h3>
              <p style="padding:15px;background:#f9f9f9;border-left:3px solid #000;border-radius:4px;margin:0">${safeMessage}</p>
            </div>` : ""}
            <div style="margin-top:30px;padding-top:20px;border-top:1px solid #ddd;color:#888;font-size:12px">
              <p>Sent from the contact form on thetous.com</p>
            </div>
          </div>
        </div>`,
    };

    const userMailOptions = {
      from: '"The Tous" <' + (process.env.EMAIL_FROM || "grow@thetous.com") + ">",
      to: safeEmail,
      subject: "Your strategy call has been booked — The Tous",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#f5f5f5">
          <div style="background:white;padding:30px;border-radius:10px;box-shadow:0 2px 4px rgba(0,0,0,0.1)">
            <div style="text-align:center;margin-bottom:20px">
              <img src="https://blog.thetous.com/wp-content/uploads/2026/01/logo.webp" alt="The Tous" style="max-width:180px;height:auto" />
            </div>
            <h2 style="color:#333;border-bottom:2px solid #000;padding-bottom:10px">Thanks for reaching out.</h2>
            <p style="color:#555;line-height:1.7;margin:20px 0">Hi ${safeName},</p>
            <p style="color:#555;line-height:1.7;margin:0 0 16px 0">We've received your message and will get back to you within one business day.</p>
            <p style="color:#555;line-height:1.7;margin:0 0 16px 0">If you need a faster response, WhatsApp or call us at <a href="https://wa.link/vj2khp" style="color:#000;font-weight:bold">+91-8901440322</a>.</p>
            <div style="margin-top:30px;padding-top:20px;border-top:1px solid #ddd">
              <p style="color:#333;font-weight:bold;margin:5px 0">The Tous</p>
              <p style="color:#888;font-size:13px;margin:5px 0"><a href="mailto:grow@thetous.com" style="color:#888;text-decoration:none">grow@thetous.com</a></p>
            </div>
          </div>
        </div>`,
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("[contact] Email error:", error.message);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}

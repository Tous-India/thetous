import crypto from "node:crypto";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { getFormRecipients } from "@/lib/email-config";
import { sendMetaEvent } from "@/lib/meta-capi";

const strip = (str) => String(str || "").replace(/[<>"'&]/g, "").trim().slice(0, 1000);
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return NextResponse.json({ error: "Email service is not configured" }, { status: 500 });
  }

  try {
    const { name, email, phone, company, buildType, message, timeline, budget } = await request.json();

    if (!name || !email || !buildType || !timeline) {
      return NextResponse.json({ error: "Please fill all required fields" }, { status: 400 });
    }
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const safeName     = strip(name);
    const safeEmail    = strip(email);
    const safePhone    = strip(phone);
    const safeCompany  = strip(company);
    const safeBuild    = strip(buildType);
    const safeMessage  = strip(message);
    const safeTimeline = strip(timeline);
    const safeBudget   = strip(budget);

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
      subject: `New Quote Request from ${safeName}${safeCompany ? ` — ${safeCompany}` : ""}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#f5f5f5">
          <div style="background:white;padding:30px;border-radius:10px;box-shadow:0 2px 4px rgba(0,0,0,0.1)">
            <h2 style="color:#333;border-bottom:2px solid #000;padding-bottom:10px">New Quote Request</h2>
            <div style="margin:20px 0">
              <p style="margin:8px 0"><strong>Name:</strong> ${safeName}</p>
              <p style="margin:8px 0"><strong>Email:</strong> <a href="mailto:${safeEmail}" style="color:#000">${safeEmail}</a></p>
              <p style="margin:8px 0"><strong>Phone:</strong> ${safePhone || "(not provided)"}</p>
              ${safeCompany ? `<p style="margin:8px 0"><strong>Company / Brand:</strong> ${safeCompany}</p>` : ""}
              <p style="margin:8px 0"><strong>Looking to build:</strong> ${safeBuild}</p>
              <p style="margin:8px 0"><strong>Timeline:</strong> ${safeTimeline}</p>
              ${safeBudget ? `<p style="margin:8px 0"><strong>Budget:</strong> ${safeBudget}</p>` : ""}
            </div>
            ${safeMessage ? `
            <div style="margin:20px 0">
              <h3 style="color:#555;margin-bottom:5px">Project details:</h3>
              <p style="padding:15px;background:#f9f9f9;border-left:3px solid #000;border-radius:4px;margin:0">${safeMessage}</p>
            </div>` : ""}
            <div style="margin-top:30px;padding-top:20px;border-top:1px solid #ddd;color:#888;font-size:12px">
              <p>Sent from the quote form on thetous.com</p>
            </div>
          </div>
        </div>`,
    };

    const userMailOptions = {
      from: '"The Tous" <' + (process.env.EMAIL_FROM || "grow@thetous.com") + ">",
      to: safeEmail,
      subject: "We've received your quote request — The Tous",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#f5f5f5">
          <div style="background:white;padding:30px;border-radius:10px;box-shadow:0 2px 4px rgba(0,0,0,0.1)">
            <div style="text-align:center;margin-bottom:20px">
              <img src="https://blog.thetous.com/wp-content/uploads/2026/01/logo.webp" alt="The Tous" style="max-width:180px;height:auto" />
            </div>
            <h2 style="color:#333;border-bottom:2px solid #000;padding-bottom:10px">Thanks for reaching out.</h2>
            <p style="color:#555;line-height:1.7;margin:20px 0">Hi ${safeName},</p>
            <p style="color:#555;line-height:1.7;margin:0 0 16px 0">We've received your quote request and will get back to you within one business day.</p>
            <p style="color:#555;line-height:1.7;margin:0 0 16px 0">If you need a faster response, WhatsApp us at <a href="https://wa.link/vj2khp" style="color:#000;font-weight:bold">+91-8901440322</a>.</p>
            <div style="margin-top:30px;padding-top:20px;border-top:1px solid #ddd">
              <p style="color:#333;font-weight:bold;margin:5px 0">The Tous</p>
              <p style="color:#888;font-size:13px;margin:5px 0"><a href="mailto:grow@thetous.com" style="color:#888;text-decoration:none">grow@thetous.com</a></p>
            </div>
          </div>
        </div>`,
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    const eventId = crypto.randomUUID();
    const forwardedFor = request.headers.get("x-forwarded-for");
    const clientIp =
      (forwardedFor ? forwardedFor.split(",")[0].trim() : request.headers.get("x-real-ip")) ||
      undefined;
    const clientUserAgent = request.headers.get("user-agent") || undefined;
    const eventSourceUrl = request.headers.get("referer") || undefined;

    try {
      await sendMetaEvent({
        eventName: "Lead",
        eventId,
        userData: { email: safeEmail, phone: safePhone, firstName: safeName },
        customData: {
          form_type: "book-a-call",
          company: safeCompany,
          build_type: safeBuild,
          timeline: safeTimeline,
          budget: safeBudget,
        },
        eventSourceUrl,
        clientIp,
        clientUserAgent,
      });
    } catch (capiErr) {
      console.warn("[quote] CAPI Lead event failed:", capiErr?.message || capiErr);
    }

    return NextResponse.json(
      { message: "Quote request submitted successfully", eventId },
      { status: 200 }
    );
  } catch (error) {
    console.error("[quote] Email error:", error.message);
    return NextResponse.json({ error: "Failed to submit quote request" }, { status: 500 });
  }
}

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, phone, services, message } = await request.json();

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content for admin notification
    const adminMailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: "grow@thetous.com",
      subject: `New Contact Form Submission from ${name}`,
      text: `New Contact Form Submission\n\nContact Details:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${
        services && services.length > 0
          ? `Services Interested In:\n${services
              .map((service) => `- ${service}`)
              .join("\n")}\n\n`
          : ""
      }Message:\n${message}\n\nThis email was sent from the contact form on The Tous website.`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">New Contact Form Submission</h2>

            <div style="margin: 20px 0;">
              <h3 style="color: #555; margin-bottom: 5px;">Contact Details:</h3>
              <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #4CAF50; text-decoration: none;">${email}</a></p>
              <p style="margin: 5px 0;"><strong>Phone:</strong> ${phone}</p>
            </div>

            ${
              services && services.length > 0
                ? `
            <div style="margin: 20px 0;">
              <h3 style="color: #555; margin-bottom: 5px;">Services Interested In:</h3>
              <ul style="margin: 5px 0; padding-left: 20px;">
                ${services.map((service) => `<li>${service}</li>`).join("")}
              </ul>
            </div>
            `
                : ""
            }

            <div style="margin: 20px 0;">
              <h3 style="color: #555; margin-bottom: 5px;">Message:</h3>
              <p style="margin: 5px 0; padding: 15px; background-color: #f9f9f9; border-left: 3px solid #4CAF50; border-radius: 4px;">
                ${message}
              </p>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #888; font-size: 12px;">
              <p>This email was sent from the contact form on The Tous website.</p>
            </div>
          </div>
        </div>
      `,
    };

    // Email content for user confirmation
    const userMailOptions = {
      from:
        '"The Tous" <' + (process.env.EMAIL_FROM || "grow@thetous.com") + ">",
      to: email,
      subject: "Thank You for Contacting The Tous",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 20px;">
              <img src="https://blog.thetous.com/wp-content/uploads/2026/01/logo.webp" alt="The Tous Logo" style="max-width: 200px; height: auto;" />
            </div>
            <h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">Thank You for Reaching Out!</h2>

            <p style="color: #555; line-height: 1.6; margin: 20px 0;font-family:'Poppins';">
              Dear ${name},
            </p>


            <div>
              <p style="color: #333; margin: 0; font-weight: bold;">
                Your request has been submitted successfully.
              </p>
              <p style="color: #555; margin: 10px 0 0 0;">
                Our team will review your message and get back to you as soon as possible.
              </p>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
              <p style="color: #333; font-weight: bold; margin: 5px 0;">Best regards,</p>
              <p style="color:black; font-weight: bold;font-family:'Poppins'; font-size: 18px; margin: 5px 0;">The Tous</p>
              <p style="color: #888; font-size: 14px; margin: 5px 0;font-family:'Poppins';">
                <a href="mailto:grow@thetous.com" style="color: #888; text-decoration: none;">grow@thetous.com</a>
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Send email to admin
    await transporter.sendMail(adminMailOptions);

    // Send confirmation email to user
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 }
    );
  }
}

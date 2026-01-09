import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const formData = await request.json();

    const {
      // Contact Details
      fullName,
      brandName,
      email,
      phone,
      websiteUrl,

      // Services
      services,
      otherService,

      // Website/App Conditionals
      projectType,
      approxPages,
      referenceWebsites,
      contentReady,

      // Marketing Conditionals
      marketingPlatforms,
      monthlyAdBudget,
      brandStage,

      // Budget & Expectations
      budget,
      expectations,

      // Metadata
      timestamp,
      leadSource,
    } = formData;

    // Validate required fields
    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Required fields are missing" },
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

    // Calculate lead score
    const calculateLeadScore = () => {
      let score = 0;

      // Budget scoring (0-70 points)
      if (budget === "₹1L+") score += 70;
      else if (budget === "₹50k - ₹1L") score += 55;
      else if (budget === "₹25k - ₹50k") score += 35;
      else if (budget === "₹10k - ₹25k") score += 20;

      // Multiple services scoring (0-30 points)
      if (services.length >= 3) score += 30;
      else if (services.length >= 2) score += 15;

      return score;
    };

    const leadScore = calculateLeadScore();
    const leadPriority =
      leadScore >= 70 ? " HOT" : leadScore >= 40 ? "🟡 WARM" : "🔵 COLD";

    // Format services list
    const servicesList = services
      .map((s) => (s === "Other" ? `Other: ${otherService}` : s))
      .join(", ");

    // Email content for admin notification
    const adminMailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: "grow@thetous.com",
      subject: `${leadPriority} New Quote Request from ${fullName} - ${budget}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Poppins', Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 700px; margin: 0 auto; background: #f5f5f5; }
            .header { background: linear-gradient(135deg, #000 0%, #333 100%); color: white; padding: 30px; text-align: center; }
            .header h1 { margin: 0; font-size: 28px; }
            .priority-badge { display: inline-block; padding: 8px 16px; background: rgba(255,255,255,0.2); border-radius: 20px; margin-top: 10px; font-size: 14px; }
            .content { background: white; padding: 30px; }
            .section { margin-bottom: 25px; }
            .section-title { font-size: 18px; font-weight: 700; color: #000; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 2px solid #f0f0f0; display: flex; align-items: center; }
            .section-title i { margin-right: 8px; }
            .info-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; }
            .info-item { background: #f9f9f9; padding: 12px; border-radius: 6px; border-left: 3px solid #000; }
            .info-label { font-size: 12px; color: #666; text-transform: uppercase; font-weight: 600; margin-bottom: 4px; }
            .info-value { font-size: 15px; color: #1a1a1a; font-weight: 500; }
            .full-width { grid-column: 1 / -1; }
            .services-list { background: #e8f5e9; padding: 15px; border-radius: 6px; border-left: 4px solid #4caf50; }
            .services-list ul { margin: 8px 0; padding-left: 20px; }
            .services-list li { margin: 4px 0; }
            .expectations-box { background: #fff3e0; padding: 15px; border-radius: 6px; border-left: 4px solid #ff9800; margin-top: 10px; }
            .lead-score { text-align: center; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 8px; margin: 20px 0; }
            .lead-score h2 { margin: 0; font-size: 36px; }
            .lead-score p { margin: 5px 0 0 0; opacity: 0.9; }
            .footer { background: #f5f5f5; padding: 20px; text-align: center; font-size: 12px; color: #666; }
            .cta-button { display: inline-block; background: #000; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin-top: 15px; font-weight: 600; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎯 New Quote Request</h1>
              <div class="priority-badge">${leadPriority} Lead - Score: ${leadScore}/100</div>
            </div>

            <div class="content">
              <!-- Lead Score -->
              <div class="lead-score">
                <h2>${leadScore}/100</h2>
                <p>Lead Quality Score</p>
              </div>

              <!-- Contact Information -->
              <div class="section">
                <div class="section-title">
                  👤 Contact Information
                </div>
                <div class="info-grid">
                  <div class="info-item">
                    <div class="info-label">Full Name</div>
                    <div class="info-value">${fullName}</div>
                  </div>
                  ${
                    brandName
                      ? `
                  <div class="info-item">
                    <div class="info-label">Brand Name</div>
                    <div class="info-value">${brandName}</div>
                  </div>
                  `
                      : ""
                  }
                  <div class="info-item">
                    <div class="info-label">Email</div>
                    <div class="info-value"><a href="mailto:${email}">${email}</a></div>
                  </div>
                  <div class="info-item">
                    <div class="info-label">Phone / WhatsApp</div>
                    <div class="info-value"><a href="tel:${phone}">${phone}</a></div>
                  </div>
                  ${
                    websiteUrl
                      ? `
                  <div class="info-item">
                    <div class="info-label">Current Website</div>
                    <div class="info-value"><a href="${websiteUrl}" target="_blank">${websiteUrl}</a></div>
                  </div>
                  `
                      : ""
                  }
                </div>
              </div>

              <!-- Services Required -->
              <div class="section">
                <div class="section-title">
                  🎨 Services Required
                </div>
                <div class="services-list">
                  <ul>
                    ${services
                      .map(
                        (service) =>
                          `<li><strong>${
                            service === "Other"
                              ? `Other: ${otherService}`
                              : service
                          }</strong></li>`
                      )
                      .join("")}
                  </ul>
                </div>
              </div>

              ${
                projectType
                  ? `
              <!-- Website/App Details -->
              <div class="section">
                <div class="section-title">
                  💻 Website / App Details
                </div>
                <div class="info-grid">
                  <div class="info-item">
                    <div class="info-label">Project Type</div>
                    <div class="info-value">${projectType}</div>
                  </div>
                  <div class="info-item">
                    <div class="info-label">Approximate Pages</div>
                    <div class="info-value">${approxPages}</div>
                  </div>
                  <div class="info-item">
                    <div class="info-label">Content Ready</div>
                    <div class="info-value">${contentReady}</div>
                  </div>
                  ${
                    referenceWebsites &&
                    referenceWebsites.length > 0 &&
                    referenceWebsites[0]
                      ? `
                  <div class="info-item full-width">
                    <div class="info-label">Reference Websites</div>
                    <div class="info-value">
                      ${referenceWebsites
                        .filter((url) => url)
                        .map((url) => `<a href="${url}" target="_blank">${url}</a>`)
                        .join("<br>")}
                    </div>
                  </div>
                  `
                      : ""
                  }
                </div>
              </div>
              `
                  : ""
              }

              ${
                marketingPlatforms && marketingPlatforms.length > 0
                  ? `
              <!-- Marketing Details -->
              <div class="section">
                <div class="section-title">
                  📢 Marketing Details
                </div>
                <div class="info-grid">
                  <div class="info-item full-width">
                    <div class="info-label">Platforms Required</div>
                    <div class="info-value">${marketingPlatforms.join(", ")}</div>
                  </div>
                  <div class="info-item">
                    <div class="info-label">Monthly Ad Budget</div>
                    <div class="info-value">${monthlyAdBudget}</div>
                  </div>
                  <div class="info-item">
                    <div class="info-label">Brand Stage</div>
                    <div class="info-value">${brandStage}</div>
                  </div>
                </div>
              </div>
              `
                  : ""
              }

              <!-- Budget -->
              <div class="section">
                <div class="section-title">
                  💰 Budget Expectation
                </div>
                <div class="info-grid">
                  <div class="info-item">
                    <div class="info-label">Budget Range</div>
                    <div class="info-value" style="font-size: 18px; font-weight: 700; color: #4caf50;">${budget}</div>
                  </div>
                </div>
              </div>

              <!-- Expectations -->
              <div class="section">
                <div class="section-title">
                  📝 Project Expectations
                </div>
                <div class="expectations-box">
                  <div class="info-label">Client Expectations</div>
                  <div class="info-value">${expectations}</div>
                </div>
              </div>

              <!-- Submission Info -->
              <div class="section">
                <div class="section-title">
                  ℹ️ Submission Information
                </div>
                <div class="info-grid">
                  <div class="info-item">
                    <div class="info-label">Lead Source</div>
                    <div class="info-value">${leadSource}</div>
                  </div>
                  <div class="info-item">
                    <div class="info-label">Submitted On</div>
                    <div class="info-value">${new Date(timestamp).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })}</div>
                  </div>
                </div>
              </div>

              <!-- CTA -->
              <div style="text-align: center; margin-top: 30px;">
                <a href="mailto:${email}" class="cta-button">📧 Reply to ${fullName}</a>
                <a href="https://wa.me/${phone.replace(/\D/g, "")}" class="cta-button" style="background: #25D366; margin-left: 10px;">💬 WhatsApp</a>
              </div>
            </div>

            <div class="footer">
              <p>This quote request was submitted from The Tous website.</p>
              <p>Lead Score is calculated based on budget range and number of services selected.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Email content for user confirmation
    const userMailOptions = {
      from:
        '"The Tous" <' + (process.env.EMAIL_FROM || "grow@thetous.com") + ">",
      to: email,
      subject: "We've Received Your Quote Request - The Tous",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Poppins', Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; background: #f5f5f5; }
            .header { background: white; color: #1a1a1a; padding: 40px 30px; text-align: center; border-bottom: 3px solid #000; }
            .header h1 { margin: 0; font-size: 28px; font-family: 'Lato', sans-serif; }
            .header p { font-family: 'Poppins', sans-serif; }
            .content { background: white; padding: 30px; }
            .greeting { font-size: 18px; color: #1a1a1a; margin-bottom: 20px; font-family: 'Poppins', sans-serif; }
            .message { color: #555; line-height: 1.8; margin-bottom: 20px; font-family: 'Poppins', sans-serif; }
            .highlight-box { background: #f9f9f9; padding: 20px; border-radius: 8px; border-left: 4px solid #000; margin: 25px 0; font-family: 'Poppins', sans-serif; }
            .services-summary { background: #e8f5e9; padding: 15px; border-radius: 6px; margin: 20px 0; font-family: 'Poppins', sans-serif; }
            .services-summary p { font-family: 'Poppins', sans-serif; }
            .services-summary strong { font-family: 'Poppins', sans-serif; }
            .services-summary em { font-family: 'Poppins', sans-serif; }
            .next-steps { background: #fff3e0; padding: 20px; border-radius: 8px; margin: 25px 0; }
            .next-steps h3 { margin-top: 0; color: #e65100; font-family: 'Lato', sans-serif; }
            .next-steps ul { margin: 10px 0; padding-left: 20px; font-family: 'Poppins', sans-serif; }
            .next-steps li { margin: 8px 0; font-family: 'Poppins', sans-serif; }
            .cta-button { display: inline-block; background: #000; color: white; padding: 14px 35px; text-decoration: none; border-radius: 6px; margin-top: 20px; font-weight: 600; font-family: 'Poppins', sans-serif; }
            .footer { background: #1a1a1a; color: white; padding: 25px; text-align: center; }
            .footer strong { font-family: 'Lato', sans-serif; }
            .footer p { font-family: 'Poppins', sans-serif; }
            .footer-links { margin-top: 15px; font-family: 'Poppins', sans-serif; }
            .footer-links a { color: white; margin: 0 10px; text-decoration: none; font-family: 'Poppins', sans-serif; }
            .social-icons { margin-top: 15px; font-size: 24px; }
            .social-icons a { color: white; margin: 0 8px; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div style="margin-bottom: 20px;">
                <img src="https://blog.thetous.com/wp-content/uploads/2026/01/logo.webp" alt="The Tous Logo" style="max-width: 200px; height: auto; margin-bottom: 10px;" />
              </div>
              <h1>✨ Thank You, ${fullName}!</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Your quote request has been received</p>
            </div>

            <div class="content">
              <div class="greeting">
                Dear ${fullName},
              </div>

              <div class="message">
                Thank you for reaching out to <strong>The Tous</strong>! We're excited about the opportunity to work with you${brandName ? ` and ${brandName}` : ""}.
              </div>

              <div class="highlight-box">
                <strong>📋 Your Request Summary:</strong>
                <div class="services-summary" style="margin-top: 15px;">
                  ${brandName ? `<p style="margin: 8px 0;"><strong>Brand Name:</strong> ${brandName}</p>` : ""}
                  ${websiteUrl ? `<p style="margin: 8px 0;"><strong>Current Website:</strong> ${websiteUrl}</p>` : ""}
                  <p style="margin: 8px 0;"><strong>Services Required:</strong> ${servicesList}</p>
                  ${projectType ? `<p style="margin: 8px 0;"><strong>Project Type:</strong> ${projectType}</p>` : ""}
                  ${approxPages ? `<p style="margin: 8px 0;"><strong>Approximate Pages:</strong> ${approxPages}</p>` : ""}
                  ${contentReady ? `<p style="margin: 8px 0;"><strong>Content Ready:</strong> ${contentReady}</p>` : ""}
                  ${referenceWebsites && referenceWebsites.length > 0 && referenceWebsites[0] ? `<p style="margin: 8px 0;"><strong>Reference Websites:</strong><br>${referenceWebsites.filter(url => url).map(url => `<a href="${url}" style="color: #4caf50;">${url}</a>`).join("<br>")}</p>` : ""}
                  ${marketingPlatforms && marketingPlatforms.length > 0 ? `<p style="margin: 8px 0;"><strong>Marketing Platforms:</strong> ${marketingPlatforms.join(", ")}</p>` : ""}
                  ${monthlyAdBudget ? `<p style="margin: 8px 0;"><strong>Monthly Ad Budget:</strong> ${monthlyAdBudget}</p>` : ""}
                  ${brandStage ? `<p style="margin: 8px 0;"><strong>Brand Stage:</strong> ${brandStage}</p>` : ""}
                  <p style="margin: 8px 0;"><strong>Budget Range:</strong> ${budget}</p>
                  ${expectations ? `<p style="margin: 8px 0;"><strong>Your Expectations:</strong><br><em style="color: #666;">${expectations}</em></p>` : ""}
                </div>
              </div>

              <div class="next-steps">
                <h3>🎯 What Happens Next?</h3>
                <ul>
                  <li><strong>Review:</strong> Our team is reviewing your requirements carefully</li>
                  <li><strong>Analysis:</strong> We'll prepare a customized proposal tailored to your needs</li>
                  <li><strong>Response:</strong> Expect to hear from us within 24-48 hours</li>
                  <li><strong>Consultation:</strong> We'll schedule a call to discuss your project in detail</li>
                </ul>
              </div>

              <div class="message">
                If you have any immediate questions or would like to discuss your project sooner, feel free to reach out:
              </div>

              <div style="text-align: center;">
                <p style="margin: 5px 0;">
                  📞 <a href="tel:+91-8901440322" style="color: #000; text-decoration: none;">+91-8901440322</a> /
                  <a href="tel:+91-9996639777" style="color: #000; text-decoration: none;">+91-9996639777</a>
                </p>
                <p style="margin: 5px 0;">
                  📧 <a href="mailto:grow@thetous.com" style="color: #000; text-decoration: none;">grow@thetous.com</a>
                </p>
                <a href="https://wa.me/918901440322" class="cta-button" style="background: #25D366; color: white;">💬 Chat on WhatsApp</a>
              </div>
            </div>

            <div class="footer">
              <strong style="font-size: 20px;">The Tous</strong>
              <p style="margin: 10px 0; opacity: 0.9;">Digital Solutions That Drive Growth</p>

              <div class="footer-links">
                <a href="https://thetous.com">Website</a> |
                <a href="https://thetous.com/work">Our Work</a> |
                <a href="https://thetous.com/about">About Us</a>
              </div>

              <div class="social-icons">
                <a href="https://www.instagram.com/thetous" target="_blank">📷</a>
                <a href="https://www.linkedin.com/company/thetous" target="_blank">💼</a>
              </div>

              <p style="margin-top: 20px; font-size: 12px; opacity: 0.7;">
                C-116, 1st Floor, Sector-2, Noida, UP 201301
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send email to admin
    await transporter.sendMail(adminMailOptions);

    // Send confirmation email to user
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      {
        message: "Quote request submitted successfully",
        leadScore,
        priority: leadPriority,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing quote request:", error);
    return NextResponse.json(
      { error: "Failed to submit quote request", details: error.message },
      { status: 500 }
    );
  }
}

"use client";
import "./style.css";
import usePageTitle from "@/hooks/usePageTitle";
import Link from "next/link";

const PrivacyPolicy = () => {
  usePageTitle("Privacy Policy");

  return (
    <div className="about-page-main privacy-page-main">
      <div className="container aboutRow">
        <div className="row align-items-start">
          <div className="col-md-12 col-lg-12 col-sm-12 d-flex justify-content-centent align-items-start flex-column brand-strategy-div content-div">
            <h1 className="w-100">Privacy Policy</h1>
            <p className="text-muted">Last updated: 9 February 2026</p>

            <p>
              At <strong>The Tous</strong> (“we”, “our”, “us”), your privacy
              matters. This Privacy Policy explains how we collect, use, store,
              and protect your information when you visit or interact with
              <strong> thetous.com</strong>.
            </p>

            <h3>Information We Collect</h3>
            <p>
              We may collect personal and non-personal information including:
            </p>
            <ul>
              <li>Name, email address, and phone number</li>
              <li>Details shared via contact or inquiry forms</li>
              <li>IP address, browser type, device information</li>
              <li>Pages visited and interaction data</li>
            </ul>

            <h3>How We Use Your Information</h3>
            <ul>
              <li>To respond to inquiries and business requests</li>
              <li>To deliver and improve our services</li>
              <li>To analyze performance and user behavior</li>
              <li>To communicate updates or important notices</li>
              <li>To maintain security and prevent misuse</li>
            </ul>

            <h3>Cookies & Tracking</h3>
            <p>
              We use cookies and similar technologies to improve user experience,
              analyze traffic, and understand engagement. You may disable
              cookies via your browser settings; however, some features may not
              function properly.
            </p>

            <h3>Sharing of Information</h3>
            <p>
              We do <strong>not sell or rent</strong> your personal data. Your
              information may be shared only with trusted partners, legal
              authorities (if required), or to protect our rights and users.
            </p>

            <h3>Data Security</h3>
            <p>
              We implement appropriate technical and organizational measures to
              safeguard your information. While we strive for maximum security,
              no online system is completely secure.
            </p>

            <h3>Third-Party Links</h3>
            <p>
              Our website may contain links to third-party platforms. We are not
              responsible for their privacy practices or content.
            </p>

            <h3>Your Rights</h3>
            <p>
              You may request access, correction, or deletion of your personal
              data by contacting us directly.
            </p>

            <h3>Children’s Privacy</h3>
            <p>
              The Tous does not knowingly collect personal information from
              children under the age of 13. If such data is identified, it will
              be removed promptly.
            </p>

            <h3>Policy Updates</h3>
            <p>
              We may update this Privacy Policy periodically. Any changes will
              be reflected on this page with an updated date.
            </p>

            <h3>Contact Us</h3>
            <p>
              If you have any questions regarding this Privacy Policy, please
              contact us at:
            </p>

            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:grow@thetous.com">
                grow@thetous.com
              </a>
              <br />
              <strong>Phone:</strong>{""}
              <a href="tel:+91-8901440322">
                +91-8901440322
              </a>
              <br />
              <strong>Website:</strong>{" "}
              <a href="https://thetous.com">https://thetous.com</a>
            </p>
          </div>

          
        </div>
      </div>

      
    </div>
  );
};

export default PrivacyPolicy;

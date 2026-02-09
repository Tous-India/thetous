"use client";
import "./style.css";
import usePageTitle from "@/hooks/usePageTitle";

const TermsConditions = () => {
  usePageTitle("Terms & Conditions");

  return (
    <div className="about-page-main terms-page-main">
      <div className="container aboutRow">
        <div className="row align-items-start">
          <div className="col-md-12 col-lg-12 col-sm-12 d-flex justify-content-centent align-items-start flex-column brand-strategy-div content-div">
            <h1 className="w-100">Terms & Conditions</h1>
            <p className="text-muted">Last updated: 9 February 2026</p>

            <p>
              Welcome to <strong>The Tous</strong>. By accessing or using
              <strong> thetous.com</strong>, you agree to comply with and be
              bound by the following Terms & Conditions. Please read them
              carefully before using our website or services.
            </p>

            <h3>Use of Website</h3>
            <p>
              By using this website, you confirm that you are at least 18 years
              old and capable of entering into legally binding agreements. You
              agree to use the website only for lawful purposes and in a way
              that does not infringe the rights of others.
            </p>

            <h3>Services</h3>
            <p>
              The Tous provides digital marketing, performance marketing,
              creative strategy, and related services. All service details,
              timelines, and deliverables are defined through written proposals
              or agreements shared with clients.
            </p>

            <h3>Intellectual Property</h3>
            <p>
              All content on this website, including text, graphics, logos,
              designs, and visuals, is the property of The Tous unless otherwise
              stated. Unauthorized use, reproduction, or distribution is
              strictly prohibited.
            </p>

            <h3>Client Responsibilities</h3>
            <p>
              Clients agree to provide accurate information, required assets,
              and timely approvals necessary for project execution. Delays
              caused due to missing inputs may impact timelines.
            </p>

            <h3>Payments & Billing</h3>
            <p>
              All payments, fees, and billing terms are outlined in official
              proposals or agreements. Failure to make timely payments may
              result in service suspension or termination.
            </p>

            <h3>Limitation of Liability</h3>
            <p>
              The Tous shall not be held liable for any indirect, incidental,
              or consequential damages arising from the use of our website or
              services. We do not guarantee specific results unless explicitly
              stated in writing.
            </p>

            <h3>Third-Party Tools & Links</h3>
            <p>
              Our website or services may include links to third-party platforms
              or tools. We are not responsible for their content, functionality,
              or privacy practices.
            </p>

            <h3>Termination</h3>
            <p>
              We reserve the right to terminate or restrict access to our
              website or services if these Terms & Conditions are violated or
              misused.
            </p>

            <h3>Changes to Terms</h3>
            <p>
              The Tous may update these Terms & Conditions from time to time.
              Any changes will be effective immediately upon posting on this
              page.
            </p>

            <h3>Governing Law</h3>
            <p>
              These Terms & Conditions are governed by and construed in
              accordance with the laws of India. Any disputes shall be subject
              to the jurisdiction of Indian courts.
            </p>

            <h3>Contact Us</h3>
            <p>
              If you have any questions regarding these Terms & Conditions,
              please contact us at:
            </p>

            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:grow@thetous.com">
                grow@thetous.com
              </a>
              <br />
              <strong>Phone:</strong>{" "}
              <a href="tel:+91-8901440322">
                +91-8901440322
              </a>
              <br />
              <strong>Website:</strong>{" "}
              <a href="https://thetous.com">
                https://thetous.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;

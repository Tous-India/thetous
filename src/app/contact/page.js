import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./style.css";

const Contact = () => {
  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="contact-page-main">
      <div className="container-fluid last-section-of-every-page">
        <div className="row row-two-contact my-5 justify-content-center">
          <div className="col-sm-12 col-md-5 col-lg-5 contact-cols-4 left">
            <div id="output"></div>
            <form className="d-flex flex-column p-4 rounded-2">
              <h3 className="text-start p-2">Get In Touch</h3>

              <div className="row first-form-row">
                <div className="col-lg-6 col-sm-12">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name goes here"
                    className=""
                  />
                  <div className="text-danger" id="name_error"></div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <input
                    type="email"
                    name="email"
                    placeholder="Drop your email here"
                    className=""
                  />
                  <div className="text-danger" id="email_error"></div>
                </div>
              </div>

              <label htmlFor="label" className="my-3">
                What brings you here?
              </label>
              <div className="select-contact align-items-center checkbox-div-contactPage">
                {[
                  "Web Development",
                  "Social Media Management",
                  "Social Media Ads",
                  "Google Ads",
                  "SEO",
                  "Shoot & Influencers",
                  "Others",
                ].map((value, index) => (
                  <div key={index} className={`divOne-${index + 1}`}>
                    <div className="checkboxes__item">
                      <label className="checkbox style-f">
                        <input
                          type="checkbox"
                          value={value}
                          id={`checkbox-${index}`}
                        />
                        <div className="checkbox__checkmark"></div>
                        <div className="checkbox__body">{value}</div>
                      </label>
                    </div>
                  </div>
                ))}
              </div>

              <input
                type="number"
                name="phone"
                placeholder="Share your digits"
                className="mt-0 type-number"
              />
              <div className="text-danger" id="phone_error"></div>

              <textarea
                name="message"
                rows="5"
                cols="30"
                placeholder="Type away, we’re listening!"
                className="p-2 mt-4"
              ></textarea>
              <div className="text-danger" id="message_error"></div>

              <div className="buttonDiv">
                <button
                  type="submit"
                  className="btn btn-outline-dark rounded-5 my-4 text-uppercase"
                >
                  Submit <i className="ri-arrow-right-up-long-line"></i>
                </button>
              </div>
              <button
                className="btn btn-success d-none"
                id="successMessage"
              ></button>
            </form>
          </div>

          <div className="col-sm-12 col-md-5 col-lg-5 contact-cols-3 d-flex flex-column justify-content-center right">
            <div>
              <h3>Connect with us</h3>
              <p>
                Phone:
                <Link href="tel:+91-9996639777"> +91-9996639777</Link>
                <Link href="tel:+91-8930431532"> +91-8930431532</Link>
                <br />
                Email:{" "}
                <Link href="mailto:grow@thetous.com">grow@thetous.com</Link>
              </p>
              <p className="d-flex gap-5 fs-2">
                <Link
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-instagram-line"></i>
                </Link>
                <Link
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-linkedin-fill"></i>
                </Link>
              </p>
            </div>
            <div>
              <h3>Address</h3>
              <p className="w-75">
                C-116, 1st Floor, Sector-2, Noida, UP 201301
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14007.332766375888!2d77.2194014!3d28.6347611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdbd20f0f0eb%3A0xb84891262d7483e!2sOffice%20On!5e0!3m2!1sen!2sin!4v1719305295633!5m2!1sen!2sin"
              width="100%"
              height="210"
              // style="border: 0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

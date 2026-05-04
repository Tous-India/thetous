"use client";
import Image from "next/image";
import Link from "next/link";
import "./style.css";
import thanks from "../../../public/thanks.webp";

const Page = () => {
  return (
    <div className="thank-you-page-main">
      <div className="container aboutRow">
        <div className="row align-items-start">
          <div className="col-12">
            <Image
              src={thanks}
              alt="Thank you"
              width={400}
              height={400}
              priority
            />
            <h4>Thanks</h4>
            <p>
              Thanks for submitting your query! We’ll connect with you shortly.
            </p>
            <Link href="/" className="thank-you-back-btn">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

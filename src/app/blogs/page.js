import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./style.css";

import blog1 from "../../../public/blog/1724839571.webp";
import blog2 from "../../../public/blog/1724839858.webp";

const Blogs = () => {
  return (
    <div className="blog-main-page">
      <div className="container bs-container mb-2 mt-5">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-12  brand-strategy-div">
            <h1 className="w-100 blog_subtitle_style">Blogs</h1>
            <h5 className="blog_title_style">
              <Link href="">Home</Link> / Blogs
            </h5>
          </div>
        </div>
      </div>
      <section className="">
        <div className="container bs-container3 mt-5 pt-2 last-section-of-every-page">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="row bs-2-row-1 my-3">
              <div className="col-lg-4 col-md-4 col-sm-12 my-5">
                <Link href="/" className="bs-img-div">
                  <Image
                    src={blog1}
                    alt="Image"
                    className="rounded-4"
                    width={400}
                    height={400}
                    priority
                  />
                </Link>

                <Link href="/">
                  <h3 className="pt-2 blog_titl_style">Transforming Brands </h3>
                </Link>
                <h5>At The Tous, we design strategies that c...</h5>
                <div className="buttonBlog ">
                  <Link href="/" className="first">
                    Read Blog
                  </Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12 my-5">
                <Link href="/" className="bs-img-div">
                  <Image
                    src={blog2}
                    alt="Image"
                    className="rounded-4"
                    width={400}
                    height={400}
                    priority
                  />
                </Link>

                <Link href="/">
                  <h3 className="pt-2 blog_titl_style">
                    Driving Growth Digit{" "}
                  </h3>
                </Link>
                <h5>At The Tous , we specialize in building ...</h5>
                <div className="buttonBlog ">
                  <Link href="/" className="first">
                    Read Blog
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4 contact-cols-4">
            <div className="blog_section p-4 border-1 border">
              <div className="p-2">
                <h3 className="">Blogs Category</h3>
                <br />

                <Link href="/" className="blog_title_border">
                  <h6>SEO</h6>
                </Link>
                <hr />
                <Link href="/" className="blog_title_border">
                  <h6>Website</h6>
                </Link>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default Blogs;

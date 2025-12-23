import React from "react";
import Link from "next/link";
import Image from "next/image";
import imag from "../../../public/home/work/1724758157.webp";
import blog1 from "../../../public/home/blog1.webp";
import blog2 from "../../../public/home/blog2.webp";

const Blogs = () => {
  return (
    <div
      className="blog-section-home last-section-of-every-page"
      data-aos="fade-up"  
      data-aos-duration="2500"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="heading-div">
              <div id="word-heading" className="work-heading-home row-div">
                <h2>Blogs</h2>
                <Link href="https://tous.mankindpackers.site/works">
                  <button>
                    <span className="btn-span-1">View All</span>
                    <span className="btn-span-2">
                      <i className="ri-arrow-right-up-long-line"></i>
                    </span>
                  </button>
                </Link>
              </div>
            </div>

            <div className="container-fluid">
              <div className="col-12 mainBlogDiv">
                <div className="row">
                  <div className="col-lg-9 col-md-9 col-sm-12 ">
                    <div className="innerContainerBlog">
                      <h3>Transforming Brands Online</h3>
                      <h4>
                        At The Tous, we design strategies that connect your
                        brand with the right audience. From social media to
                        search ads, our solutions are built to drive engagement
                        and business growth.
                      </h4>
                      <Link
                        href="https://tous.mankindpackers.site/blog-details/transforming-brands-online"
                        className=""
                      >
                        Read Blog
                      </Link>
                    </div>
                  </div>
                  <div className="col-3 col-md-3">
                    <div className="imgDiv">
                      <Image
                        src={blog1 || ""}
                        alt=""
                        width={300}
                        height={300}
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="col-12 mainBlogDiv">
                <div className="row">
                  <div className="col-lg-9 col-md-9 col-sm-12 ">
                    <div className="innerContainerBlog">
                      <h3>Driving Growth Digitally</h3>
                      <h4>
                        At The Tous , we specialize in building strategies that
                        elevate your online presence. From engaging social media
                        campaigns to performance-driven ads, we focus on
                        delivering measurable results. Partner with us to take
                        your brand to new digital heights.
                      </h4>
                      <Link
                        href="https://tous.mankindpackers.site/blog-details/driving-growth-digitally"
                        className=""
                      >
                        Read Blog
                      </Link>
                    </div>
                  </div>
                  <div className="col-3 col-md-3">
                    <div className="imgDiv">
                      <Image src={blog2} alt="" width={300} height={300} priority/>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

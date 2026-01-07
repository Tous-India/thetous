import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

// image

import kb from "../../../public/client/kbvista.webp";
import hk from "../../../public/client/hk.webp";
import fnp from "../../../public/client/fnp-logo.webp";
import omp from "../../../public/client/omp.webp";
import corru from "../../../public/client/5m.webp";
import vardhaman from "../../../public/client/vardhaman.webp";
import bulls from "../../../public/client/bulls.webp";
import user from "../../../public/client/user.png";

// Testimonials data
const testimonialsData = [
  {
    id: 1,
    rating: 5.0,
    className: "slide one",
    testimonial: "The Tous completely transformed our digital presence. From website development to SEO and social media management, everything was executed professionally. We started receiving quality leads within weeks.",
    clientName: "Rohit Mehra",
    clientPosition: "Founder",
    clientImage: user,
    brandLogo: hk,
  },
  {
    id: 2,
    rating: 4.0,
    className: "slide two",
    testimonial: "Working with The Tous feels like having an in-house digital team. Their designs, branding, and content strategy are always on point. Communication and delivery timelines are excellent.",
    clientName: "Ananya Sharma",
    clientPosition: "Marketing Head",
    clientImage: user,
    brandLogo: kb,
  },
  {
    id: 3,
    rating: 5.0,
    className: "slide three",
    testimonial: "The Tous delivered a modern, high-performing website along with consistent social media creatives. Their understanding of branding and user experience is impressive.",
    clientName: "Vikas Jain",
    clientPosition: "Business Owner",
    clientImage: user,
    brandLogo: fnp,
  },
  {
    id: 4,
    rating: 5.0,
    className: "slide four",
    testimonial: "Our social media engagement and organic website traffic increased significantly after partnering with The Tous. Their SEO and SMM strategies are practical and result-driven.",
    clientName: "Neha Kapoor",
    clientPosition: "Growth Manager",
    clientImage: user,
    brandLogo: omp,
  },
  {
    id: 5,
    rating: 5.0,
    className: "slide five",
    testimonial: "Professional, reliable, and creative. The Tous is a one-stop solution for web development, SEO, social media, graphics, and video marketing.",
    clientName: "Saurabh Gupta",
    clientPosition: "Brand Manager",
    clientImage: user,
    brandLogo: corru,
  },
  {
    id: 6,
    rating: 5.0,
    className: "slide six",
    testimonial: "We consider The Tous a long-term growth partner. Their team understands both performance marketing and brand building, which is rare.",
    clientName: "Kunal Arora",
    clientPosition: "Brand Strategist",
    clientImage: user,
    brandLogo: vardhaman,
  },
  {
    id: 7,
    rating: 5.0,
    className: "slide seven",
    testimonial: "From strategy to execution, The Tous delivers. Their structured approach to digital marketing and clear reporting made collaboration smooth and effective.",
    clientName: "Aman Gupta",
    clientPosition: "Operations Head",
    clientImage: user,
    brandLogo: bulls,
  },
];

const Testimonials = () => {
  return (
    <div className="home-page-Testimonials">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="main-section-heading">Testimonials</h2>
            <Swiper
              className="mySwiper"
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              speed={2000}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
              modules={[Pagination, Navigation, Autoplay]}
            >
              {testimonialsData.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className={testimonial.className}>
                  <div className="innerDiv">
                    <span>
                      {[...Array(Math.floor(testimonial.rating))].map((_, index) => (
                        <i key={index} className="ri-star-s-fill"></i>
                      ))}
                    </span>
                    <p>&ldquo;{testimonial.testimonial}&rdquo;</p>

                    <div className="client-info-div">
                      <div className="client-d">
                        <Image
                          src={testimonial.clientImage}
                          alt={testimonial.clientName}
                          width={50}
                          height={50}
                        />
                        <p>
                          <strong>{testimonial.clientName}</strong>
                          <br />
                          <span>{testimonial.clientPosition}</span>
                        </p>
                      </div>
                      <div className="brand">
                        <Image
                          src={testimonial.brandLogo}
                          alt="client brand logo"
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

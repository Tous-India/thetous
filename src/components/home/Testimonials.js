import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

// image

import kb from "../../../public/client/kbvista.webp";
import fnp from "../../../public/client/fnp-logo.webp";
import omp from "../../../public/client/omp.webp";

// TODO: Replace these 3 with real verified testimonials (real name, designation, company, specific outcome)
const testimonialsData = [
  {
    id: 1,
    rating: 5,
    className: "slide one",
    testimonial: "The Tous delivered a modern, high-performing website along with consistent social media creatives. Their understanding of branding and user experience is impressive.",
    clientName: "Vikas Jain",
    clientPosition: "Business Owner",
    clientCompany: "FNP",
    brandLogo: fnp,
  },
  {
    id: 2,
    rating: 5,
    className: "slide two",
    testimonial: "Our social media engagement and organic website traffic increased significantly after partnering with The Tous. Their SEO and strategies are practical and result-driven.",
    clientName: "Neha Kapoor",
    clientPosition: "Growth Manager",
    clientCompany: "Oh My Pet",
    brandLogo: omp,
  },
  {
    id: 3,
    rating: 5,
    className: "slide three",
    testimonial: "Working with The Tous feels like having an in-house digital team. Their designs, branding, and content strategy are always on point. Communication and delivery timelines are excellent.",
    clientName: "Ananya Sharma",
    clientPosition: "Marketing Head",
    clientCompany: "KB Vista",
    brandLogo: kb,
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
                        {/* <Image
                          src={testimonial.clientImage}
                          alt={testimonial.clientName}
                          width={50}
                          height={50}
                        /> */}
                        <p>
                          <strong>{testimonial.clientName}</strong>
                          <br />
                          <span>{testimonial.clientPosition}, {testimonial.clientCompany}</span>
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

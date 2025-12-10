import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

// image

import kb from "../../../public/client/kb.webp";
import user from "../../../public/client/user.png";

const Testimonials = () => {
  return (
    <div className="home-page-Testimonials">
      <h2>Testimonials</h2>
      <Swiper
        className="mySwiper"
        loop={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
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
        <SwiperSlide className="slide one">
          <div className="innerDiv">
            <span>
              <strong>5.0</strong>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
            </span>
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              perspiciatis, harum expedita nobis dicta repellendus architecto
              assumenda natus ut placeat."
            </p>

            <div className="client-info-div">
              <div className="client-d">
                <Image src={user} alt="Brand" width={50} height={50} />
                <p>
                  <strong>Client Name</strong>
                  <br />
                  <span>Client Desgination</span>
                </p>
              </div>
              <div className="brand">
                <Image
                  src={kb}
                  alt="client brand logo"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide two">
          <div className="innerDiv">
            <span>
              <strong>5.0</strong>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
            </span>
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              perspiciatis, harum expedita nobis dicta repellendus architecto
              assumenda natus ut placeat."
            </p>

            <div className="client-info-div">
              <div className="client-d">
                <Image src={user} alt="Brand" width={50} height={50} />
                <p>
                  <strong>Client Name</strong>
                  <br />
                  <span>Client Desgination</span>
                </p>
              </div>
              <div className="brand">
                <Image
                  src={kb}
                  alt="client brand logo"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide three">
          <div className="innerDiv">
            <span>
              <strong>5.0</strong>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
            </span>
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              perspiciatis, harum expedita nobis dicta repellendus architecto
              assumenda natus ut placeat."
            </p>

            <div className="client-info-div">
              <div className="client-d">
                <Image src={user} alt="Brand" width={50} height={50} />
                <p>
                  <strong>Client Name</strong>
                  <br />
                  <span>Client Desgination</span>
                </p>
              </div>
              <div className="brand">
                <Image
                  src={kb}
                  alt="client brand logo"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide four">
          <div className="innerDiv">
            <span>
              <strong>5.0</strong>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
            </span>
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              perspiciatis, harum expedita nobis dicta repellendus architecto
              assumenda natus ut placeat."
            </p>

            <div className="client-info-div">
              <div className="client-d">
                <Image src={user} alt="Brand" width={50} height={50} />
                <p>
                  <strong>Client Name</strong>
                  <br />
                  <span>Client Desgination</span>
                </p>
              </div>
              <div className="brand">
                <Image
                  src={kb}
                  alt="client brand logo"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide five">
          <div className="innerDiv">
            <span>
              <strong>5.0</strong>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
            </span>
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              perspiciatis, harum expedita nobis dicta repellendus architecto
              assumenda natus ut placeat."
            </p>

            <div className="client-info-div">
              <div className="client-d">
                <Image src={user} alt="Brand" width={50} height={50} />
                <p>
                  <strong>Client Name</strong>
                  <br />
                  <span>Client Desgination</span>
                </p>
              </div>
              <div className="brand">
                <Image
                  src={kb}
                  alt="client brand logo"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide six">
          <div className="innerDiv">
            <span>
              <strong>5.0</strong>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
            </span>
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              perspiciatis, harum expedita nobis dicta repellendus architecto
              assumenda natus ut placeat."
            </p>

            <div className="client-info-div">
              <div className="client-d">
                <Image src={user} alt="Brand" width={50} height={50} />
                <p>
                  <strong>Client Name</strong>
                  <br />
                  <span>Client Desgination</span>
                </p>
              </div>
              <div className="brand">
                <Image
                  src={kb}
                  alt="client brand logo"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide seven">
          <div className="innerDiv">
            <span>
              <strong>5.0</strong>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
            </span>
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              perspiciatis, harum expedita nobis dicta repellendus architecto
              assumenda natus ut placeat."
            </p>

            <div className="client-info-div">
              <div className="client-d">
                <Image src={user} alt="Brand" width={50} height={50} />
                <p>
                  <strong>Client Name</strong>
                  <br />
                  <span>Client Desgination</span>
                </p>
              </div>
              <div className="brand">
                <Image
                  src={kb}
                  alt="client brand logo"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

         
      </Swiper>
    </div>
  );
};

export default Testimonials;

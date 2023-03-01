import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper";

export default function test({ data }) {
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          
        }}
        slidesPerView={5}
        spaceBetween={30}
        freeMode={false}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        {data.map((el) => {
          return (
            <SwiperSlide>
              <div className="w-[80px] h-[80px]">
                <img className="" src={el} alt="" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

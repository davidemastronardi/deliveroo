import React, { useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Styles.css";
import { Pagination } from "swiper";


export default function App() {
    const arrayFilterImg = useMemo(()=>[
        "//co-restaurants.roocdn.com/images/c24f41b7410dc20600363325aab4d39a27902957/shortcut/barbeque-1.png?width=200&height=114&fit=crop&bg-color=00ccbc&auto=webp&format=png",
        "//co-restaurants.roocdn.com/images/c24f41b7410dc20600363325aab4d39a27902957/shortcut/barbeque-1.png?width=200&height=114&fit=crop&bg-color=00ccbc&auto=webp&format=png",
        "//co-restaurants.roocdn.com/images/c24f41b7410dc20600363325aab4d39a27902957/shortcut/barbeque-1.png?width=200&height=114&fit=crop&bg-color=00ccbc&auto=webp&format=png",
        "//co-restaurants.roocdn.com/images/c24f41b7410dc20600363325aab4d39a27902957/shortcut/barbeque-1.png?width=200&height=114&fit=crop&bg-color=00ccbc&auto=webp&format=png",
        "//co-restaurants.roocdn.com/images/c24f41b7410dc20600363325aab4d39a27902957/shortcut/barbeque-1.png?width=200&height=114&fit=crop&bg-color=00ccbc&auto=webp&format=png",
        "//co-restaurants.roocdn.com/images/c24f41b7410dc20600363325aab4d39a27902957/shortcut/barbeque-1.png?width=200&height=114&fit=crop&bg-color=00ccbc&auto=webp&format=png",
        "//co-restaurants.roocdn.com/images/c24f41b7410dc20600363325aab4d39a27902957/shortcut/barbeque-1.png?width=200&height=114&fit=crop&bg-color=00ccbc&auto=webp&format=png",
        "//co-restaurants.roocdn.com/images/c24f41b7410dc20600363325aab4d39a27902957/shortcut/barbeque-1.png?width=200&height=114&fit=crop&bg-color=00ccbc&auto=webp&format=png",
        "//co-restaurants.roocdn.com/images/c24f41b7410dc20600363325aab4d39a27902957/shortcut/barbeque-1.png?width=200&height=114&fit=crop&bg-color=00ccbc&auto=webp&format=png",
        "//co-restaurants.roocdn.com/images/c24f41b7410dc20600363325aab4d39a27902957/shortcut/barbeque-1.png?width=200&height=114&fit=crop&bg-color=00ccbc&auto=webp&format=png",
      ],
      []
    );
  const renderFilterImg = () => {
    return arrayFilterImg.map((dati) => {
      return <SwiperSlide>
        <img src={dati} alt="" />
      </SwiperSlide>;
    });
  };


  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper"
      >
        {renderFilterImg()}
      </Swiper>
    </>
  );
}

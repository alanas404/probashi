"use client"

import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import Banner1 from './Banner1';
import Banner2 from './Banner2';
import Banner3 from './Banner3';

const BannerMobile = () => {
    return (
        <div>
              <Swiper
               
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Banner1/></SwiperSlide>
        <SwiperSlide><Banner2/></SwiperSlide>
        <SwiperSlide><Banner3/></SwiperSlide>
 
      </Swiper>
        </div>
    );
};

export default BannerMobile;
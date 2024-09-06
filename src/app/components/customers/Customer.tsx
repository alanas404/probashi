"use client"
import React, { useRef, useState } from 'react';
import CustomerCard from './CustomerCard';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import { Swiper as SwiperType } from "swiper";

import 'swiper/css';
import 'swiper/css/pagination';  // Import Swiper pagination styles
import 'swiper/css/navigation';  // Import Swiper navigation styles
import { log } from 'console';



const Customer = () => {
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleSlideChange = (swiper: SwiperType) => {
        console.log(activeIndex);
        
        setActiveIndex(swiper.realIndex);
    };

    const goToSlide = (index: any) => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(index);
        }
    };

    const slides = [1,2,3];

    return (
        <div className='pl-4 md:pl-[135px] py-[72px] customer'>
            <div className='flex justify-between items-center'>
                <div className='mb-8'>
                    <h3 className='text-[#0F172A] font-semibold barlow text-[32px] leading-[38.4px]'>
                        CutoReal Happy Customers, Real Stories
                    </h3>
                </div>
                <div className="custom-pagination flex gap-2">
                   {
                    slides.map((_,index)=> <button   onClick={() => goToSlide(index)} className={`${activeIndex === index ? 'bg-[#187E7D] w-10' : ''} w-2 h-2 rounded-full bg-[#7AC19F]`}></button>)
                   }
                   
                </div>
            </div>
            <Swiper
                // onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={handleSlideChange}
                slidesPerView={2}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2000,  // Delay between automatic slide transitions (in milliseconds)
                    disableOnInteraction: false,  // Keep autoplay even after interaction
                  }}
                className='!pb-[34px]'
             modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
            >
                <SwiperSlide >
                    <CustomerCard />
                </SwiperSlide>
                <SwiperSlide >
                    <CustomerCard />
                </SwiperSlide>
                <SwiperSlide >
                    <CustomerCard />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Customer;

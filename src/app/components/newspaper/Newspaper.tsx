"use client"
import Image from 'next/image';
import React from 'react';
import NewspaperCard from './NewspaperCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Newspaper = () => {
    return (
        <div className='px-4 md:px-[135px] py-[72px] '>
            <div className='flex  justify-between mb-[15px] md:mb-10'>
                <h2 className='barlow font-semibold text-2xl md:text-[32px] text-[#0F172A] leading-[28.8px] md:leading-[38.4px]'>Newspaper Making Headlines</h2>
                <a className='hidden md:flex gap-2 items-center' href="">
                    <p className='barlow text-black text-xl font-medium leading-[24px]'>View all</p>
                    <Image src="/newspaper/green_arrow.svg" width={24} height={24} alt='' />
                </a>
            </div>
            <Swiper
                slidesPerView={1}
                modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                      },
                  }}
                loop={true}
                className='newspaper-slider'
            >
                <SwiperSlide>
                    <NewspaperCard />
                </SwiperSlide>
                <SwiperSlide>
                    <NewspaperCard />
                </SwiperSlide>
                <SwiperSlide>
                    <NewspaperCard />
                </SwiperSlide>
                <SwiperSlide>
                    <NewspaperCard />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Newspaper;
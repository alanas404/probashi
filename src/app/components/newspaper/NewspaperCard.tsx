import Image from 'next/image';
import React from 'react';

const NewspaperCard = () => {
    return (
        <div className='p-3 md:px-6 md:pt-4 md:pb-[25px] border border-[#187E7D] rounded-xl shadow-md'>
            <div className='pb-[7px] md:pb-3 border-b boder-b-[#CBD5E1] mb-2 md:mb-[13px]'>
                <Image className='w-[114px] md:w-[200px]' src="/newspaper/daily_star.svg" width={200} height={40} alt='' />
            </div>
            <div className='mb-3 md:mb-6'>
                <h2 className='barlow text-[#1E293B] font-semibold text-base md:text-2xl leading-[18.36px] md:leading-[32px] mb-1.5 md:mb-2'>The company began offering motorbike </h2>
                <p className='roboto text-[#475569] text-base font-medium leading-[23px]'>The company began offering motorbike taxis on-demand and a logistics service, and it branched out into food delivery this year.</p>
            </div>
            <a href='' className='flex gap-1 md:gap-2'>
                <p className="barlow text-[#187E7D] font-semibold text-xs md:text-[20px] leading-[12.62px] md:leading-[22px]">Learn More</p>
                <Image className='w-3.5 h-3.5 md:w-6 md:h-6' src="/newspaper/green_arrow.svg" width={24} height={24} alt='' />
            </a>
        </div>
    );
};

export default NewspaperCard;
import React from 'react';
import "./Banner.css"
import Image from 'next/image';

const Banner2 = () => {
    return (
        <div className="pt-[50px] min-h-[737px]  banner1 flex flex-col justify-between">
            <div className='px-4'>
                <div>
                    <h2 className='barlow font-semibold text-[26px] leading-[31.2px] text-white mb-1.5'>Recruitment Re-imagined </h2>
                    <p className='roboto font-normal text-sm text-white'>Effortless Emigration Clearance, Pre-Departure Orientation, and BMET Registration at your fingertips.</p>
                </div>
                <div className='flex justify-between mt-12'>
                    <a href="#">
                        <Image src="/banner/app_store.svg" width={161} height={54} alt='' />
                    </a>
                    <a href="#">
                        <Image src="/banner/google_play.svg" width={161} height={54} alt='' />
                    </a>
                </div>
                <div className='mt-[22px]'>
                    <button className='flex items-center gap-2 bg-[#187E7D] w-full px-2.5 pt-1.5 pb-2 rounded-lg h-[54px] border border-white'>
                        <Image src="/banner/login.svg" width={32} height={32} alt='' />
                        <p className='barlow font-semibold text-base leading-[19.2px] text-white'>Login / Sign Up to Recruitment Portal </p>
                    </button>
                </div>

                <div className='mt-10'>
                     <Image className='w-full' src="/banner/banner_2_stat.svg" width={343} height={139} alt='' />
                </div>
            </div>
            <div className='mt-6'>
                <Image src="/banner/banner_2.svg" width={435} height={239} alt='' />
            </div>
        </div>
    );
};

export default Banner2;



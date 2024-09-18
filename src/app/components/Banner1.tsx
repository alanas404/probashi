import React from 'react';
import "./Banner.css"
import Image from 'next/image';

const Banner1 = () => {
    return (
        <div className="pt-6  banner1 flex flex-col justify-between">
            <div className='px-4'>
                <div>
                    <h2 className='barlow font-semibold text-[26px] leading-[31.2px] text-white mb-1.5'>Empowering Migrant workers</h2>
                    <p className='roboto font-normal text-sm text-white'>Bridging the gap between aspiring migrant workers, local and foreign recruiters , and government stakeholders</p>
                </div>
                <div className='flex justify-between mt-[22px]'>
                    <a href="#">
                        <Image src="/banner/app_store.svg" width={161} height={54} alt='' />
                    </a>
                    <a href="#">
                        <Image src="/banner/google_play.svg" width={161} height={54} alt='' />
                    </a>
                </div>
                <div className='mt-6'>
                    <button className='flex items-center gap-2 bg-[#FFFFFF] px-2.5 pt-1.5 pb-2 rounded-lg'>
                        <Image src="/banner/barcode.svg" width={40} height={40} alt='' />
                        <p className='barlow font-semibold text-base leading-[19.2px] text-[#187E7D]'>Download QR-Code Clearance Card</p>
                    </button>
                    <button className='flex items-center gap-2 bg-[#FFFFFF] px-2.5 pt-1.5 pb-2 rounded-lg mt-3.5'>
                        <Image src="/banner/verify.svg" width={40} height={40} alt='' />
                        <p className='barlow font-semibold text-base leading-[19.2px] text-[#0F172A]'>Verify BMET Smart Card</p>
                    </button>
                </div>
            </div>
            <div className='mt-6'>
                <Image src="/banner/banner1.svg" width={364} height={339} alt='' />
            </div>
        </div>
    );
};

export default Banner1;



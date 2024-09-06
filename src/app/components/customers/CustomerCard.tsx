
// "use client"
import Image from 'next/image';
import React from 'react';

const CustomerCard = () => {
    const ratings = [1, 2, 3, 4, 5];
    return (
        <div className="rounded-xl flex shadow-lg">
            <div className="py-6 pl-6 min-w-[475px] bg-[url('/customers/customer_card_bg.svg')] bg-no-repeat bg-[right_top_12px] customer  relative">
                <div className='flex gap-3 items-center mb-2'>
                    <div className='w-[72px] h-[72px] rounded-full'>
                        <Image className='rounded-full' src="/customers/avatar.svg" width={72} height={72} alt='' />
                    </div>
                    <div>
                        <h2 className='text-[#187E7D] barlow text-[26px] font-semibold leading-[31.2px] mb-[3px]'>Hasibul Hasan </h2>
                        <p className='text-[#475569] text-base font-normal roboto leading-[18.75px]'>General Worker</p>
                    </div>
                </div>
                <div className='mb-3'>
                    <p className='roboto font-normal text-[17px] leading-6 text-[#334155]'>Probashi app to register for priority vaccination. I also found a job in Saudi Arabia. Now I am going there by completing all the procedures at a more affordable rate.</p>
                </div>
                <div className='flex gap-2'>
                    {/* {
                        ratings.map(rating => <Image src="/customers/rating.svg" width={20} height={18} alt='rating' />)
                    } */}
                    <Image src="/customers/rating.svg" width={20} height={18} alt='rating' />
                    <Image src="/customers/rating.svg" width={20} height={18} alt='rating' />
                    <Image src="/customers/rating.svg" width={20} height={18} alt='rating' />
                    <Image src="/customers/rating.svg" width={20} height={18} alt='rating' />
                    <Image src="/customers/rating.svg" width={20} height={18} alt='rating' />
                </div>
                <div className='w-[62px] h-[34p]  absolute  bottom-[-16%] right-[8%] '>
                 <Image  src='/customers/arrow.svg' width={62} height={34} alt=''/>
                </div>
            </div>
            <div className='min-w-[200px] relative'>
               <Image className='w-full h-auto' src="/customers/customer.svg" width={200} height={230} alt=''/>
               <a className='absolute inset-0 m-auto w-[30px] h-[30px]' href="">
               <Image className='w-full h-auto' src="/customers/youtube.svg" width={30} height={30} alt=''/>
               </a>
            </div>
        </div>
    );
};

export default CustomerCard;
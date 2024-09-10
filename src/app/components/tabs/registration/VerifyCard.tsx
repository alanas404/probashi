import Image from 'next/image';
import React from 'react';

const VerifyCard = () => {
    return (
        <div className='rounded-xl shadow-lg md:flex-1 flex flex-col  order-1 md:order-2'>
            <div className='md:pt-6 md:pl-6  md:pr-10  bg-[#CFE6DB] rounded-tl-xl rounded-tr-xl'>
                <div className=' flex items-center justify-between md:pb-[30px] border-b border-b-[#7AC19F]'>
                    <div className='flex flex-1 items-center gap-3.5'>
                        <div>
                            <Image className='rounded-[13.26px]' src="/verify/image.png" width={100} height={100} alt='' />
                        </div>
                        <div>
                            <p className='barlow font-bold md:text-base md:leading-[22.4px] mb-2'>Shahdin lablu bin aktar</p>
                            <p className='text-sm'><span className='roboto font-normal leading-[22.4px]'>Passport : </span><span className='barlow font-semibold leading-[21px]'>EA0389394</span></p>
                        </div>
                    </div>
                    <div className='flex-1 md:pl-[31px] border-l border-l-[#7AC19F]'>
                        <div className='flex items-center gap-1 mb-3'>
                            <Image width={18} height={18} src="/verify/verify.svg" alt='' />
                            <p className='barlow font-semibold text-base leading-6'>PDO (Pre Departure Orientation)</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <Image width={18} height={18} src="/verify/verify.svg" alt='' />
                            <p className='barlow font-semibold text-base leading-6'>BMET Registration</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:pt-6 md:pl-6 md:pr-[32px] md:pb-[48px] border flex-1'>
                <div>
                    <div>
                        <div>
                            <p>Clearance ID:</p>
                        </div>
                    </div>
                </div>
                <button className='barlow font-medium text-xl md:text-xl leading-8 text-white py-[13px] w-full bg-[#187E7D] rounded-lg' type='submit'>Verify </button>
            </div>
           
        </div>

    );
};

export default VerifyCard;
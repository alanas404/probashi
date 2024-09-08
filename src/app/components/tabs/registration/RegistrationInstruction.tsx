import Image from 'next/image';
import React from 'react';

const RegistrationInstruction = () => {
    const roles = [
        {
            role: "Registration into the Government mandated BMET database is the first step for aspiring migrants."
        },
        {
            role: "After the registration is successful, the user will receive a BMET registration card."
        },
        {
            role: "This card includes a BMET Identification Number (BIDN) and the user’s necessary information."
        },
        {
            role: "The user must provide the valid passport number used in the registration process."
        },
        {
            role: "Registration into the Government mandated BMET database is the first step for aspiring migrants."
        }
    ]
    return (
        <div className='px-4 py-5 md:pt-6 md:px-6 md:pb-[43px] rounded-xl shadow-lg md:w-[470px] order-2 md:order-1'>
            <h2 className='barlow font-semibold text-lg md:text-2xl leading-[21.6px] md:leading-[28.8px] text-[#0F172A] pb-2 md:pb-3 border-b border-b-[#E2E8F0] mb-1  md:mb-2'>Registration Instruction</h2>
            <div> 
                {
                    roles.map((item, index) => <div key={`role_${index}`} className='flex items-center gap-3 mt-3 md:mt-4'>
                        <Image src="/registration/correct.svg" width={32} height={32} alt="" />
                        <p className='roboto font-normal text-sm md:text-lg leading-5 md:leading-7'>{item.role}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default RegistrationInstruction; 
import Image from 'next/image';
import React from 'react';
import InputField from './InputField';

interface Props {
    title: string
}
const RegistrationCard = ({ title }: Props) => {
    return (
        <div className='px-4 py-5 md:pt-6 md:px-6 md:pb-12 rounded-xl shadow-lg md:flex-1 flex flex-col border order-1 md:order-2'>
            <h2 className='barlow font-semibold text-lg md:text-2xl leading-[28.8px] text-[#0F172A] pb-2 md:pb-3 border-b border-b-[#E2E8F0]'>{title}</h2>
           <InputField label='Passport number / Clearance ID' placeholder='Enter your passport number / Clearance ID' btnText='Manually Verify' />
        </div>
    );
};

export default RegistrationCard;
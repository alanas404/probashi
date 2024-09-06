import React from 'react';
import CustomerCard from './CustomerCard';

const Customer = () => {
    return (
        <div className='pl-4 md:pl-[135px] py-[72px]'>
            <div className='mb-8'>
                <h3 className='text-[#0F172A] font-semibold barlow text-[32px] leading-[38.4px]'>CutoReal Happy Customers, Real Storiesmer</h3>
            </div>
            <div className='flex gap-[30px]'>
            <CustomerCard/>
            <CustomerCard/>
            </div>
        </div>
    );
};

export default Customer;
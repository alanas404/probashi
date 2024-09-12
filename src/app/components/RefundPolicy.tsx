import React from 'react';

const RefundPolicy = () => {
    return (
        <div>
            <div className='mb-6'>
                <h2 className='barlow font-semibold text-[32px] leading-[38.4px] mb-4 text-[#0F172A]'>Refund Policy (General)</h2>
                <p className='roboto font-normal text-lg leading-[30px] text-[#1E293B] mb-8'>A refund is applicable if a unique BMET number, Pre-departure Orientation (PDO) session booking, certificate download has not been permitted against a user’s request upon payment has been made via an available payment source (MFS/Debit/Credit Card).</p>
                <p className='roboto font-normal text-lg leading-[30px] text-[#1E293B]'>In such circumstances, based on proper authentication, the refund amount will be sent to the user's original payment source (MFS/Debit/Credit Card) within ten to fourteen working days after submitting the refund request.</p>
            </div>
            <div >
                <h2 className='barlow font-semibold text-[32px] leading-[38.4px] mb-4 text-[#0F172A]'>Refund Policy (Career Consultancy Service)</h2>
                <p className='roboto font-normal text-lg leading-[30px] text-[#1E293B] mb-8'>A refund is applicable if a candidate does not secure any interviews with agencies within six months of engaging our career consultancy services, a full refund may be issued upon request.</p>
                <p className='roboto font-normal text-lg leading-[30px] text-[#1E293B]'>To qualify for a refund, the original payment must have been made through a valid payment method (MFS/Debit/Credit Card). Upon verification of eligibility, the refund will be processed and credited back to the original payment source within ten to fourteen business days</p>
            </div>
        </div>
    );
};

export default RefundPolicy;
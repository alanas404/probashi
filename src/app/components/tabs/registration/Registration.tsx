import React from 'react';
import RegistrationInstruction from './RegistrationInstruction';
import RegistrationCard from './RegistrationCard';
import VerifyCard from './VerifyCard';

const Registration = () => {
    return (
        <div className='flex flex-col md:flex-row gap-6 md:gap-[30px] mt-4 p-4 md:p-0' >
          <RegistrationInstruction/>  
          {/* <RegistrationCard title="BMET Smart Card"/>                           */}

          <VerifyCard/>
        </div>
    );
};

export default Registration;
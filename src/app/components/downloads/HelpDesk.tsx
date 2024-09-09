import Image from 'next/image';
import React from 'react';

const HelpDesk = () => {
    return (
        <div className='md:px-[135px]'>
            <div className='flex'>
                <div className='flex-1'>1</div>
                <div className='md:min-w-[623px]'>
                    <Image src="/download/map.svg" width={623} height={320} alt=''/>
                </div>
            </div>
        </div>
    );
};

export default HelpDesk;
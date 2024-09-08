import Image from 'next/image';
import React from 'react';

interface Props {
    label: string,
    placeholder: string,
    btnText: string,
    type?: string,
    show?: boolean
}

const InputField = ({ label, placeholder, btnText, type = "text", show = false }: Props) => {
    return (
        <>
            <div className='mt-6 md:mt-[33px]  flex-1'>
                {
                    show ? <div className='flex flex-col md:flex-row md:items-center gap-3 md:gap-6 mb-4 md:mb-8'>
                        <div className='flex items-center gap-1'>
                            <input name="pdo" type="radio" id="" />
                            <p className='barlow font-semibold text-base md:text-xl leading-[22px]'>PDO Certificate Download</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <input name="pdo" type="radio" id="" />
                            <p className='barlow font-semibold  text-base  md:text-xl leading-[22px]'>PDO Enrollment Card</p>
                        </div>
                    </div> : null
                }
                <div>
                    <label className='barlow font-semibold text-base md:text-xl leading-[19.2px] md:leading-6 text-[#1E293B] mb-2 md:mb-3 block' htmlFor="field">{label}</label>
                    <input type={type} placeholder={placeholder} id="field" className='roboto font-normal w-full rounded-lg placeholder:barlow 
                    placeholder:text-sm md:placeholder:text-base focus:outline-none placeholder:text-[#64748B] border border-[#A7B8D1] bg-[#F8FAFC] pt-3.5 px-[11px] pb-4 md:py-3 md:px-4'  />
                </div>
                <div className='flex flex-col md:flex-row gap-3 md:gap-4 mt-3 md:mt-6'>
                    <div className='flex gap-2.5 items-center'>
                        <Image src="/registration/captcha.svg" width={137} height={54} alt="" />
                        <button>
                            <Image src="/registration/reload.svg" width={24} height={24} alt="" />
                        </button>
                    </div>
                    <div className='flex-1'>
                        <input placeholder='Enter Capca Code' id="field" className='roboto font-normal w-full rounded-lg placeholder:barlow placeholder:text-base focus:outline-none placeholder:text-[#64748B] border border-[#A7B8D1] bg-white py-3 px-4' type="text" />
                    </div>
                </div>
            </div>
            <div className='mt-8 md:mt-0'>
                <button className='barlow font-medium text-xl md:text-xl leading-8 text-white py-[13px] w-full bg-[#187E7D] rounded-lg' type='submit'>{btnText}</button>
            </div>
        </>
    );
};

export default InputField;
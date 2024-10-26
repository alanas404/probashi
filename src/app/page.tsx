"use client"

import Image from 'next/image';
import "./globals.css";
import React, { ReactNode, useEffect, useState } from 'react';
import { div } from 'framer-motion/client';

type Items = Array<{ key: string, link: string }>
type AccordionItem = { index: string, title: string, open: boolean, handleAccordion: (id: string) => void, items?: Items, showIcon?: boolean, isChild?: boolean, children?: ReactNode }

const AccordionItem = ({ index, title, open, handleAccordion, items, showIcon, isChild, children }: AccordionItem) => {

  return <div className='mb-4'>
    <button onClick={() => handleAccordion(index)} className='flex items-center justify-between w-full pb-5 border-b border-b-[#EAECF0]'>
      <span className={`barlow font-medium leading-6  ${open ? 'text-lg text-[#187E7D]' : ' text-sm text-[#667085]'}`}>{title}</span>
      {
        showIcon && <Image src={open ? "/icons/arrow-up.svg" : "/icons/arrow-down.svg"} alt='' width={16} height={16} />
      }

    </button>
    {
      open && <div className='px-5 pt-5'>
        {
          items && items.map(item => <a href={item.link} className='barlow font-medium text-base leading-[19.2px] mb-5 block' >{item.key}</a>)
        }
      </div>
    }





  </div>

}


const page = () => {

  const data = {
    1: false,
    2: false,
    22:false,
    3: false,

  }

  const child = {
 
    22: false,
    23:false,

  }
  const [accordion, setAccordion] = useState<Record<string, boolean>>(data);
  const [accordionChild, setAccordionChild] = useState<Record<string, boolean>>(child);

  const handleAccordion = (id: string) => {
    console.log(id);

    const newData = accordion;

    for (const item in newData) {

      if (item === id) {
        newData[item] = !newData[item];
        

      }
      else {
        newData[item] = false;
      }
    }
    const child = accordionChild;
    for(const item in child){
      child[item] = false;
    }
    setAccordionChild({...child});
    setAccordion({ ...newData });
  }


  const handleChildren = (id: string) => {
    console.log(id);

    const newData = accordionChild;

    for (const item in newData) {

      if (item === id) {
        newData[item] = !newData[item];
      }
      else {
        newData[item] = false;
      }
    }
    setAccordionChild({ ...newData });
  }


  const items = [
    {
      key: "BMET Registration",
      link: "#"
    },
    {
      key: "PDO (PreDeparture Orientation)",
      link: "#"
    },
    {
      key: "General Training",
      link: "#"
    },
    {
      key: "BMET Clearance (Smart Card) ",
      link: "#"
    }
  ]


  return (
    <div className="w-[325px] ml-10 mt-10">
      <div className='mb-4'>
        <button onClick={() => handleAccordion("1")} className='flex items-center justify-between w-full pb-5 border-b border-b-[#EAECF0]'>
          <span className={`barlow font-medium leading-6  ${accordion[1] ? 'text-lg text-[#187E7D]' : ' text-sm text-[#667085]'}`}>ENGLISH</span>
          <Image src={accordion[1] ? "/icons/arrow-up.svg" : "/icons/arrow-down.svg"} alt='' width={16} height={16} />
        </button>
        {
          accordion[1] && <div className='px-5 pt-5'>
            {
              items && items.map(item => <a href={item.link} className='barlow font-medium text-base leading-[19.2px] mb-5 block' >{item.key}</a>)
            }
          </div>
        }
      </div>
      <div className='mb-4'>
        <button onClick={() => handleAccordion("2")} className='flex items-center justify-between w-full pb-5 border-b border-b-[#EAECF0]'>
          <span className={`barlow font-medium leading-6  ${accordion[1] ? 'text-lg text-[#187E7D]' : ' text-sm text-[#667085]'}`}>ENGLISH</span>
          <Image src={accordion[2] ? "/icons/arrow-up.svg" : "/icons/arrow-down.svg"} alt='' width={16} height={16} />
        </button>
        <div className='pl-4'>
        {
          accordion[2] && <div>
            <div className='mb-4'>
              <button onClick={() => handleChildren("22")} className='flex items-center justify-between w-full pb-5 border-b border-b-[#EAECF0]'>
                <span className={`barlow font-medium leading-6  ${accordionChild[22] ? 'text-lg text-[#187E7D]' : ' text-sm text-[#667085]'}`}>ENGLISH</span>
                <Image src={accordionChild[22] ? "/icons/arrow-up.svg" : "/icons/arrow-down.svg"} alt='' width={16} height={16} />
              </button>
              {
                accordionChild[22] && <div className='px-5 pt-5'>
                  {
                    items && items.map(item => <a href={item.link} className='barlow font-medium text-base leading-[19.2px] mb-5 block' >{item.key}</a>)
                  }
                </div>
              }
            </div>
          </div>
        }
         {
          accordion[2] && <div>
            <div className='mb-4'>
              <button onClick={() => handleChildren("23")} className='flex items-center justify-between w-full pb-5 border-b border-b-[#EAECF0]'>
                <span className={`barlow font-medium leading-6  ${accordionChild[23] ? 'text-lg text-[#187E7D]' : ' text-sm text-[#667085]'}`}>ENGLISH</span>
                <Image src={accordionChild[23] ? "/icons/arrow-up.svg" : "/icons/arrow-down.svg"} alt='' width={16} height={16} />
              </button>
              {
                accordionChild[23] && <div className='px-5 pt-5'>
                  {
                    items && items.map(item => <a href={item.link} className='barlow font-medium text-base leading-[19.2px] mb-5 block' >{item.key}</a>)
                  }
                </div>
              }
            </div>
          </div>
        }
        </div>
      </div>
    </div>
  );
};

export default page;
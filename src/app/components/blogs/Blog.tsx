import Image from 'next/image';
import React from 'react';
import BlogCard from './BlogCard';

const Blog = () => {
    const blogs = [
        {
            title:"The best marketing strategy for company",
            date:"April 01, 2022",
            text:"One may not need charts and graphs at this point to know that in the past couple of years expecially,  at this point to know that in the past couple of years expecially, the buying and selling on....",
            link:"https://tailwindcss.com/docs/box-shadow"
        },
        {
            title:"The best marketing strategy for company",
            date:"April 01, 2022",
            text:"One may not need charts and graphs at this point to know that in the past couple of ",
            link:"https://tailwindcss.com/docs/box-shadow"
        },
        {
            title:"The best marketing strategy for company",
            date:"April 01, 2022",
            text:"One may not need charts and graphs at this point to know that in the past couple of years expecially",
            link:"https://tailwindcss.com/docs/box-shadow"
        }
    ]
    return (
        <div className='px-4 md:px-[135px] py-[72px]'>
             <div>
                <div className='flex  justify-between mb-[15px] md:mb-10 bg-[#7AC19F]'>
                    <h2 className='barlow text-white font-semibold text-2xl md:text-[32px] leading-[28.8px] md:leading-[38.4px]'>Probashi Blog</h2>
                    <a className='hidden md:flex gap-2 items-center' href="">
                        <p className='barlow text-white text-xl font-medium leading-[24px]'>View all</p>
                        <Image src="/blogs/white_arrow.svg" width={24} height={24} alt='' />
                    </a>
                </div>
                <div className='flex flex-col md:flex-row gap-[30px] justify-center'>
                {
                    blogs.map(blog => <BlogCard blog={blog}/>)
                }
                
                </div>
            </div>
        </div>
    );
};

export default Blog;
import React from 'react'
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

const Services = () => {
    const navigate = useNavigate();
  

  const handleClick = (slug) => {
    navigate(`/services/${slug}`);
  };
    return (
        <div className='max-sm:pt-[200px] '>
            <div className='flex justify-between items-center md:px-20 max-sm:px-6 pt-6 pb-6'>
                <div>
                    <h1 className='md:text-[3.5rem] max-sm:text-[2.5rem] bg-gradient-to-r from-white to-gray-500 font-medium text-transparent bg-clip-text'>Our Services</h1>
                </div>
                <div className='bg-green-500  md:w-[90px] max-sm:w-[40px] max-sm:py-5 max-sm:px-10 flex justify-center items-center rounded-full hover:bg-transparent hover:border-[1px] hover:border-green-500 transition-colors '>
                    <button className='md:w-[30px] md:py-6 font-medium leading-tight flex justify-center'>
                        SEE ALL
                    </button>
                </div>
            </div>
           <div className='md:px-10'>
           <div className='md:px-20 max-sm:p-6 max-sm:m-3 py-10 my-6 border-[1.5px] border-[#1E1E21] rounded-3xl hover:border-green-500 cursor-pointer transition-all'>
                <div className='flex items-center justify-between'  onClick={() => handleClick('website-development')} >
                    <div className='flex items-center max-sm:gap-1 md:gap-6 '>
                        <h1 className='text-[2.8rem] max-sm:text-[2rem]'>Website Development</h1>
                        <FiArrowRight className='text-[2.5rem] max-sm:hidden' />
                    </div>
                    <div>
                        <p className='text-[#929292]'>(001)</p>
                    </div>
                </div>
            </div>
           <div className='md:px-20 max-sm:p-6 max-sm:m-3 py-10 my-6 border-[1.5px] border-[#1E1E21] rounded-3xl hover:border-green-500 cursor-pointer transition-all'>
                <div className=' flex items-center flex-row-reverse justify-between '  onClick={() => handleClick('digital-marketing')}>
                    <div className='flex items-center max-sm:gap-2 md:gap-6'>
                        <h1 className='text-[2.8rem] max-sm:text-[2rem] text-wrap max-sm:w-[200px] text-end'>Digital Marketing</h1>
                        <FiArrowRight className='text-[2.5rem] max-sm:hidden' />
                    </div>
                    <div>
                        <p className='text-[#929292]'>(002)</p>
                    </div>
                </div>
            </div>
           <div className='md:px-20 max-sm:p-6 max-sm:m-3 py-10 my-6 border-[1.5px] border-[#1E1E21] rounded-3xl hover:border-green-500 cursor-pointer transition-all'  onClick={() => handleClick('seo-optimization')}>
                <div className='flex items-center  justify-between'>
                    <div className='flex items-center md:gap-6 '>
                        <h1 className='text-[2.8rem] max-sm:text-[2rem] max-sm:w-[200px]'>SEO Optimization</h1>
                        <FiArrowRight className='text-[2.5rem] max-sm:hidden' />
                    </div>
                    <div>
                        <p className='text-[#929292]'>(003)</p>
                    </div>
                </div>
            </div>
           <div className='md:px-20 max-sm:p-6 max-sm:m-3 py-10 my-6 border-[1.5px] border-[#1E1E21] rounded-3xl hover:border-green-500 cursor-pointer transition-all'  onClick={() => handleClick('social-media-management')}>
                <div className='flex items-center flex-row-reverse  justify-between'>
                    <div className='flex items-center md:gap-6 '>
                        <h1 className='text-[2.8rem] max-sm:text-[2rem] text-wrap max-sm:w-[250px] text-end'>Social Media Management</h1>
                        <FiArrowRight className='text-[2.5rem] max-sm:hidden' />
                    </div>
                    <div>
                        <p className='text-[#929292]'>(004)</p>
                    </div>
                </div>
            </div>
           </div>
        </div>
    )
}

export default Services
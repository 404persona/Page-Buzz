import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";

const OurVision = () => {
  return (
    <div className='md:px-20 max-sm:px-10'>
      <div className=''>
        <div className='flex justify-start'>
          <div><h1 className='text-[4rem] bg-gradient-to-r from-white to-gray-600  text-transparent bg-clip-text font-medium'>Our Vision</h1></div>
        </div>
        <div className='flex justify-end py-4 w-full h-full'>
          <div className='flex items-center w-[70px] h-[70px] bg-green-500  rounded-full'>
            <FaQuoteLeft className='mx-auto my-auto  text-white text-[3rem]  rounded-full ' />
          </div>
        </div>
        <div className='flex justify-center'>
          <div className=' w-[850px] py-4'>
            <q className=' text-[2rem] font-medium '>To empower businesses worldwide by providing innovative and customized digital solutions that drive growth, foster engagement, and transform their online presence. We strive to be the leading digital agency known for our excellence, creativity, and commitment to client success.</q>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurVision
import React from 'react'
import Second from "../Home/Second"

const About = () => {
  return (
    <div className=''>
      <div style={{
        backgroundImage: 'url(/AllPagesBg.png)',
        // backgroundSize : '100%'
      }} className='pt-[100px] py-20 z-40  '>
        <div className='relative top-0 flex justify-center'>
        <div className='absolute top-[-300px] z-0  bg-green-600/30 w-[400px] h-[400px] rounded-full blur-[100px]' ></div>
      </div>
        <div className=''>
          <div className='h-[300px] flex justify-center items-center'>
            <h1 className='text-[4rem] max-sm:text-[3rem] font-medium bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text'>About Us</h1>
          </div>
        </div>
      </div>
      <div className='py-10'>
        <Second/> 
        {/* this component is from the Home page components */}
      </div>
    </div>
  )
}

export default About
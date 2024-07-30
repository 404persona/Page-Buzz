import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import WhyCUS from './../Home/WhyCUS';
import OurValue from './OurValue';
import PricingPlans from './PricingPlans';
import HowItWorks from './HowItWorks';

const Services = () => {
  return (
    <div className='max-sm:py-20 overflow-hidden'>
      <div className='md:p-12 z-10'>
        <div style={{
          backgroundImage: 'url(/AllPagesBg.png)',
        }} className='pt-[100px] py-20 z-40'>
          <div className='relative top-0 flex justify-center'>
            <div className='absolute top-[-300px] z-0  bg-green-600/30 w-[400px] h-[400px] rounded-full blur-[100px]' ></div>
          </div>
          <div>
            <div className='h-[300px] flex justify-center items-center'>
              <h1 className='text-[4rem] max-sm:text-[3rem] font-medium bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text'>Services</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='md:px-10 md:py-10 max-sm:py-6 z-10'>
        <div className='md:px-20 max-sm:p-6 max-sm:m-3 py-10 my-6 border-[1.5px] border-[#1E1E21] rounded-3xl hover:border-green-500 cursor-pointer transition-all'>
          <div className='flex items-center justify-between'>
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
          <div className=' flex items-center flex-row-reverse justify-between '>
            <div className='flex items-center max-sm:gap-2 md:gap-6'>
              <h1 className='text-[2.8rem] max-sm:text-[2rem] text-wrap max-sm:w-[200px] text-end'>Digital Marketing</h1>
              <FiArrowRight className='text-[2.5rem] max-sm:hidden' />
            </div>
            <div>
              <p className='text-[#929292]'>(002)</p>
            </div>
          </div>
        </div>
        <div className='md:px-20 max-sm:p-6 max-sm:m-3 py-10 my-6 border-[1.5px] border-[#1E1E21] rounded-3xl hover:border-green-500 cursor-pointer transition-all'>
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
        <div className='md:px-20 max-sm:p-6 max-sm:m-3 py-10 my-6 border-[1.5px] border-[#1E1E21] rounded-3xl hover:border-green-500 cursor-pointer transition-all'>
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
      <div className='relative md:py-20 max-sm:py-10 '>
        {/* Green Blur Elements */}
        <div className='absolute inset-0 z-0'>
          <div className='absolute md:top-[20%] max-sm:top-[600px] md:right-[1000px] transform -translate-x-1/2 -translate-y-1/2'>
            <div className='md:w-[300px] md:h-[300px] max-sm:w-[200px] max-sm:h-[200px] bg-green-500/30 blur-[100px] rounded-full'></div>
          </div>
          <div className='absolute md:top-[5%] md:right-[-350px] max-sm:left-[300px] transform -translate-x-1/2 -translate-y-1/2'>
            <div className='md:w-[300px] md:h-[300px] max-sm:w-[200px] max-sm:h-[200px] bg-green-500/30 blur-[100px] rounded-full'></div>
          </div>
        </div>

        {/* Banner Content */}
        <div className='relative z-10'>
          <div className='md:p-20 max-sm:p-4'>
            <div className='border-[1px] p-4 rounded-3xl border-green-500'>
              <div className='bg-[#1E1E21] md:p-16 max-sm:p-4 flex flex-col justify-center items-center rounded-3xl'>
                <div className='flex md:gap-3 max-sm:gap-3 items-center'>
                  <div className='bg-green-500 rounded-3xl w-[20px] h-[6px]'></div>
                  <p className='max-sm:text-[.9rem]'>Transform Your Digital Presence</p>
                  <div className='bg-green-500 rounded-3xl w-[20px] h-[6px]'></div>
                </div>
                <div className='flex flex-col justify-center md:gap-6 max-sm:gap-6'>
                  <h2 className='text-[4rem] max-sm:text-[2.5rem] max-sm:py-2 md:px-10 text-center leading-tight'>Partner with PageBuzz Today!</h2>
                  <p className='text-[.9rem] text-[#929292] md:px-28 text-center'>Orci at id enim eu pellentesque habitant. Ut at diam suscipit amet id cursus id blandit. Consectetur maecenas id vivamus integer integer aliquam.</p>
                  <button className='uppercase bg-green-500 w-[200px] h-[40px] rounded-3xl mx-auto my-auto'>Get Started Now</button>
                </div>
              </div>
            </div>
          </div>
          <WhyCUS />
        </div>
        <div>
          <OurValue />
        </div>
        <div>
          <PricingPlans />
        </div>
        <div>
          <HowItWorks />
        </div>
      </div>
    </div>
  )
}

export default Services
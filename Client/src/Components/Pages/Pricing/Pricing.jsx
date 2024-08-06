import React from 'react'
// import Prices from './Prices'
import PricingPlans from '../Services/PricingPlans'
import WhyCUS from './../Home/WhyCUS';
import OurValue from './../Services/OurValue';
import MainVideo from './../Home/MainVideo';
import Expertise from '../About/Expertise';
import Faqs from '../FAQS/Faqs.jsx'

const Pricing = () => {
  return (
    <div>
         <div className='md:p-12'>
      <div style={{
        backgroundImage: 'url(/AllPagesBg.png)',
        // backgroundSize : '100%'
      }} className='pt-[100px] py-20 z-40  '>
        <div className='relative top-0 flex justify-center'>
        <div className='absolute top-[-300px] z-0  bg-green-600/30 w-[400px] h-[400px] rounded-full blur-[100px]' ></div>
      </div>
        <div className=''>
          <div className='h-[300px] flex justify-center items-center'>
            <h1 className='text-[4rem] max-sm:text-[3rem] font-medium bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text'>Pricing</h1>
          </div>
        </div>
      </div>
      </div>
        <div>
        <PricingPlans/>
        </div>
        <div>
            <WhyCUS/>
        </div>
        <div>
            <OurValue/>
        </div>
        <div>
            <MainVideo/>
        </div>
        <div>
            <Expertise/>
        </div>
        <div>
            <Faqs/>
        </div>
    </div>
  )
}

export default Pricing
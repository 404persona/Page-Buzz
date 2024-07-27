import React from 'react';
import { PricingData } from '../../../Data/Data';

const PricingPlans = () => {
  return (
    <>
      <div className='relative  z-0'>
        <div className='absolute top-[600px] left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-green-500/30 rounded-full blur-[200px]'></div>
      </div>
      <div className='relative z-10 md:py-20 md:px-16'>
        <div className='flex flex-col items-center'>
          <h1 className='text-[4rem] bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text'>Pricing Plans</h1>
          <p className='text-[#929292] w-[800px] text-center'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem facilis ab, reprehenderit voluptatibus vitae ad alias non voluptates molestiae aspernatur.
          </p>
        </div>
        <div>
          <div className='pt-28'>
            <div className='border-[1px] border-[#1E1E21] p-10 rounded-3xl'>
              {PricingData.map((plan, index) => (
                <div key={index} className='py-20'>
                  <div className='flex justify-between items-center h-64'>
                    <div className='flex flex-col gap-28'>
                      <div>
                        <h2 className='text-[2.5rem]'>{plan.title}</h2>
                        <div className='w-[500px]'>
                          <p className='text-[.9rem] text-[#929292] leading-tight'>{plan.text}</p>
                        </div>
                      </div>
                      <div>
                        <p className='text-[2.5rem] flex items-center gap-3'>
                          {plan.price}
                          <span className='text-[1rem] text-[#929292]'>(/ month)</span>
                        </p>
                      </div>
                    </div>
                    <hr className='border-[#1E1E21] border-[1px] h-64 mx-10' />
                    <div className='md:w-[50%]'>
                      <div className='details leading-loose text-[.9rem] px-10 text-[#929292]' dangerouslySetInnerHTML={{ __html: plan.details }} />
                      <button className='ml-10 border-[1px] border-gray-700 my-6 bg-black p-2 rounded-2xl'>GET STARTED</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPlans;

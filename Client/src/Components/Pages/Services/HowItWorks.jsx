import React from 'react'
import {HowItWorksData} from "../../../Data/Data"

const HowItWorks = () => {
  return (
    <div className='md:px-20 md:py-10'>
        <div className='flex items-center gap-3'>
            <div className='bg-green-500 rounded-3xl w-[20px] h-[6px]'></div>
            <p>How It Works</p>
        </div>
        <div className='flex justify-between items-center'>
            <div className='w-[600px]'>
                <h2 className='text-[2.5rem] leading-tight'>How PageBuzz Works: A Step-by-Step Guide</h2>
            </div>
            <div>
                <p className='text-[#929292] w-[500px]'>Nunc feugiat sit in ipsum facilisi eget volutpat quis magna. Nec consequat est volutpat ut sagittis volutpat egestas. Duis sit risus ut massa in faucibus elementum sed facilisi. Purus laoreet proin tristique pharetra nunc venenatis.</p>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks
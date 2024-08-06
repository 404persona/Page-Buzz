import React from 'react'
import Accordion from './Accordation'

const Faqs = () => {
  return (
    <div className='md:py-20  my-10'>
        <div className='flex flex-col items-center justify-center'>
            <div className='text-[4rem] max-sm:text-[3rem] font-medium bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text'>
                <h2>Faqs</h2>
            </div>
            <p className='md:px-48 max-sm:px-8 text-center md:py-4 text-[.9rem] text-[#929292]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae unde deserunt labore debitis vel, et, sed id molestiae rerum error ab ea iste! Sint quisquam suscipit laborum, ut consectetur similique.</p>
        </div>
        <div className='px-4'>
        <Accordion/>
        </div>
    </div>
  )
}

export default Faqs
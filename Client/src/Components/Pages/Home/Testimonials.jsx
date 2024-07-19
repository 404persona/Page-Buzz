import React from 'react'

const Testimonials = () => {
    return (
        <div>
            <div className='px-20'>
                <div className='flex justify-start items-center gap-2'>
                    <div className='w-[20px] h-[6px] rounded-full bg-green-500' ></div>
                    <p>Testimonials</p>
                </div>
                <div className='flex justify-between items-center py-6'>
                <div className='text-[2.5rem] leading-tight tracking-tighter w-[500px]'>
                    <h1>Client Testimonials: Real Results, Real Feedback</h1>
                </div>
                <div className='w-[480px] text-[.9rem] text-[#929292]'>
                    <p>Nunc feugiat sit in ipsum facilisi eget volutpat quis magna. Nec consequat est volutpat ut sagittis volutpat egestas. Duis sit risus ut massa in faucibus elementum sed facilisi. Purus laoreet proin tristique pharetra nunc venenatis.</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
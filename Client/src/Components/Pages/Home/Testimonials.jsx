import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { TestimonialsData } from '../../../Data/Data';

const Testimonials = () => {
    return (
        <div>
            <div className='px-16'>
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
                <div>
                    <div className='flex flex-wrap justify-center gap-16 my-10'>
                        {TestimonialsData.map((test, index) => (
                           <div className='w-[500px] flex flex-col justify-between gap-4 mb-10'>
                             <div className='flex justify-between'>
                                <div className='text-[3rem]'>
                                    <FaQuoteLeft />
                                </div>
                                <div className='flex items-center gap-2'>
                                    <IoStar className='text-green-500' />
                                    ({test.rating}/5)
                                </div>
                            </div>
                            <div>
                                <q className='font-medium text-[1.7rem] text-justify'>{test.content}</q>
                            </div>
                            <div>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <p className='text-[1.3rem]'>{test.name}</p>
                                        <p className='text-[#929292]'>{test.bio}</p>
                                    </div>
                                    <div>
                                        <img src={test.avatar} className='w-[50px] h-[50px] rounded-full' />
                                    </div>
                                </div>
                            </div>
                           </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
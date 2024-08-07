import React from 'react'
import BuzzStats from './../Home/BuzzStats';
import { GeneralFaqsData } from '../../../Data/Data';
import Accordion from './../FAQS/Accordation';

const Form = () => {
    return (
        <div>
            <div>
                <div>
                    <h2 className='md:text-[3rem] text-[2rem] text-center pb-16'>Send Us Message</h2>
                </div>
                <div className='flex flex-col justify-center items-center gap-10'>
                    <div className='flex max-sm:flex-col justify-center gap-10'>
                        <input type="text" placeholder='First Name' className='p-3 max-sm:p-2 rounded-xl bg-transparent border-[1.5px] border-[#1E1E21] md:w-[500px] max-sm:w-[320px] outline-none focus:outline-green-500 transition-all' />
                        <input type="text" placeholder='Last Name' className='p-3 rounded-xl bg-transparent border-[1.5px] border-[#1E1E21] md:w-[500px] max-sm:w-[320px] outline-none focus:outline-green-500 transition-all' />
                    </div>
                    <div className='flex max-sm:flex-col justify-center gap-10'>
                        <input type="text" placeholder='Phone Number' className='p-3 rounded-xl bg-transparent border-[1.5px] border-[#1E1E21] md:w-[500px] max-sm:w-[320px] outline-none focus:outline-green-500 transition-all' />
                        <input type="email" placeholder='Your Email' className='p-3 rounded-xl bg-transparent border-[1.5px] border-[#1E1E21] md:w-[500px] max-sm:w-[320px] outline-none focus:outline-green-500 transition-all' />
                    </div>
                    <div>
                        <textarea placeholder='Your Message' className='p-3 rounded-xl bg-transparent border-[1.5px] border-[#1E1E21] md:w-[1035px] md:h-[200px] max-sm:w-[320px] max-sm:h-[200px] outline-none focus:outline-green-500 transition-all' />
                    </div>
                    <div>
                        <button className='uppercase bg-green-500 p-3 font-medium rounded-3xl md:w-[1000px] max-sm:w-[320px] border-[1.5px] border-transparent hover:border-green-500 hover:bg-transparent transition-all'>send email</button>
                    </div>
                </div>

                <div className='md:my-6 mt-20'>
                    <BuzzStats />
                </div>
                <div>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='text-[4rem] max-sm:text-[3rem] font-medium bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text'>
                            <h2>Faqs</h2>
                        </div>
                        <p className='md:px-48 max-sm:px-8 text-center md:py-4 text-[.9rem] text-[#929292]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae unde deserunt labore debitis vel, et, sed id molestiae rerum error ab ea iste! Sint quisquam suscipit laborum, ut consectetur similique.</p>
                    </div>
                    <div className='relative z-10'>
                        <div className=' flex justify-between md:gap-[100px] absolute md:top-[-500px] max-sm:top-[-500px] left-0 right-0 bottom-0  overflow-hidden z-0'>
                            <div className='absolute top-[50%] max-sm:top-[40%] transform -translate-x-1/2 -translate-y-1/2'>
                                <div className='md:w-[300px] md:h-[300px] max-sm:w-[200px] max-sm:h-[200px] bg-green-500/30  blur-[100px] rounded-full'></div>
                            </div>
                            <div className='absolute top-[-10%] max-sm:top-[50%] md:left-[950px] max-sm:left-[300px] transform md:translate-x-1/2 md:translate-y-1/2'>
                                <div className='md:w-[300px] md:h-[300px] max-sm:w-[200px] max-sm:h-[200px] bg-green-500/30  blur-[100px] rounded-full'></div>
                            </div>
                        </div>
                    </div>
                   <div className='max-sm:p-6 z-10'>
                   <Accordion data={GeneralFaqsData} />
                   </div>
                </div>

            </div>
        </div>
    )
}

export default Form
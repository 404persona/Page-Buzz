import React from 'react'
import { ContactUsData } from '../../../Data/Data'
import Form from './Form';

const Contact = () => {
    return (
        <div>

            <div className='md:p-12 relative z-10'>
                <div style={{
                    backgroundImage: 'url(/AllPagesBg.png)',
                }} className='pt-[100px] py-20 z-40'>
                    <div className='relative top-0 flex justify-center'>
                        <div className='absolute top-[-300px] z-0  bg-green-600/30 w-[400px] h-[400px] rounded-full blur-[100px]' ></div>
                    </div>
                    <div>
                        <div className='h-[300px] flex justify-center items-center'>
                            <h1 className='text-[4rem] max-sm:text-[2.5rem] font-medium bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text'>Contact Us</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex justify-center items-center flex-wrap gap-10 md:py-20 py-20'>
                    {ContactUsData.map((item, index) => (
                        <div key={index} className='border-[1.5px] p-10 flex flex-col items-center gap-3 md:w-[350px] w-[300px] rounded-3xl border-[#1E1E21]'>
                            <div><item.icon className='text-green-500 text-[4rem]' /></div>
                            <h2 className='text-[1.3rem]'>{item.title}</h2>
                            <p className='text-[.9rem] text-[#929292] text-center'>{item.content}</p>
                        </div>
                    ))}
                </div>
                <div className='relative z-0'>
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default Contact
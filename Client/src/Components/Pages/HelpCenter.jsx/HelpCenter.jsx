import React from 'react'
import Accordion from '../FAQS/Accordation'
import { GeneralFaqsData, ServiceFaqsData } from "../../../Data/Data"
import MidComponent from './MidComponent'

const HelpCenter = () => {
    return (
        <div>
            <div className='md:p-12'>
                <div style={{
                    backgroundImage: 'url(/AllPagesBg.png)',
                }} className='pt-[100px] py-20 z-40'>
                    <div className='relative top-0 flex justify-center'>
                        <div className='absolute top-[-300px] z-0  bg-green-600/30 w-[400px] h-[400px] rounded-full blur-[100px]' ></div>
                    </div>
                    <div>
                        <div className='h-[300px] flex justify-center items-center'>
                            <h1 className='text-[4rem] max-sm:text-[2.5rem] font-medium bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text'>Help Center</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-20 md:py-10 max-sm:px-6 '>
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='text-[4rem] max-sm:text-[2.5rem] font-medium bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text'>General Faqs</h2>
                    <p className='text-[.9rem] text-[#929292] md:px-44 max-sm:px-6 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum iste dolor quas nobis hic velit autem ipsum? Mollitia ratione veritatis dolores delectus obcaecati pariatur distinctio!</p>
                </div>
                <Accordion data={GeneralFaqsData} />
            </div>
            <div className=' relative z-10'>
                <MidComponent />
            </div>
            <div className='py-20 my-10 relative max-sm:p-6 z-40'>
            <div className='flex flex-col justify-center items-center'>
                    <h2 className='text-[4rem] max-sm:text-[2.5rem] font-medium bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text'>Service Faqs</h2>
                    <p className='text-[.9rem] text-[#929292] md:px-44 max-sm:px-6 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum iste dolor quas nobis hic velit autem ipsum? Mollitia ratione veritatis dolores delectus obcaecati pariatur distinctio!</p>
                </div>
                <Accordion data={ServiceFaqsData}/>
                </div>
            <div className='relative z-0'>
                <div className=' flex justify-between md:gap-[100px] absolute md:top-[-2000px] max-sm:top-[-2000px] left-0 right-0 bottom-0  overflow-hidden z-0'>
                    <div className='absolute top-[35%] max-sm:top-[10%] transform -translate-x-1/2 -translate-y-1/2'>
                        <div className='md:w-[300px] md:h-[300px] max-sm:w-[200px] max-sm:h-[200px] bg-green-500/30  blur-[100px] rounded-full'></div>
                    </div>
                    <div className='absolute top-[20%] md:left-[950px] max-sm:left-[300px] transform md:translate-x-1/2 md:translate-y-1/2'>
                        <div className='md:w-[300px] md:h-[300px] max-sm:w-[200px] max-sm:h-[200px] bg-green-500/30  blur-[100px] rounded-full'></div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default HelpCenter
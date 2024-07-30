import React from 'react'
import { WhyChooseUsCards } from '../../../Data/Data'

const OurMission = () => {
    return (
        <div>
            <div className='py-20 '>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <div className='flex items-center gap-4'>
                        <div className='bg-green-500 w-[20px] h-[6px] rounded-full'></div>
                        <div>Our Mission</div>
                        <div className='bg-green-500 w-[20px] h-[6px] rounded-full'></div>
                    </div>
                    <div className='md:w-[650px] text-center'>
                        <h1 className='text-[3rem] max-sm:text-[2rem]  leading-tight'>Transforming Visions into Digital Reality</h1>
                    </div>
                </div>
                <div className='relative top-[170px]'>
                    <div className='flex justify-center items-center md:gap-6 max-sm:gap-20 flex-wrap max-sm:p-6 '>
                        {WhyChooseUsCards.map((card, index) => (
                            <div key={index}>
                                <div className=' md:w-[364px] md:h-[300px] transition-colors hover:bg-[#1E1E21] md:p-4 flex cursor-pointer flex-col md:gap-3 rounded-3xl justify-center items-center md:mb-20 max-sm:p-2'>
                                    <div className='relative top-[-80px] flex gap-4 flex-col justify-center items-center '>
                                        <img src={card.logo} className='w-[100px] h-[100px]' />
                                        <div className='text-[1.5rem] font-medium'>{card.title}</div>
                                        <p className='text-center text-[#929292]' >{card.content}</p>
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

export default OurMission
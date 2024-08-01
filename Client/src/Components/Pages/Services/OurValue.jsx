import React from 'react'

const OurValue = () => {
    return (
        <div>
            <div className='md:px-28 max-sm:py-20     md:py-8 md:mt-20'>
                <div className='flex max-sm:flex-col md:flex-row-reverse justify-between items-center md:gap-20'>
                    <div className='flex  justify-center items-center md:w-[50%] max-sm:w-full h-[400px] max-sm:p-6 '>
                        <div className='absolute'>
                            <img src="/Secondbg.png" className='md:w-[550px] relative md:top-0  max-sm:w-[400px] max-sm:right-[0px] max-sm:h-[370px] md:right-[px] max-sm:top-[-5px]' />
                        </div>
                        <div className='relative flex justify-center items-center'>
                            <img src="/Second2.png" className=' md:w-[400px] md:h-[400px] max-sm:w-[300px] max-sm:h-[300px] rounded-2xl' />
                        </div>
                    </div>
                    <div className='md:w-[50%] p-2 max-sm:px-6  md:h-[400px] flex items-center'>
                        <div className='flex flex-col gap-2 ' >
                            <div className='flex items-center gap-2'>
                                <div className='w-[20px] h-[6px] rounded-full bg-green-500' ></div>
                                <p>Our Value</p>
                            </div>
                            <h2 className='md:text-[3rem] max-sm:text-[2.7rem] text-wrap  tracking-tighter leading-[1]'>Values That Define Our Digital Approach</h2>
                            <div className='flex flex-col justify-center items-center gap-4 md:pt-10 max-sm:py-10'>
                                <div className='flex gap-6 max-sm:items-center'>
                                    <img src="/WhyChooseUsLogo/Logo1.png" className='h-[90px]' />
                                    <div>
                                        <h1 className='text-[1.8rem]'>Inovation</h1>
                                        <p className='text-[#929292]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt deserunt obcaecati quibusdam inventore, quasi atque?</p>
                                    </div>
                                </div>
                                <div className='flex gap-6 max-sm:items-center'>
                                    <img src="/WhyChooseUsLogo/Logo2.png" className='h-[90px]' />
                                    <div>
                                        <h1 className='text-[1.8rem]'>Quality</h1>
                                        <p className='text-[#929292]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt deserunt obcaecati quibusdam inventore, quasi atque?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurValue
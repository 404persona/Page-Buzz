import React from 'react'
import { GiDiamonds } from 'react-icons/gi'

const Second = () => {
    return (
        <>
            <div className='md:px-28  md:py-8 md:mt-20'>
                <div className='flex max-sm:flex-col justify-between items-center md:gap-20'>
                    <div className='flex  justify-center items-center md:w-[50%] max-sm:w-full h-[400px] max-sm:p-6 '>
                        <div className='absolute'>
                            <img src="/Secondbg.png" className='md:w-[550px] relative md:top-0  max-sm:w-[400px] max-sm:right-[10px] max-sm:h-[370px] md:right-[px] max-sm:top-[950px]' />
                        </div>
                        <div className='relative flex justify-center items-center'>
                            <img src="/Second2.png" className=' md:w-[400px] md:h-[350px] max-sm:w-[300px] max-sm:h-[300px] rounded-2xl' />
                        </div>
                    </div>
                    <div className='md:w-[50%] p-2 max-sm:p-6  h-[400px] flex items-center'>
                        <div className='flex flex-col gap-2 max-sm:pt-10'>
                            <div className='flex items-center gap-2'>
                                <div className='w-[20px] h-[6px] rounded-full bg-green-500' ></div>
                                <p>About Us</p>
                            </div>
                            <h2 className='md:text-[3rem] max-sm:text-[2.7rem] text-wrap  tracking-tighter leading-[1]'>Passion for Digital Transformation</h2>
                            <p className='text-[#929292]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatem odit, quod totam rem distinctio aut est sint facilis! Consequatur?</p>
                            <div className='py-2'>
                                <div>
                                    <hr className='mx-1 border-t-[1px] py-1 border-[#1E1E21]' />
                                </div>
                                <div className='flex items-center max-sm:justify-center max-sm:flex-wrap pt-2 gap-10'>
                                    <div className='flex items-center gap-2'>
                                        <img src="/SecondLogo/Logo1.png" className='w-[23.53px] h-[21px]' />
                                        <p className="font-bold">Logoipsum</p>
                                    </div>
                                    <GiDiamonds className='text-green-500 text-[1.5rem]' />
                                    <div className='flex items-center gap-2'>
                                        <img src="/SecondLogo/Logo2.png" className='w-[23.53px] h-[21px]' />
                                        <p className="font-bold">Logoipsum</p>
                                    </div>
                                    <GiDiamonds className='text-green-500 text-[1.5rem] max-sm:hidden' />
                                    <div className='flex items-center gap-2'>
                                        <img src="/SecondLogo/Logo3.png" className='w-[23.53px] h-[21px]' />
                                        <p className="font-bold">Logoipsum</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' py-2'>
                                <div>
                                    <hr className='mx-1 border-t-[1px] py-1 border-[#1E1E21]' />
                                </div>
                                <div className='flex items-center max-sm:justify-center max-sm:flex-wrap pt-2 gap-10'>
                                    <div className='flex items-center gap-2'>
                                        <img src="/SecondLogo/Logo4.png" className='w-[23.53px] h-[21px]' />
                                        <p className="font-bold">Logoipsum</p>
                                    </div>
                                    <GiDiamonds className='text-green-500 text-[1.5rem]' />
                                    <div className='flex items-center gap-2'>
                                        <img src="/SecondLogo/Logo5.png" className='w-[23.53px] h-[21px]' />
                                        <p className="font-bold">Logoipsum</p>
                                    </div>
                                    <GiDiamonds className='text-green-500 text-[1.5rem] max-sm:hidden' />
                                    <div className='flex items-center gap-2'>
                                        <img src="/SecondLogo/Logo6.png" className='w-[23.53px] h-[21px]' />
                                        <p className="font-bold">Logoipsum</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Second
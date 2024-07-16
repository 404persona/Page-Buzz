import React from 'react'
import { GiDiamonds } from 'react-icons/gi'

const Second = () => {
    return (
        <>
            <div className='px-28 py-8 mt-20'>
                <div className='flex justify-between items-center gap-20'>
                    <div className='flex justify-center items-center w-[50%] h-[400px] '>
                        <div className=''>
                            <img src="/Secondbg.png" className='w-[550px] absolute top-[800px] left-[80px]' />
                        </div>
                        <div className='relative flex justify-center items-center'>
                            <img src="/Second2.png" className=' w-[400px] h-[350px] rounded-2xl' />
                        </div>
                    </div>
                    <div className='w-[50%] p-2  h-[400px] flex items-center'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex items-center gap-2'>
                                <div className='w-[20px] h-[6px] rounded-full bg-green-500' ></div>
                                <p>About Us</p>
                            </div>
                            <h2 className='text-[3rem] tracking-tighter leading-[1]'>Passion for Digital Transformation</h2>
                            <p className='text-[#929292]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatem odit, quod totam rem distinctio aut est sint facilis! Consequatur?</p>
                            <div className='py-2'>
                                <div>
                                    <hr className='mx-1 border-t-[1px] py-1 border-[#1E1E21]' />
                                </div>
                                <div className='flex items-center pt-2 gap-3'>
                                    <div className='flex items-center gap-2'>
                                        <img src="/SecondLogo/Logo1.png" className='w-[23.53px] h-[21px]' />
                                        <p className="font-bold">Logoipsum</p>
                                    </div>
                                    <GiDiamonds className='text-green-500 text-[1.5rem]' />
                                    <div className='flex items-center gap-2'>
                                        <img src="/SecondLogo/Logo2.png" className='w-[23.53px] h-[21px]' />
                                        <p className="font-bold">Logoipsum</p>
                                    </div>
                                    <GiDiamonds className='text-green-500 text-[1.5rem]' />
                                    <div className='flex items-center gap-2'>
                                        <img src="/SecondLogo/Logo3.png" className='w-[23.53px] h-[21px]' />
                                        <p className="font-bold">Logoipsum</p>
                                    </div>
                                </div>
                            </div>
                            <div className='py-2'>
                                <div>
                                    <hr className='mx-1 border-t-[1px] py-1 border-[#1E1E21]' />
                                </div>
                                <div className='flex items-center pt-2 gap-3'>
                                    <div className='flex items-center gap-2'>
                                        <img src="/SecondLogo/Logo4.png" className='w-[23.53px] h-[21px]' />
                                        <p className="font-bold">Logoipsum</p>
                                    </div>
                                    <GiDiamonds className='text-green-500 text-[1.5rem]' />
                                    <div className='flex items-center gap-2'>
                                        <img src="/SecondLogo/Logo5.png" className='w-[23.53px] h-[21px]' />
                                        <p className="font-bold">Logoipsum</p>
                                    </div>
                                    <GiDiamonds className='text-green-500 text-[1.5rem]' />
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
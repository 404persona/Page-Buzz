import React from 'react'
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <div>
            <div className='pt-[100px] px-20'>
                <div className='border-[1px] border-green-500 p-4 rounded-2xl'>
                    <div className='flex flex-col justify-center items-center bg-[#1E1E21] p-6 rounded-2xl'>
                        <div className='flex justify-center items-center gap-3'>
                            <div className='w-[20px] h-[6px] bg-green-500 rounded-full'></div>
                            <p>Avaliable for New Project</p>
                            <div className='w-[20px] h-[6px] bg-green-500 rounded-full'></div>
                        </div>
                        <div className='w-[900px] leading-tight tracking-tighter text-center'>
                            <h2 className='text-[4rem] bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text'>Interested in Working Together ?</h2>
                        </div>
                        <div className='w-[700px] text-center text-[#929292]'><p>Orci at id enim eu pellentesque habitant. Ut at diam suscipit amet id cursus id blandit. Consectetur maecenas id vivamus integer integer aliquam.</p></div>
                        <div className='py-6'><button className='uppercase p-3 font-medium bg-green-500 rounded-3xl border-[1px] border-green-500 hover:bg-transparent transition-colors'>Schedule A Call</button></div>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className=' relative top-[200px] flex flex-col justify-center items-center '>
                    <div className='leading-tight'>
                        <h1 className='uppercase text-[6rem] font-medium bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text'>pagebuzz</h1>
                        <p className='text-center w-[500px] text-[1rem]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem iure ex impedit, sunt numquam.</p>
                    </div>
                    <div className='flex justify-center gap-4 py-6'>
                        <button className='border-[1px] border-white p-2 rounded-3xl' >Facebook</button>
                        <button className='border-[1px] border-white p-2 rounded-3xl' >Instagram</button>
                        <button className='border-[1px] border-white p-2 rounded-3xl' >LinkedIn</button>
                        <button className='border-[1px] border-white p-2 rounded-3xl' >Behance</button>
                    </div>
                    <div className='relative top-[150px] w-full h-full flex justify-center items-center'>
                        <div className='absoulte top-[-100px] overflow-hidden '>
                            <hr className='w-screen border-t-[2px]  border-[#1E1E21]' />
                            <div className='py-4 flex flex-col gap-2 text-center'>
                                <p>Copyright 2024 PageBuzz</p>
                                <p>Designed and Powered By <a href="https://github.com/404persona/Page-Buzz" className='underline'>Anas Tanveer</a></p>
                            </div>
                            <hr className=' border-t-[2px]  border-[#1E1E21]' />
                        </div>
                    </div>
                </div>
                <div className='relative top-[200px] overflow-hidden flex justify-center w-full h-full blur-[150px]'>
                    <div
                        className='relative top-[100px] w-[600px] h-[200px]  bg-green-400 rounded-full overflow-clip'
                    ></div>
                </div>
            </div>

        </div>
    )
}

export default Footer
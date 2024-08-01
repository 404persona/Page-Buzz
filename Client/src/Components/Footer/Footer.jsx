import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className='pt-[100px] md:px-20'>
                <div className='max-sm:p-3 max-sm:py-4 max-sm:m-4 border-[1px] border-green-500 md:p-4 rounded-2xl'>
                    <div className='flex flex-col justify-center items-center gap-3 max-sm:pt-6 bg-[#1E1E21] md:p-6 max-sm:p-2 rounded-2xl'>
                        <div className='flex justify-center items-center gap-3'>
                            <div className='w-[20px] h-[6px] bg-green-500 rounded-full'></div>
                            <p>Avaliable for New Project</p>
                            <div className='w-[20px] h-[6px] bg-green-500 rounded-full'></div>
                        </div>
                        <div className='md:w-[900px] leading-tight tracking-tighter text-center'>
                            <h2 className='md:text-[4rem] max-sm:text-[2.5rem] bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text'>Interested in Working Together ?</h2>
                        </div>
                        <div className='md:w-[700px] text-center text-[#929292]'><p>Orci at id enim eu pellentesque habitant. Ut at diam suscipit amet id cursus id blandit. Consectetur maecenas id vivamus integer integer aliquam.</p></div>
                        <div className='py-6'><button className='uppercase p-3 font-medium bg-green-500 rounded-3xl border-[1px] border-green-500 hover:bg-transparent transition-colors'>Schedule A Call</button></div>
                    </div>
                </div>
            </div>
            <div className='max-sm:p-10'>
                <div className=' relative md:top-[200px] max-sm:top-[180px] flex flex-col justify-center items-center '>
                    <div className='leading-tight'>
                        <h1 className='uppercase md:text-[6rem] max-sm:text-[4rem] text-center font-medium bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text'>pagebuzz</h1>
                        <p className='text-center md:w-[500px] md:text-[1rem] max-sm:text-[.8rem]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem iure ex impedit, sunt numquam.</p>
                    </div>
                    <div className='flex justify-center max-sm:gap-6 max-sm:flex-wrap md:gap-4 py-6'>
                        <button className='border-[1px] border-white p-2 rounded-3xl' >Facebook</button>
                        <button className='border-[1px] border-white p-2 rounded-3xl' >Instagram</button>
                        <button className='border-[1px] border-white p-2 rounded-3xl' >LinkedIn</button>
                        <button className='border-[1px] border-white p-2 rounded-3xl' >Behance</button>
                    </div>
                    <div className='relative md:top-[150px] max-sm:top-[290px] z-40 w-full h-full flex justify-center items-center'>
                        <div className='absoulte top-[-100px] overflow-hidden '>
                            <hr className='w-screen border-t-[2px]  border-[#1E1E21]' />
                            <div className='py-4 flex flex-col gap-2 text-center'>
                                <p>Copyright &copy; 2024 PageBuzz</p>
                                <p>Designed and Powered By <a href="https://github.com/404persona/Page-Buzz" className='underline cursor-pointer'>Anas Tanveer</a></p>
                            </div>
                            <hr className=' border-t-[2px]  border-[#1E1E21]' />
                        </div>
                    </div>
                </div>
                <div className='relative top-[200px] overflow-hidden flex justify-center w-full h-full blur-[150px] z-10'>
                    <div
                        className='relative top-[100px] w-[600px] h-[200px]  bg-green-400 rounded-full overflow-clip'
                    ></div>
                </div>
            </div>

        </div>
    )
}

export default Footer
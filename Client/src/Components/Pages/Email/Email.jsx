import React from 'react'

const Email = () => {
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
                            <h1 className='text-[4rem] max-sm:text-[2.5rem] font-medium bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text'>Email Us</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-20'>
                    <h2 className='md:text-[3rem] text-[2rem] text-center pb-2'>Send Us Message</h2>
                </div>
             <div className='flex flex-col justify-center items-center gap-10 '>
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
        </div></div>
    )
}

export default Email
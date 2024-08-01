import React from 'react';
// import { HowItWorksData } from '../../../Data/Data';

const HowItWorks = () => {
    return (
        <div className='relative  overflow-hidden'>
            <div className='absolute md:top-[410px] max-sm:top-[1000px] max-sm:left-[90px]  z-0 flex items-center justify-center md:left-[1050px]'>
                <div className='md:w-[350px] md:h-[350px] max-sm:w-[200px] max-sm:h-[200px] bg-green-500/30  blur-[100px] rounded-full'></div>
            </div>
            <div className='relative md:px-20 md:py-10 max-sm:py-10 max-sm:px-8 z-10'>
                <div className='flex items-center gap-3 mb-6 max-sm:ml-[20px]'>
                    <div className='bg-green-500 rounded-3xl w-[20px] h-[6px]'></div>
                    <p className='text-white'>How It Works</p>
                </div>
                <div className='flex md:justify-between max-sm:gap-4 max-sm:flex-col items-center mb-10'>
                    <div className='md:w-[600px]'>
                        <h2 className='text-[2.5rem] max-sm:text-[2rem] max-sm:text-center leading-tight text-white'>How PageBuzz Works: A Step-by-Step Guide</h2>
                    </div>
                    <div className='md:w-[500px]'>
                        <p className='text-[#929292] text-[.9rem] max-sm:text-center'>Nunc feugiat sit in ipsum facilisi eget volutpat quis magna. Nec consequat est volutpat ut sagittis volutpat egestas. Duis sit risus ut massa in faucibus elementum sed facilisi. Purus laoreet proin tristique pharetra nunc venenatis.</p>
                    </div>
                </div>
                <div className='md:py-10 max-sm:py-6 flex flex-col gap-10'>
                    <div className='flex gap-6'>
                        <div className='flex max-sm:flex-col gap-6 md:p-10 max-sm:p-4 rounded-2xl border-[1.5px] border-[#1E1E21] md:w-[700px]'>
                            <div className='relative md:bottom-7'>
                                <div className='bg-white text-black md:w-[100px] md:h-[100px] w-[60px] h-[60px]  flex justify-center items-center rounded-full font-semibold'>Step 1</div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <p className='text-[1.8rem] max-sm:leading-tight'>Consultation and Strategy</p>
                                <p className='text-[#929292] max-sm:hidden  text-[.9rem]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo dignissimos voluptatibus, nostrum unde quasi doloremque quidem sint repellat recusandae doloribus quo!</p>
                            </div>
                            <p className='text-[#929292] md:hidden text-[.9rem]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo dignissimos voluptatibus, nostrum unde quasi doloremque quidem sint repellat recusandae doloribus quo!</p>
                        </div>
                        <div className='flex items-end max-sm:hidden'>
                            <img src="/ArrowDownRight.png" />
                        </div>
                    </div>
                    <div className='flex justify-end gap-6 '>
                        <div className='flex items-end max-sm:hidden'>
                            <img src="/ArrowDownLeft.png" alt="" />
                        </div>
                        <div className='flex max-sm:flex-col gap-6 max-sm:p-6 md:p-10 rounded-2xl border-[1.5px] border-[#1E1E21] md:w-[720px]'>
                            <div className='relative md:bottom-7'>
                                <div className='bg-white text-black md:w-[100px] md:h-[100px] w-[60px] h-[60px]  flex justify-center items-center rounded-full font-semibold'>Step 2</div>
                            </div>
                            <div>
                                <p className='text-[1.8rem] max-sm:leading-tight'>Implementation and Development</p>
                                <p className='text-[#929292] max-sm:hidden text-[.9rem]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo dignissimos voluptatibus, nostrum unde quasi doloremque quidem sint repellat recusandae doloribus quo!</p>
                            </div>
                            <p className='text-[#929292] md:hidden text-[.9rem]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo dignissimos voluptatibus, nostrum unde quasi doloremque quidem sint repellat recusandae doloribus quo!</p>
                        </div>
                    </div>
                    <div className='flex max-sm:flex-col max-sm:items-end  justify-evenly'>
                        <div className='flex max-sm:flex-col gap-6 md:p-10 max-sm:p-6 rounded-2xl border-[1.5px] border-[#1E1E21] md:w-[700px]'>
                            <div className='relative md:bottom-7'>
                                <div className='bg-white text-black md:w-[100px] md:h-[100px] w-[60px] h-[60px]  flex justify-center items-center rounded-full font-semibold'>Step 3</div>
                            </div>
                            <div>
                                <p className='text-[1.8rem] max-sm:leading-tight'>Monitoring and Optimization</p>
                                <p className='text-[#929292] max-sm:hidden text-[.9rem]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo dignissimos voluptatibus, nostrum unde quasi doloremque quidem sint repellat recusandae doloribus quo!</p>
                            </div>
                            <p className='text-[#929292] md:hidden text-[.9rem]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo dignissimos voluptatibus, nostrum unde quasi doloremque quidem sint repellat recusandae doloribus quo!</p>
                        </div>
                        <div className='uppercase flex items-center'>
                            <button className='bg-black p-3 rounded-3xl cursor-pointer border-[1.5px] border-transparent hover:border-white hover:bg-transparent transition-all max-sm:mt-4'>Get started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;

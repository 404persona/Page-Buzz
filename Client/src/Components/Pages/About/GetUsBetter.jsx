import React from 'react';
import { GetToKnow } from '../../../Data/Data';

const GetUsBetter = () => {
    return (
        <div className='relative'>
             <div className='flex justify-between md:gap-[100px] absolute md:top-[-500px] max-sm:top-[-800px] left-0 right-0 bottom-0  overflow-hidden'>
                <div className='absolute top-[50%] transform -translate-x-1/2 -translate-y-1/2 '>
                    <div className='md:w-[300px] md:h-[300px] max-sm:w-[200px] max-sm:h-[200px] md:bg-green-500/30 bg-green-500 blur-[100px] rounded-full'></div>
                </div>
                <div className='absolute top-[30%] md:left-[950px] max-sm:left-[300px] transform md:translate-x-1/2 md:translate-y-1/2'>
                    <div className='md:w-[300px] md:h-[300px] max-sm:w-[200px] max-sm:h-[200px] md:bg-green-500/30 bg-green-500 blur-[100px] rounded-full'></div>
                </div>
            </div>
            <div className='relative z-40 flex flex-col justify-center items-center'>
                <div className='w-[900px] text-center'>
                    <h1 className='text-[4rem] bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text'>Get to Know Us Better</h1>
                    <p className='text-[.9rem] text-[#929292] text-wrap'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, ipsam laboriosam. Quisquam molestias esse libero voluptas mollitia reprehenderit dolor maiores nam cumque!
                    </p>
                </div>
            </div>
            <div className='relative z-10 px-14 py-16 flex flex-col gap-10'>
                {GetToKnow.map((item, index) => (
                    <div key={index} className='border-[1.5px] hover:border-green-500 transition-all cursor-pointer border-[#1E1E21] rounded-3xl'>
                        <div className='flex justify-between items-center p-6'>
                            <div className='flex gap-6 justify-start items-center'>
                                <p className='text-[#929292]'>{item.number}</p>
                                <p className='text-start text-[2.5rem]'>{item.title}</p>
                            </div>
                            <div>
                                <p className='uppercase bg-black/10 hover:bg-black transition-colors p-4 rounded-3xl'>{item.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GetUsBetter;

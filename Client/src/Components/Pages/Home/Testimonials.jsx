import React, { useEffect } from 'react';
import { FaQuoteLeft } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TestimonialsData } from '../../../Data/Data';

const Testimonials = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const testimonialsVariants = {
        hidden: { opacity: 0, y: 200 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    return (
        <div className='w-full h-full relative overflow-hidden'>
            <div className='md:px-16 max-sm:px-4 z-40 relative'>
                <div className='flex justify-start items-center gap-2'>
                    <div className='w-[20px] h-[6px] rounded-full bg-green-500'></div>
                    <p>Testimonials</p>
                </div>
                <div className='flex max-sm:flex-col md:justify-between items-center py-6'>
                    <div className='text-[2.5rem] leading-tight tracking-tighter md:w-[500px] flex justify-start max-sm:pb-4'>
                        <h1>Client Testimonials: Real Results, Real Feedback</h1>
                    </div>
                    <div className='md:w-[480px] md:text-[.9rem] text-[#929292] flex justify-end'>
                        <p>Nunc feugiat sit in ipsum facilisi eget volutpat quis magna. Nec consequat est volutpat ut sagittis volutpat egestas. Duis sit risus ut massa in faucibus elementum sed facilisi. Purus laoreet proin tristique pharetra nunc venenatis.</p>
                    </div>
                </div>
                <div ref={ref}>
                    <div className='flex flex-wrap justify-center gap-6 my-10'>
                        {TestimonialsData.map((test, index) => (
                            <motion.div
                                key={index}
                                className='md:w-[500px] flex flex-col justify-between gap-4 mb-10 relative'
                                initial='hidden'
                                animate={controls}
                                variants={testimonialsVariants}
                            >
                                <div className='flex justify-between max-sm:py-4'>
                                    <div className='text-[3rem]'>
                                        <FaQuoteLeft />
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <IoStar className='text-green-500' />
                                        ({test.rating}/5)
                                    </div>
                                </div>
                                <div>
                                    <q className='font-medium text-[1.6rem] text-justify'>{test.content}</q>
                                </div>
                                <div>
                                    <div className='flex justify-between items-center'>
                                        <div>
                                            <p className='text-[1.3rem]'>{test.name}</p>
                                            <p className='text-[#929292]'>{test.bio}</p>
                                        </div>
                                        <div>
                                            <img src={test.avatar} className='w-[50px] h-[50px] rounded-full' />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex justify-between md:gap-[100px] absolute md:top-[-600px] max-sm:top-[-1800px] left-0 right-0 bottom-0 '>
                <div className='absolute top-[50%] transform -translate-x-1/2 -translate-y-1/2'>
                    <div className='md:w-[300px] md:h-[300px] max-sm:w-[200px] max-sm:h-[200px] md:bg-green-500/40 bg-green-500 blur-[100px] rounded-full'></div>
                </div>
                <div className='absolute top-[50%] md:left-[950px] max-sm:left-[300px] transform md:translate-x-1/2 md:translate-y-1/2'>
                    <div className='md:w-[300px] md:h-[300px] max-sm:w-[200px] max-sm:h-[200px] md:bg-green-500/40 bg-green-500 blur-[100px] rounded-full'></div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;

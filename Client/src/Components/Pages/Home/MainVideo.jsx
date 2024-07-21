import React, { Suspense, useRef, useState } from 'react'
import { motion } from 'framer-motion';
import { FaPause, FaPlay } from 'react-icons/fa6';

const MainVideo = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const togglePlayButton = () => {
        if (isPlaying) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
        setIsPlaying(!isPlaying);
    };

    return (
       <div className='overflow-hidden'>
         <div className='md:py-20 max-sm:py-20 max-sm:px-4'>
            <div>
                <div className='flex justify-between md:gap-[500px]'>
                    <div className='relative left-[-30px] overflow-hidden w-full h-full'>
                        <img src="/herocorner2.png" className='md:w-[500px] md:h-[400px] max-sm:h-[300px] max-sm:w-[200px]' />
                    </div>
                    <div className='overflow-hidden w-full h-full max-sm:blur-[90px] md:blur-[200px]'>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className='relative max-sm:top-[60px] max-sm:left-[100px] md:left-[230px] md:w-64 md:h-64 max-sm:w-28 max-sm:h-28 z-30 bg-green-400 rounded-full '
                        />
                    </div>
                </div>
            </div>
            <div className='relative top-[130px]'>
                <div>
                    <div className='flex justify-center items-center'>
                        <div className='absolute top-[-400px] rounded-3xl border-[1px] border-green-500 md:p-6 max-sm:p-3'>
                            <Suspense fallback={<div>Loading Video...</div>} >
                                <video ref={videoRef} loop muted className='object-cover md:w-[900px] md:h-[400px] max-sm:h-[300px] rounded-3xl'>
                                    <source src="/Video3.mp4" preload='true' />
                                </video>
                            </Suspense>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button onClick={togglePlayButton} className="absolute  transition-opacity hover:bg-green-500 rounded-full w-16 h-16 flex items-center justify-center top-[-265px]">
                            {isPlaying ? (
                                <FaPlay className="text-white w-8 h-8" />
                            ) : (
                                <FaPause className="hover:text-white text-transparent w-8 h-8" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
};

export default MainVideo;

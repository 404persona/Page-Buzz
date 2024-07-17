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
        <div className='py-20'>
            <div>
                <div className='flex justify-between gap-[500px]'>
                    <div className='relative left-[-30px] overflow-hidden w-full h-full'>
                        <img src="/herocorner2.png" className='w-[500px] h-[400px]' />
                    </div>
                    <div className='overflow-hidden w-full h-full blur-[160px]'>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className='relative left-[230px] w-64 h-64 z-30 bg-green-400 rounded-full overflow-clip'
                        />
                    </div>
                </div>
            </div>
            <div className='relative'>
                <div>
                    <div className='flex justify-center items-center'>
                        <div className='absolute top-[-400px] rounded-3xl border-[1px] border-green-500 p-6'>
                          <Suspense fallback={<div>Loading Video...</div>} >
                          <video ref={videoRef} loop muted className='object-cover w-[900px] h-[400px] rounded-3xl'>
                                <source src="/Video3.mp4" preload='true' />
                            </video>
                          </Suspense>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button onClick={togglePlayButton} className="absolute  transition-opacity hover:bg-green-500 rounded-full w-16 h-16 flex items-center justify-center top-[-200px]">
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
    );
};

export default MainVideo;

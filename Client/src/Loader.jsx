import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const Loader = () => {
  const [counterComplete, setCounterComplete] = useState(false);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50"
      initial={{ transform: 'translateY(1000px)',backdropFilter:'blur(10px)'  }}
      animate={{ transform: 'translateY(0px)',backdropFilter:'blur(10px)' }}
      exit={{ transform: 'translateY(-100px)',backdropFilter:'blur(0px)' }}
      transition={{ duration: .5, ease: 'easeInOut' }}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="w-[170px] max-sm:w-[70px] h-screen bg-black"
              initial={{ y: '5000px' }}
              animate={{ y: '0px' }}
              exit={{ y: '-5000px', opacity: 1 }}
              transition={{
                duration: 1.5,
                ease: 'easeInOut',
                delay: i * 0.1,
              }}
            />
          ))}
          <div className="relative flex justify-end items-end">
            <CountUp
              className={`absolute right-[100px] max-sm:right-[100px] text-[#929292] py-6 font-semibold text-[4rem] max-sm:text-[2rem] transition-opacity duration-500 ${counterComplete ? 'opacity-0' : 'opacity-100'}`}
              start={70}
              end={100}
              duration={2.5}
              suffix="%"
              onEnd={() => setCounterComplete(true)}
              redraw={false}
            />
          </div>
        </div>
      </div>
      {/* PageBuzz Text in the Center */}
      <motion.div
      className="absolute flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl font-medium py-6"
      animate={{
        backgroundPosition: ['500% 100%', '100% 50%'], // Moves the gradient horizontally
      }}
      exit={{
        opacity:0
      }}
      transition={{
        duration: .3,
        ease: 'linear',
        opacity:0,
        // repeat: Infinity, // Loop the animation infinitely
      }}
      style={{
        backgroundImage: 'linear-gradient(to right, white, gray)',
        backgroundSize: '100% 100%', // Make the background large enough for smooth movement
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
      }}
    >
      PageBuzz
    </motion.div>

    </motion.div>
  );
};

export default Loader;

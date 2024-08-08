import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const Loader = () => {
  console.log('Loader component rendered'); // Debug log
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-transparent z-50"
      initial={{ transform: 'translateY(400px)', opacity: 0 }}
      animate={{ transform: 'translateY(0px)', opacity: 1 }}
      exit={{ transform: 'translateY(-1000px)', opacity: 0 }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="w-[170px] h-screen bg-black"
              initial={{ y: '600px' }}
              animate={{ y: '0px' }}
              exit={{ y: '-1000px', opacity: 0 }}
              transition={{
                duration: 1,
                ease: 'easeInOut',
                delay: i * 0.1,
              }}
            />
          ))}
          <div className="relative flex justify-end items-end">
            <CountUp className='absolute right-[100px] text-[#929292] py-6 font-semibold text-[4rem]' start={0} end={100} duration={5} suffix="%" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;

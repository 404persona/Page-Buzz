import React from 'react';
import { motion } from 'framer-motion';
import VideoPlayer from './VideoPlayer';
import { Herotext } from '../../../Data/Data';

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: .1,
        ease: [0.090, 0.515, 0.345, 1],
      }
    },
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="relative top-[-100px] pt-[230px] max-sm:pt-[300px]">
        <div className="absolute md:right-[200px] inset-0 z-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, ease: "easeIn" }}
            className="object-cover w-[300px] md:h-[250px] max-sm:w-[200px] max-sm:h-[200px] blur-[150px] bg-green-600"
          />
        </div>

        <div>
          <div className="flex items-center md:gap-6 max-sm:gap-2 justify-around">
            <div className="relative z-10 flex flex-col p-4 md:gap-4 max-sm:gap-4 text-white">
              <div className="flex items-center gap-1.5 max-sm:text-[.8rem]">
                <div className="w-[20px] h-[6px] bg-green-500 rounded-xl"></div>
                <p>PageBuzz</p>
              </div>
              <div className="md:text-[3rem] max-sm:text-[2.5rem] md:w-[500px] md:font-medium bg-clip-text text-transparent leading-tight bg-gradient-to-r from-white to-gray-500">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  // variants={textVariants}
                  className='overflow-hidden'
                >
                  {Herotext.map((text) => text.word).join(' ')}
                </motion.div>
              </div>
              <div className="md:w-[500px] md:text-justify md:leading-tight md:tracking-tight text-[#929292]">
                <p>Ready to make your brand a digital powerhouse? Pagebuzz is your key. We combine strategic digital marketing, expert SEO, and cutting-edge website development to elevate your online presence. Let us help you reach a wider audience, boost visibility, and drive real results. Together, we'll unlock your brand's full potential and dominate the digital landscape.  </p>
              </div>
              <div>
                <button className="border-[1px] border-[#1E1E21] uppercase p-2 rounded-2xl bg-[#1E1E21] hover:border-white hover:bg-transparent transition-all">Contact Us</button>
              </div>
            </div>
            <div className="z-10 max-sm:hidden">
              <VideoPlayer />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex justify-end inset-0 z-0 max-sm:hidden">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeIn" }}
          src="/herocorner2.png"
          className="object-cover h-[500px]"
        />
      </div>
    </div>
  );
};

export default Hero;

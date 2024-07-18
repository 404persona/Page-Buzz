import React from 'react';
import { Herotext } from "../../../Data/Data";
import { motion } from 'framer-motion';
import VideoPlayer from './VideoPlayer';

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, transform: 'translateY(100px)' },
    visible: (i) => ({
      opacity: 1,
      transform: 'translateY(0px)',
      transition: {
        delay: i * 0.2,
        duration: 1.5,
        ease: [0.090, 0.515, 0.345, 1],
      },
    }),
  };

  return (
    <div className=' h-screen '>
      <div className="relative top-[-100px] pt-[230px]   ">
        {/* Background div with images */}
        <div>
          <div className="absolute right-[200px] overflow-hidden inset-0 z-0 ">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.1, ease: "easeIn" }}
              // src="/herocorner.png"
              className="object-cover w-[300px] h-[250px] blur-[150px] bg-green-600"
            />
          </div>

          {/* Overlay text div */}
          <div className=''>
            <div className='flex items-center gap-6 justify-around'>
              <div className="relative z-10 flex flex-col p-4 gap-4 text-white ">
                <div className="flex items-center gap-1.5">
                  <div className="w-[20px] h-[6px] bg-green-500 rounded-xl"></div>
                  <p>PageBuzz</p>
                </div>
                <div className="text-[3rem] w-[500px] font-medium bg-clip-text text-transparent leading-tight bg-gradient-to-r from-white to-gray-500 overflow-hidden">
                  <motion.span
                    // initial="hidden"
                    // animate="visible"
                    // variants={textVariants}
                    // className='overflow-hidden'
                  >{Herotext.map((text) => text.word).join(' ')}</motion.span>
                </div>
                <div className='w-[500px] text-justify tracking-tight text-[#929292]'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aut nam aliquid tempore ex officia, odit inventore molestias sequi voluptatem exercitationem adipisci dignissimos, ullam consequuntur?</p>
                </div>
                <div>
                  <button className='border-[1px] border-[#1E1E21] uppercase p-2 rounded-2xl bg-[#1E1E21]' >Contact Us</button>
                </div>
              </div>
              <div className='z-10' >
                <div>
                  <VideoPlayer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex justify-end inset-0 z-0">
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

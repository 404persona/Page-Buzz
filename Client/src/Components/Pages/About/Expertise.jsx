import React, { useRef, useState, useEffect } from 'react';
import { GiDiamonds } from 'react-icons/gi';
import ProgressBar from "@ramonak/react-progress-bar";
import CountUp from 'react-countup';

const Expertise = () => {
  const [inView, setInView] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (observer && observer.unobserve) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <div className='md:px-28  md:py-8 md:mt-20'>
      <div className='flex max-sm:flex-col md:flex-row-reverse justify-between items-center md:gap-20'>
        <div className='flex  justify-center items-center md:w-[50%] max-sm:w-full h-[400px] max-sm:p-6 '>
          <div className='absolute'>
            <img src="/Secondbg.png" className='md:w-[550px] relative md:top-0  max-sm:w-[400px] max-sm:right-[0px] max-sm:h-[370px] md:right-[px] max-sm:top-[-5px]' />
          </div>
          <div className='relative flex justify-center items-center'>
            <img src="/Second2.png" className=' md:w-[400px] md:h-[400px] max-sm:w-[300px] max-sm:h-[300px] rounded-2xl' />
          </div>
        </div>
        <div className='md:w-[50%] p-2 max-sm:p-6  h-[400px] flex items-center'>
          <div className='flex flex-col gap-2 max-sm:pt-10' ref={counterRef}>
            <div className='flex items-center gap-2'>
              <div className='w-[20px] h-[6px] rounded-full bg-green-500' ></div>
              <p>Expertise</p>
            </div>
            <h2 className='md:text-[3rem] max-sm:text-[2.7rem] text-wrap  tracking-tighter leading-[1]'>Mastering the Art of Digital Solutions</h2>
            <p className='text-[#929292]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatem odit, quod totam rem distinctio aut est sint facilis! Consequatur?</p>
            <div>
              <div>
                <div>
                  <div className='py-2'>
                    <div className='flex justify-between px-1 py-2'>
                      <p className='text-[1.3rem]'>Client Satisfaction</p>
                      {inView && <p className='font-medium'><CountUp end={98} suffix='%' /></p>}
                    </div>
                    <ProgressBar
                      completed={98}
                      bgColor="#22c55e"
                      height="15px"
                      baseBgColor="#1E1E21"
                      isLabelVisible={false}
                      transitionDuration="2s"
                      animateOnRender
                      dir="auto"
                      maxCompleted={100}
                    />
                  </div>
                  <div className='py-2'>
                    <div className='flex justify-between px-1 py-2'>
                      <p className='text-[1.3rem]'>Project Completion Rate</p>
                      {inView && <p className='font-medium'><CountUp end={95} suffix='%' /></p>}
                    </div>
                    <ProgressBar
                      completed={95}
                      bgColor="#22c55e"
                      height="15px"
                      baseBgColor="#1E1E21"
                      isLabelVisible={false}
                      transitionDuration="2s"
                      animateOnRender
                      dir="auto"
                      maxCompleted={100}
                    />
                  </div>
                  <div className='py-2'>
                    <div className='flex justify-between px-1 py-2'>
                      <p className='text-[1.3rem]'>Campaign Success Rate</p>
                      {inView && <p className='font-medium'><CountUp end={90} suffix='%' /></p>}
                    </div>
                    <ProgressBar
                      completed={90}
                      bgColor="#22c55e"
                      height="15px"
                      baseBgColor="#1E1E21"
                      isLabelVisible={false}
                      transitionDuration="2s"
                      animateOnRender
                      dir="auto"
                      maxCompleted={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;

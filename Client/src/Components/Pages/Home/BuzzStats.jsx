import React, { useEffect, useState } from 'react';
import { StatsData } from './../../../Data/Data';

const Counter = ({ end, text, speed = 100 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < end) {
      const intervalId = setInterval(() => {
        setCount(prevCount => {
          if (prevCount + 1 >= end) {
            clearInterval(intervalId);
            return end;
          }
          return prevCount + 70;
        });
      }, speed);

      return () => clearInterval(intervalId);
    }
  }, [count, end, speed]);

  return (
    <div className="counter-card">
      <p>{count.toLocaleString()}<span className='text-green-500'>+</span> </p>
      {/* <p>{text}</p> */}
    </div>
  );
};



const BuzzStats = () => {
    return (
        <div className='md:py-20 max-sm:py-10'>
            <div>
                <div className='text-center'>
                    <h1 className='text-[3rem] bg-gradient-to-r from-white to-gray-600 text-transparent bg-clip-text font-medium'>Buzz Stats.</h1>
                </div>
                <div className="flex flex-wrap  justify-center items-center md:py-10 max-sm:py-8">
                    {StatsData.map((stats,index)=>(
                        <>
                        <div className='flex md:px-10 max-sm:p-4 justify-center'>
                            <div key={index} className='md:w-[500px] md:h-[250px] max-sm:w-[370px] flex flex-col justify-center gap-2 items-center hover:bg-[#1E1E21] md:p-4 rounded-3xl transition-all md:mb-4 max-sm:py-6 max-sm:px-4' >
                                <p className='text-[3rem] max-sm:text-[2rem]'><Counter end={stats.limit} /></p>
                                <p className='text-[1.8rem]'>{stats.title}</p>
                                <p className='text-[#929292] md:w-[400px] text-center' >{stats.text}</p>
                            </div>
                        </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BuzzStats;

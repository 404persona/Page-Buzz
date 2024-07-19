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
        <div className='py-20'>
            <div>
                <div className='text-center'>
                    <h1 className='text-[3rem] bg-gradient-to-r from-white to-gray-600 text-transparent bg-clip-text'>Buzz Stats.</h1>
                </div>
                <div className="flex flex-wrap justify-center items-center py-10">
                    {/* <Counter end={1200} text="Happy Clients" />
                    <Counter end={850} text="Projects Completed" />
                    <Counter end={1500} text="Campaigns Launched" /> */}
                    {/* <p end={400} >{Counter}</p> */}
                    {StatsData.map((stats,index)=>(
                        <>
                        <div className='flex px-10 justify-center '>
                            <div key={index}className='w-[500px] h-[250px] flex flex-col justify-center gap-2 items-center hover:bg-[#1E1E21] p-4 rounded-3xl transition-all mb-4' >
                                <p className='text-[3rem]'><Counter end={stats.limit} /></p>
                                <p className='text-[2rem]'>{stats.title}</p>
                                <p className='text-[#929292] w-[400px] text-center' >{stats.text}</p>
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

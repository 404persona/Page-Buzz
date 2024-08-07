import React from 'react'
import {Link} from 'react-router-dom'
const Error404 = () => {
  return (
    <div>
      <div className='md:p-12'>
        <div style={{
          backgroundImage: 'url(/AllPagesBg.png)',
          // backgroundSize : '100%'
        }} className='pt-[100px] py-20 z-40  '>
          <div className='relative top-0 flex justify-center'>
            <div className='absolute top-[-300px] z-0  bg-green-600/30 w-[400px] h-[400px] rounded-full blur-[100px]' ></div>
          </div>
          <div className=''>
            <div className='h-[350px] flex flex-col justify-center items-center'>
              <div className='leading-tight'>
              <h1 className='text-center text-[4rem] max-sm:text-[3rem] font-medium bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text'>Error 404</h1>
              <h2 className='text-[2rem] max-sm:text-[1.5rem]'>Something's Missing</h2>
              </div>
              <p className='text-center text-[.9rem] text-[#929292] md:px-36 py-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.reprehenderit maxime voluptates corporis praesentium ut ullam modi accusamus consequatur, eius magni voluptatem?</p>
              <div className='py-6'>
              <button className='uppercase p-3 max-sm:p-2 bg-green-500 rounded-3xl font-medium border-[1.5px] border-transparent hover:bg-transparent hover:border-green-500 transition-all'>
                <Link to='/'>back to homepage</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Error404
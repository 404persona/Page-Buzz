import React from 'react'
import { HelpCenterCardsData } from '../../../Data/Data'

const MidComponent = () => {
  return (
    <div>
      <div>
        <div className='flex flex-wrap justify-center items-center gap-10'>
          {HelpCenterCardsData.map((item, index) => (
            <div key={index} className='border-[1.5px] border-[#1E1E21] p-4 rounded-3xl'>
              <img src={item.image} className='rounded-3xl h-[300px] w-[350px] md:w-[450px] md:h-[350px]' />
              <div className='py-6 overflow-hidden'>
              <hr className='border-b-[2px] border-[#1E1E21]' />
              </div>
            <div className='flex justify-between items-center'>
            <h3 className='text-[1.2rem] md:text-[1.3rem] pb-6'>{item.title}</h3>
            <button className='bg-transparent border-[1px] rounded-3xl p-2'>See All</button>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MidComponent
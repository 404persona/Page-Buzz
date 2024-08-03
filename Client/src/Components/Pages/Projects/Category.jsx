import React from 'react'
import { CategoryData } from '../../../Data/Data'

const Category = () => {
  return (
    <div>
        
        <div className='flex flex-col justify-center items-center px-10 py-10'>
            <h2 className='text-[3rem] bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text font-medium'>Category</h2>
            <p className='px-36 text-center text-[#929292] text-[.9rem] leading-tight'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, animi. Culpa velit enim explicabo repellendus odit dicta quam aut et consequatur asperiores? Ex.</p>
        </div>
        <div className='flex flex-wrap justify-between mx-36  px-10 py-10'>
            {CategoryData.map((data,index)=>(
                <div key={index} className='my-6 border-[1.5px] p-4 rounded-3xl border-[#1E1E21]'>
                    <div>
                        <img src={data.image} className='object-cover rounded-3xl w-[350px] h-[300px]' />
                        <div className='flex justify-between items-end mt-8'>
                            <p>{data.title}</p>
                            <button className='border-[1px] rounded-3xl p-1 text-[.9rem]'>See All</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Category
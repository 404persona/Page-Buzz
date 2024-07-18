import React from 'react'

const FeaturedProjects = () => {
  return (
    <div className='py-20'>
        <div>
            <div className='flex flex-col gap-4 justify-center items-center'>
                <h1 className='text-[4rem] font-medium  bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text text-center'>Featured Projects</h1>
                <p className='text-[#929292] text-center w-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laboriosam id quam itaque magnam nemo natus in distinctio, alias asperiores!</p>
                <div className='bg-green-500 w-[100px] h-[100px] flex justify-center items-center rounded-full hover:bg-transparent border-[1px] border-green-500 transition-colors '>
                    <button className='font-medium leading-tight flex justify-center'>
                        SEE ALL
                    </button>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <h2>E-commerce Website Revamp</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProjects
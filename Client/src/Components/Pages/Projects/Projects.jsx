import React from 'react'
import FeaturedProjects from '../Home/FeaturedProjects'
import Category from './Category';

const Projects = () => {
  return (
    <div>
         <div className='md:p-12 z-10'>
        <div style={{
          backgroundImage: 'url(/AllPagesBg.png)',
        }} className='pt-[100px] py-20 z-40'>
          <div className='relative top-0 flex justify-center'>
            <div className='absolute top-[-300px] z-0  bg-green-600/30 w-[400px] h-[400px] rounded-full blur-[100px]' ></div>
          </div>
          <div>
            <div className='h-[300px] flex justify-center items-center'>
              <h1 className='text-[4rem] max-sm:text-[3rem] font-medium bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text'>Projects</h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <FeaturedProjects/>
      </div>
      <div>
        <Category/>
      </div>
    </div>
  )
}

export default Projects
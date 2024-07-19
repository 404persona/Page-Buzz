import React from 'react'
import { FeaturedProjectsData } from '../../../Data/Data'
import { FaArrowRight } from "react-icons/fa";
const FeaturedProject = ({ project }) => {
    return (
      <div className='px-10 py-6 z-40'>
         <div className='p-10 rounded-3xl border-[2px] border-[#1E1E21]'>
        <div className='flex justify-between px-10 py-4 items-center'>
            <div className="flex flex-col gap-6 ">
                <h2 className='text-[2rem] w-[500px] leading-tight'>{project.title}</h2>
                <p className='text-[#929292] w-[400px]'>{project.content}</p>

                <div className="project-buttons flex gap-4">
                    {Object.values(project.buttons).map((button) => (
                        <button key={button.text} className='border-[1.5px] border-white rounded-full p-2 ' >{button.text}</button>
                    ))}

                </div>
                <div className='relative left-[10px]'>
                    <FaArrowRight className='text-[2rem]' />
                </div>
            </div>
            <div>
                <img src={project.image} alt={project.title} className='w-[410px] h-[340px] rounded-3xl object-cover' />
            </div>
        </div>
       </div>
      </div>
    );
};

const FeaturedProjects = () => {
    return (
        <div className='relative'>
            <div className='absolute inset-0 top-[300px] flex justify-center'>
                <div className='bg-green-500/70 blur-[300px] rounded-full h-[400px] w-[400px] z-0'></div>
            </div>
            <div className="relative featured-projects z-10">
                {FeaturedProjectsData.map((project) => (
                    <FeaturedProject key={project.title} project={project} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedProjects;


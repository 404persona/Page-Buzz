import React from 'react'
import { FeaturedProjectsData } from '../../../Data/Data'
import { FaArrowRight } from "react-icons/fa";
const FeaturedProject = ({ project }) => {
    return (
      <div className='px-10 py-6'>
         <div className='p-10 rounded-3xl border-[2px] border-[#1E1E21]'>
        <div className='flex justify-between px-10 py-4 items-center'>
            <div className="flex flex-col gap-6 ">
                <h2 className='text-[2rem] w-[500px] leading-tight'>{project.title}</h2>
                <p className='text-[#929292] w-[400px]'>{project.content}</p>

                <div className="project-buttons">
                    {Object.values(project.buttons).map((button) => (
                        <button key={button.text} className='border-[1.5px] border-white rounded-full p-2 mx-2' >{button.text}</button>
                    ))}

                </div>
                <div className='relative left-[20px]'>
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
        <div className="featured-projects">
            {FeaturedProjectsData.map((project) => (
                <FeaturedProject key={project.title} project={project} />
            ))}
        </div>
    );
};

export default FeaturedProjects;
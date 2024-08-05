import React from 'react'
import { FeaturedProjectsData } from '../../../Data/Data'
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const FeaturedProject = ({ project }) => {
    const navigate = useNavigate();
  

    const handleClick = (slug) => {
      navigate(`/projects/${slug}`);
    };
    return (
        <div className='md:px-10 py-6 max-sm:px-5 z-40 '>
            <div className='md:p-10 rounded-3xl max-sm:p-1 border-[2px] border-[#1E1E21]' onClick={()=> handleClick(`${project.slug}`)} >
                <div className='flex max-sm:flex-col-reverse justify-between md:px-10 max-sm:px-2 py-4 items-center '>
                    <div className="flex flex-col md:gap-6 mt-8 max-sm:gap-4  max-sm:p-4">
                        <h2 className='text-[2rem] max-sm:text-[1.9rem] md:w-[500px] leading-tight text-start'>{project.title}</h2>
                        <p className='text-[#929292] md:w-[400px]'>{project.content}</p>

                        <div className="project-buttons flex max-sm:flex-wrap max-sm:justify-center max-sm:gap-3 md:gap-4">
                            {Object.values(project.buttons).map((button) => (
                                <button key={button.text} className='border-[1.5px] border-white rounded-full md:p-2 max-sm:p-1 max-sm:text-[.9rem]' >{button.text}</button>
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
        <div className='relative overflow-hidden'>
            <div className='absolute inset-0 md:top-[300px] max-sm:top-[800px] flex justify-center'>
                <div className='bg-green-500/70 blur-[300px] rounded-full md:h-[400px] md:w-[400px] max-sm:w-[300px] max-sm:h-[300px] z-0'></div>
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


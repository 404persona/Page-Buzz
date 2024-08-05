import React from 'react'
import { useParams } from 'react-router-dom';
import { FeaturedProjectsData, HowItWorksData } from '../../../../Data/Data'
import HowItWorks from './../../Services/HowItWorks';

const ProjectDetail = () => {
    const { slug } = useParams();
    const project = FeaturedProjectsData.find(s => s.slug === slug);

    if (!project) {
        return <div className='text-center py-[300px] text-[4rem] max-sm:text-[2.5rem] font-medium bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text'>Projects not found</div>;
    }
    return (
        <div>
            <div className='z-0'>
                <div className='flex justify-between md:gap-[100px] absolute md:top-[-600px] max-sm:top-[800px] left-0 right-0 bottom-0 '>
                    <div className='absolute top-[170%] transform -translate-x-1/2 -translate-y-1/2'>
                        <div className='md:w-[400px] md:h-[400px] max-sm:w-[200px] max-sm:h-[200px] md:bg-green-500/40 bg-green-500 blur-[100px] rounded-full'></div>
                    </div>
                    {/* <div className='absolute top-[50%] md:left-[950px] max-sm:left-[300px] transform md:translate-x-1/2 md:translate-y-1/2'>
                    <div className='md:w-[300px] md:h-[300px] max-sm:w-[200px] max-sm:h-[200px] md:bg-green-500/40 bg-green-500 blur-[100px] rounded-full'></div>
                </div> */}
                </div>
            </div>
            <div className='p-12'>
                <div style={{
                    backgroundImage: 'url(/AllPagesBg.png)',
                }} className='pt-[100px] py-20 z-40'>
                    <div className='relative top-0 flex justify-center'>
                        <div className='absolute top-[-300px] z-0  bg-green-600/30 w-[400px] h-[400px] rounded-full blur-[100px]' ></div>
                    </div>
                    <div>
                        <div className='h-[300px] flex justify-center items-center'>
                            <h1 className='text-[4rem] max-sm:text-[2.5rem] font-medium bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text'>Project Details</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='z-10 py-14 relative' >
                <div className='px-16'>
                    <div className=' flex justify-evenly gap-16'>
                        <div>
                            <h2 className='text-[2.5rem] leading-tight pb-2'>{project.details.title}</h2>
                            <div className='text-[#929292]'>
                                <p>{project.details.content1}</p>
                                <br />
                                <p>{project.details.content2}</p>
                            </div>

                        </div>
                        <div>
                            <div className=' border-[1.5px] border-[#1E1E21] p-8  rounded-3xl px-10 '>
                                <div className='font-medium py-3 w-[180px]'>
                                    <hr className='border-bottom-[1.5px] border-[#1E1E21] py-1' />
                                    Client:<br /><span className='text-[#929292] font-normal '>{project.ProjectsData.Client}</span>
                                </div>
                                <div className='font-medium py-3'>
                                    <hr className='border-bottom-[1.5px] border-[#1E1E21] py-3' />
                                    Date:<br /><span className='text-[#929292] font-normal'>{project.ProjectsData.date}</span>
                                </div>
                                <div className='font-medium py-3'>
                                    <hr className='border-bottom-[1.5px] border-[#1E1E21] py-1' />
                                    Services:<br /><span className='text-[#929292] font-normal'>{project.ProjectsData.Services}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center py-6'>
                        <img src={project.details.banner} className='h-[480px] w-[1920px] object-center object-cover rounded-3xl' />
                    </div>
                    {/* Cards Below Banner  */}
                    <div className='py-10 flex gap-10 justify-center flex-wrap'>
                        <div className='overflow-hidden p-10 border-[1.5px] border-[#1E1E21] rounded-3xl w-[40%]'>

                            <div className=''>
                                <h3 className='text-[2rem]'>{project.details.list1}</h3>
                                <div className='py-4'>
                                    <hr className='w-screen relative  right-[100px] border-[#1E1E21]' />
                                </div>
                                <div className='flex justify-center items-center'>
                                    <div className='details text-[#929292] leading-tight text-[.9rem]' dangerouslySetInnerHTML={{ __html: project.details.list1details }}></div>
                                </div>
                            </div>
                        </div>
                        <div className='overflow-hidden p-10 border-[1.5px] border-[#1E1E21] rounded-3xl w-[40%]'>

                            <div className=''>
                                <h3 className='text-[2rem]'>{project.details.list2}</h3>
                                <hr className='w-screen relative right-[100px] my-4 border-[#1E1E21]' />
                                <div className='details text-[#929292] leading-tight text-[.9rem]' dangerouslySetInnerHTML={{ __html: project.details.list2details }}></div>
                            </div>
                        </div>
                        <div className='overflow-hidden p-10 border-[1.5px] border-[#1E1E21] rounded-3xl w-[40%]'>

                            <div className=''>
                                <h3 className='text-[2rem]'>{project.details.list3}</h3>
                                <hr className='w-screen relative right-[100px] my-4 border-[#1E1E21]' />
                                <div className='details text-[#929292] leading-tight text-[.9rem]' dangerouslySetInnerHTML={{ __html: project.details.list3details }}></div>
                            </div>
                        </div>
                        <div className='overflow-hidden p-10 border-[1.5px] border-[#1E1E21] rounded-3xl w-[40%]'>

                            <div className=''>
                                <img src={project.details.projectPreview} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <HowItWorks />
        </div>
    )
}

export default ProjectDetail
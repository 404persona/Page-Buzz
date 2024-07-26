import React from 'react'
import { OurTeamData } from '../../../Data/Data'

const OurTeam = () => {
    return (
        <>
            <div className='relative md:top-[500px] flex justify-center z-0'>
                {/* Green background element with added class */}
                <div className='absolute top-0 bg-green-600/60 w-[400px] h-[400px] rounded-full blur-[200px] green-background'></div>
            </div>
            <div className='md:py-20 max-sm:py-10 relative max-sm:top-[100px]'>

                <div className='flex flex-col justify-center items-center'>
                    <h1 className='md:text-[4rem] max-sm:text-[3rem] py-6 bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text'>Our Team</h1>
                    <p className='text-[#929292] text-center md:w-[900px] w-[400px]'>Orci at id enim eu pellentesque habitant. Ut at diam suscipit amet id cursus id blandit. Consectetur maecenas id vivamus integer integer aliquam. Donec amet rhoncus ut turpis massa augue faucibus.</p>
                </div>
                <div className='md:py-10 z-10'>
                    <div>
                        <div>
                            <div className='flex flex-wrap justify-center items-center gap-10'>
                                {OurTeamData.map((data, index) => (
                                    <>
                                        <div key={index} className='border-[1.5px] rounded-3xl flex flex-col p-6 border-[#1E1E21]'>
                                            <div>
                                                <img src={data.dp} alt={data.position} className='w-[400px] h-[300px] rounded-3xl object-cover' />
                                            </div>
                                            <div className='flex justify-between items-center py-4'>
                                                <div>
                                                    <div className='text-[1.4rem]'>{data.name}</div>
                                                    <div className='text-[.9rem] text-[#929292]'>{data.position}</div>
                                                </div>
                                                <div className='border-[1px] border-white rounded-2xl py-1 px-2'><a href={data.linkedIn} >LinkedIn</a></div>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default OurTeam
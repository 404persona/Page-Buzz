import React from 'react'
import { ServiceBenefitsData } from '../../../../Data/Data'

const ServiceBenefits = () => {
    return (
        <div>
            <div className='px-20 max-sm:px-6 py-10'>
                <div>
                    <div className='bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text text-center'>
                        <h2 className='text-[3rem] max-sm:text-[2.7rem] font-medium'>Service Benefits</h2>
                    </div>
                    <div className='px-6 max-sm:px-4'>
                        <p className='py-3 text-[#929292] max-sm:text-[.9rem] md:text-center max-sm:text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officiis commodi doloribus corporis itaque assumenda temporibus debitis ullam odit necessitatibus ducimus accusamus, iure ab soluta molestias quod amet ipsam laudantium.</p>
                    </div>
                </div>
                <div className='flex flex-wrap gap-10 justify-center py-10 '>
                    {
                        ServiceBenefitsData.map((benefit, index) => (
                            <div key={index} className='border-[1.5px] border-[#1E1E21] flex flex-wrap justify-start items-center rounded-3xl hover:border-green-500 transition-all cursor-pointer'>
                                <div className='p-6 w-[300px]'>
                                    <h3 className='text-[1.3rem]'>{benefit.title}</h3>
                                    <p className='text-[#929292] text-[.9rem]' >{benefit.content}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                
            </div>
        </div>
    )
}

export default ServiceBenefits
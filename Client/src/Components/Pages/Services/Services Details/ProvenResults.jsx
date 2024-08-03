import React from 'react'
import { ProvenResultsCardsData } from '../../../../Data/Data'

const ProvenResults = () => {
    return (
        <div className='py-20'>
            <div>
                <h2 className='text-[3rem]'>Proven Results Across Various Industries</h2>
            </div>
            <div className='flex flex-wrap justify-center gap-10 py-10'>
                {ProvenResultsCardsData.map((card, index) => (
                    <div key={index} className='flex'>
                        <div
                            style={{
                                backgroundImage: `url(${card.bgImage})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                objectFit: 'cover',
                            }}
                            className='w-[350px] h-[300px] rounded-3xl flex justify-start items-end relative cursor-pointer'
                        >
                            <div className='overlay absolute top-0 left-0 w-full h-full bg-black/20 hover:bg-black/40 transition-all z-1 rounded-3xl'></div>
                            <p className='ml-6 mb-4 z-10 text-[1.2rem] font-medium'>{card.title}</p>

                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default ProvenResults
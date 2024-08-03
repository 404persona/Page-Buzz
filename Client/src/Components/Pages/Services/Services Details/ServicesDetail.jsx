import React from 'react';
import { useParams } from 'react-router-dom';
import { ServicesData } from '../../../../Data/Data';
import ProvenResults from './ProvenResults';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = ServicesData.find(s => s.slug === slug);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div >
        <div className='md:p-12 z-10'>
        <div style={{
          backgroundImage: 'url(/AllPagesBg.png)',
        }} className='pt-[100px] py-20 z-40'>
          <div className='relative top-0 flex justify-center'>
            <div className='absolute top-[-300px] z-0  bg-green-600/30 w-[400px] h-[400px] rounded-full blur-[100px]' ></div>
          </div>
          <div>
            <div className='h-[300px] flex justify-center items-center'>
              <h1 className='text-[4rem] max-sm:text-[3rem] font-medium bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text'>Services Details</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='px-14 py-14'>
      <div className='flex gap-20'>
      <div>
        <h2 className='md:text-[2.2rem] text-wrap leading-tight'>{service.FirstTitle}</h2>
        <div className='text-[#929292]'>
        <p className='py-2'>{service.content1}</p>
        <p>{service.content2}</p>
        </div>
        <br />
        <h2 className='text-[2.2rem] leading-tight'>{service.SecondTitle}</h2>
        <div className='details leading-loose  md:px-10 max-sm:px-4 text-[#929292]' dangerouslySetInnerHTML={{ __html: service.content3 }} />
      </div>
      {/* This Block has to linked to the Meeting Page for Contact  */}
      <div>
        <div className='border-[1.5px] border-[#1E1E21] rounded-3xl p-10 w-[350px] '>
            <div className='flex flex-col justify-center gap-6'>
                <h3 className='text-[1.2rem] text-center font-semibold'>Ready to Transform Your Digital Presence?</h3>
                <button className='uppercase text-white bg-green-500 rounded-3xl p-2 border-[1.5px] border-green-500 hover:border-green-500 transition-all hover:bg-transparent'>talk to an expert</button>
            </div>
        </div>
      </div>
      </div>
      <div>
        <ProvenResults/>
      </div>
      </div>
    </div>
  );
};

export default ServiceDetail;

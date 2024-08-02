import React from 'react'
import Hero from './Hero'
import { GiDiamonds } from "react-icons/gi";
import Second from './Second';
import Services from './OurServices';
import MainVideo from './MainVideo';
import WhyCUS from './WhyCUS';
import FeaturedProjects from './FeaturedProjects';
import BuzzStats from './BuzzStats';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className='flex justify-center items-center md:gap-6 max-sm:gap-2   py-4 max-sm:text-[.8rem] max-sm:px-4 max-sm:flex-wrap '>
        <div>
          <p>Award-Winning Strategies</p>
        </div>
        <div>
          <GiDiamonds className='text-green-500 md:text-[1.5rem]' />
        </div>
        <div className='max-sm:hidden'>
          <p>1,000+ Successful Campaigns Delivered</p>
        </div>
        <div className='max-sm:hidden'>
        <GiDiamonds className='text-green-500 md:text-[1.5rem]' />
        </div>
        <div>
          <p>98% Client Satisfaction Rate</p>
        </div>
        <div className='md:hidden'>
          <p>1,000+ Successful Campaigns Delivered</p>
        </div>
      </div>
      <div>
        <Second/>
      </div>
      <div>
        <Services/>
      </div>
      <div>
        <MainVideo/>
      </div>
      <div>
        <WhyCUS/>
      </div>
      <div>
        <FeaturedProjects/>
      </div>
      <div>
        <BuzzStats/>
      </div>
      <div>
        <Testimonials/>
      </div>
    </div>
  )
}

export default Home
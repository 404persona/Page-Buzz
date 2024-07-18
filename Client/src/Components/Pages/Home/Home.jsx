import React from 'react'
import Hero from './Hero'
import { GiDiamonds } from "react-icons/gi";
import Second from './Second';
import Services from './Services';
import MainVideo from './MainVideo';
import WhyCUS from './WhyCUS';
import FeaturedProjects from './FeaturedProjects';

const Home = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className='flex justify-center items-center gap-6 py-3'>
        <div>
          <p>Award-Winning Strategies</p>
        </div>
        <div>
          <GiDiamonds className='text-green-500 text-[1.5rem]' />
        </div>
        <div>
          <p>1,000+ Successful Campaigns Delivered</p>
        </div>
        <div>
        <GiDiamonds className='text-green-500 text-[1.5rem]' />
        </div>
        <div>
          <p>98% Client Satisfaction Rate</p>
        </div>
        {/* <div>
        <GiDiamonds className='text-green-500 text-[1.5rem]' />
        </div> */}
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
    </div>
  )
}

export default Home
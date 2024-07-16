import React, { useEffect, useRef, useState } from 'react'
import { NavLinks } from './../../Data/Data';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const textVariants = {
  hidden: { opacity: 0, transform: 'translateY(30px)' },
  visible: (i) => ({
    opacity: 1,
    transform: 'translateY(0px)',
    transition: {
      delay: i * 0.13, // Check if delay values are logged here (optional)
      duration: .9,
      ease: [0.090, 0.515, 0.345, 1],
    },
  }),
};
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className='fixed w-[100%] z-50'>
      <div className='my-4 mx-4'>
        <nav ref={navbarRef} className={`bg-black/30 rounded-3xl backdrop-blur-sm flex  justify-between px-20 items-center py-4 transition-all ${isScrolled ? 'bg-black/30' : 'bg-transparent backdrop-blur-0'}`}>
          <div>
            <Link to='/'>
              <h1 className='uppercase text-3xl font-medium bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text'>pagebuzz</h1>
            </Link>
          </div>
          <div>
            <ul>
              <li className="flex gap-6">
                {NavLinks.map((links, index) => (
                  <Link className='uppercase font-medium overflow-hidden ' to={links.href} >
                    <motion.p
                      key={index}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={textVariants}
                      className="overflow-hidden transition-all"
                    >{links.label}</motion.p>
                  </Link>
                ))}
              </li>
            </ul>
          </div>
          <div>
            <button className='border-[1px] border-[#1E1E21] uppercase p-2 rounded-2xl bg-[#1E1E21] px-3 font-medium' >Email Us</button>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header
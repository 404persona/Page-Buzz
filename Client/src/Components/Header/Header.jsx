import React, { useEffect, useRef, useState } from 'react';
import { NavLinks } from './../../Data/Data';
import { Link, Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const textVariants = {
  hidden: { opacity: 0, transform: 'translateY(100px)' },
  visible: (i) => ({
    opacity: 1,
    transform: 'translateY(0px)',
    transition: {
      delay: i * 0.13,
      duration: 0.9,
      ease: [0.090, 0.515, 0.345, 1],
    },
  }),
};
const textVariantsMobile = {
  hidden: { opacity: 0, transform: 'translateY(100px)' },
  visible: (i) => ({
    opacity: 1,
    transform: 'translateY(0px)',
    transition: {
      delay: i * .189,
      duration: 1.5,
      ease: [0.090, 0.515, 0.345, 1],
    },
  }),
};

const menuVariants = {
  hidden: { opacity: 0, transform: 'translateY(100px)' },
  visible: (i) => ({
    opacity: 1,
    transform: 'translateY(0px)',
    transition: {
      delay: i * 0.13,
      duration: .6,
      ease: [0.090, 0.515, 0.345, 1],
    },
  }),
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <div className='fixed w-full z-50'>
      <div className='my-4 mx-4'>
        <nav
          ref={navbarRef}
          className={`bg-black/30 backdrop-blur-sm rounded-3xl flex justify-between px-4 md:px-20 items-center py-4 transition-all ${
            isScrolled ? 'bg-black/30' : 'bg-transparent backdrop-blur-0'
          }`}
        >
          <div>
            <Link to='/'>
              <h1 className='uppercase text-3xl font-medium bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text'>
                pagebuzz
              </h1>
            </Link>
          </div>
          <div className='hidden md:flex'>
            <ul className='overflow-hidden'>
              <li className="flex gap-6">
                {NavLinks.map((links, index) => (
                  <Link key={index} className='uppercase font-medium overflow-hidden' to={links.href}>
                    <motion.p
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={textVariants}
                      className="overflow-hidden transition-all"
                    >
                      {links.label}
                    </motion.p>
                  </Link>
                ))}
              </li>
            </ul>
          </div>
          <div className='hidden md:flex'>
            <button className='border-[1px] border-[#1E1E21] uppercase p-2 rounded-2xl bg-[#1E1E21] px-3 font-medium'>
              Email Us
            </button>
          </div>
          <div className='md:hidden'>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='z-50'>
              {isMenuOpen ? <FaTimes className='w-6 h-6 text-white' /> : <FaBars className='w-6 h-6 text-white' />}
            </button>
          </div>
        </nav>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="fixed top-0 left-0 w-screen h-screen bg-black/50 backdrop-blur-sm z-40 flex flex-col items-center"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className='absolute top-4 right-4 z-50'
            >
              <FaTimes className='w-6 h-6 text-white overflow-hidden' />
            </button>
            <ul className='flex flex-col items-center py-4 my-auto  overflow-hidden'>
              {NavLinks.map((links, index) => (
                <Link
                  key={index}
                  className='uppercase font-medium py-4  text-[2.5rem] overflow-hidden'
                  to={links.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <motion.p
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={textVariantsMobile}
                    className="overflow-hidden transition-all"
                  >
                    {links.label}
                  </motion.p>
                </Link>
              ))}
              <button className='border-[1px] border-[#1E1E21] uppercase p-2 rounded-2xl bg-[#1E1E21] px-6 py-4 font-medium mt-4'>
                Email Us
              </button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      {/* <Outlet /> */}
    </div>
  );
}

export default Header;

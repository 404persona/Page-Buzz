import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";
import { motion, AnimatePresence } from 'framer-motion';
import {AccordationData} from "../../../Data/Data"


const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const variants = {
    open: { opacity: 1, height: 'auto' },
    collapsed: { opacity: 0, height: 0 },
  };
  

  return (
    <div className="">
      <button
        className={`w-full text-left p-4 flex justify-between items-center  transition-all rounded-3xl my-8 ${isOpen ?  'border-[1.5px] border-green-500 rounded-3xl' : ''} `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-[1.3rem] font-medium ${isOpen ? 'text-white' : 'text-white'}`}>
          {title}
        </span>
       <div className='bg-white text-black rounded-full p-2 font-normal'>
       {isOpen ? <IoIosArrowUp  className="text-green-400 transition-transform" /> : <IoIosArrowDown />}
       </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease:'linear' }}
            className="overflow-hidden"
          >
            <div className="p-4 text-gray-300">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Accordion = () => {
  

  return (
    <div className="max-w-3xl mx-auto mt-10  rounded-lg ">
      {AccordationData.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;

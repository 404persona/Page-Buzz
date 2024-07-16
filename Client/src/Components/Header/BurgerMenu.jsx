    // // BurgerMenu.jsx

    // import React from 'react';
    // import { SlideTransition } from 'react-burger-menu'; // Import SlideTransition

    // const menuItems = [ // Define your menu items here
    //   { href: '/', label: 'Home' },
    //   { href: '/about', label: 'About' },
    //   { href: '/contact', label: 'Contact' },
    // ];

    // const BurgerMenu = ({ isOpen, onClose }) => {
    //   return (
    //     <SlideTransition isOpen={isOpen} onOverlayClick={onClose}>
    //       {(state) => (
    //         <div className={`fixed top-0 left-0 right-0 bottom-0 z-50 overflow-y-auto bg-gray-800 bg-opacity-50 transition duration-300 ease-in-out ${
    //           state.isOpen ? '' : 'hidden'
    //         }`}>
    //           <nav className="fixed top-0 left-0 w-full h-full max-w-sm bg-white z-60 shadow-xl p-4">
    //             <button className="absolute top-4 right-4 text-white focus:outline-none" onClick={onClose}>
    //               <svg className="h-5 w-5" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                 <path d="M50 50L70.7107 29.2893C72.9973 27.0027 76.884 27.0027 79.1707 29.2893L100 50L79.1707 70.7107C76.884 73 72.9973 73 70.7107 70.7107L50 50Z" fill="currentColor" />
    //               </svg>
    //             </button>
    //             <ul className="space-y-2">
    //               {menuItems.map((item, index) => (
    //                 <li key={index}>
    //                   <a href={item.href} className="block text-lg font-medium text-gray-700 hover:text-gray-900">
    //                     {item.label}
    //                   </a>
    //                 </li>
    //               ))}
    //             </ul>
    //           </nav>
    //         </div>
    //       )}
    //     </SlideTransition>
    //   );
    // };

    // export default BurgerMenu
    import React from 'react'

    const BurgerMenu = () => {
    return (
        <div>
            
        </div>
    )
    }

    export default BurgerMenu
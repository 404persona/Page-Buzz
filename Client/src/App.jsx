import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './Components/Header/Header';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Services from './Components/Pages/Services/Services';
import Footer from './Components/Footer/Footer';
import ServicesDetail from './Components/Pages/Services/Services Details/ServicesDetail';
import Projects from "./Components/Pages/Projects/Projects";
import './App.css';
import ScrollToTop from './ScrollToTop';
import ProjectDetail from './Components/Pages/Projects/Projects Details/ProjectDetail';
import Pricing from './Components/Pages/Pricing/Pricing';
import HelpCenter from './Components/Pages/HelpCenter.jsx/HelpCenter';
import Contact from './Components/Pages/Contact/Contact';
import Email from './Components/Pages/Email/Email';
import Error404 from './Components/Pages/Error/Error404';
import Loader from './Loader';

const AppContent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [nextLocation, setNextLocation] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (nextLocation) {
      console.log('Next location set, starting loader');
      setIsLoading(true);
      const timer = setTimeout(() => {
        console.log('Timeout completed, navigating to next location');
        setIsLoading(false);
        navigate(nextLocation.pathname);
        setNextLocation(null);
      }, 4000); // Adjust duration to match your loader animation
      return () => clearTimeout(timer);
    }
  }, [nextLocation, navigate]);

  useEffect(() => {
    console.log('Route changed, setting loading to true');
    setIsLoading(true);
    const timer = setTimeout(() => {
      console.log('Timeout completed, setting loading to false');
      setIsLoading(false);
    }, 2000); // Adjust duration to match your loader animation
    return () => clearTimeout(timer);
  }, [location]);

  const handleNavigation = (nextLoc) => {
    if (!isLoading) {
      setNextLocation(nextLoc);
    }
  };

  return (
    <div className="custom-scrollbar">
      <Header />
      <AnimatePresence>
        {isLoading && <Loader />}
      </AnimatePresence>
      <Routes location={isLoading ? location : nextLocation || location}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/:slug' element={<ServicesDetail />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:slug' element={<ProjectDetail />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/help-center' element={<HelpCenter />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/email' element={<Email />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
};

const App = () => (
  <Router>
    <ScrollToTop />
    <AppContent />
  </Router>
);

export default App;

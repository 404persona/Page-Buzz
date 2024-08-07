import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="custom-scrollbar">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/services/:slug' element={<ServicesDetail />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:slug' element={<ProjectDetail />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/help-center' element={<HelpCenter />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/email' element={<Email/>} />
          <Route path='*' element={<Error404/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

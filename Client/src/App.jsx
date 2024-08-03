import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Services from './Components/Pages/Services/Services';
import Footer from './Components/Footer/Footer';
import ServicesDetail from './Components/Pages/Services/Services Details/ServicesDetail';
import Projects from "./Components/Pages/Projects/Projects"
import './App.css';
import ScrollToTop from './ScrollToTop';



const App = () => {
  return (
    <Router>
      <div className="custom-scrollbar">
        <Header />
        
          <Routes>
            {/* <ScrollToTop/> */}
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route  path='/services/:slug' element={<ServicesDetail/>}/>
            <Route path='/projects' element={<Projects/>} />
          </Routes>
     
        <Footer />
      </div>
    </Router>
  );
};

export default App;

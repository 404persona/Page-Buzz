import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Services from './Components/Pages/Services/Services';
import Footer from './Components/Footer/Footer';
import ServicesDetail from './Components/Pages/Services/Services Details/ServicesDetail';
import './App.css';



const App = () => {
  return (
    <BrowserRouter>
      <div className="custom-scrollbar">
        <Header />
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route  path='/services/:slug' element={<ServicesDetail/>}/>
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

import React from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import About from './Components/Pages/About/About';
import Layout from './Layout';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    
    <div className='custom-scrollbar'>
        <Layout>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        
      </Layout>
    </div>
  );
};

export default App;

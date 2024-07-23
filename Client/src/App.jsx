import React from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import About from './Components/Pages/About/About';
import Layout from './Layout';
import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
// Import a loading component

const App = () => {
  return (
    <BrowserRouter>
      <div className="custom-scrollbar">
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            {/* Add more routes as needed */}
            {/* <Route path="*" element={<Loading />} /> Fallback route */}
          </Route>
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;

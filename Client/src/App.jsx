import React from 'react'
import Header from './Components/Header/Header'
import Home from './Components/Pages/Home/Home'
import './App.css'
import Footer from './Components/Footer/Footer'
import { Outlet, Route, Routes } from 'react-router-dom'
import About from './Components/Pages/About/About'
// import Preloader from "./PreLoader/Preloader"

const App = () => {
  return (
    <>
      <div className='custom-scrollbar'>
        <Header />
        {/* <Outlet/> */}
        <Footer />
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route  path='/about-us' element={<About/>} />
      </Routes>
    </>
  )
}

export default App
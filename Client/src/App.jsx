import React from 'react'
import Header from './Components/Header/Header'
import Home from './Components/Pages/Home/Home'
import './App.css'
import Footer from './Components/Footer/Footer'
import { Outlet, Route, Router, Routes } from 'react-router-dom'
import About from './Components/Pages/About/About'
import { Analytics } from "@vercel/analytics/react"
import Layout from './Layout';

const App = () => {
  return (
    <div className='custom-scrollbar'>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
import React from 'react'
import Header from './Components/Header/Header'
import Home from './Components/Pages/Home/Home'
import  './App.css'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div className='custom-scrollbar'>
      <Header />
      <Home/>
      <Footer />
    </div>
  )
}

export default App
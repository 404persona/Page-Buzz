import React from 'react'
import Header from './Components/Header/Header'
import Home from './Components/Pages/Home/Home'
import  './App.css'

const App = () => {
  return (
    <div className='custom-scrollbar'>
      <Header />
      <Home/>
    </div>
  )
}

export default App
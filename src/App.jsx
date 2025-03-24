import React from 'react'
import Navbar from './components/Navbar'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import Portfolio from './components/Portafolio';


const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Duración de las animaciones (en milisegundos)
  }, []);



  return (
    <div className='bg-gray-300'>

      <Navbar/>

      <Portfolio />
    </div>
  )
}

export default App
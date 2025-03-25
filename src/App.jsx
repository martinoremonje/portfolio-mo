import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import LanguageDependentComponent from './components/LanguagePortfolio';
import {LanguageProvider} from './context/LanguageContext'



const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Duración de las animaciones (en milisegundos)
  }, []);



  return (
    <div className='bg-gray-300'>
      
      
      <LanguageProvider>
      <Navbar/>

<LanguageDependentComponent />


<Footer />

      </LanguageProvider>
      
      
    </div>
  )
}

export default App
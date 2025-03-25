import React from 'react'
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import spainFlag from '../assets/spain.png'
import unitedStateFlag from '../assets/united-states.png'


const ButtonLanguage = () => {

    const { toggleLanguage, language } = useContext(LanguageContext);

  return (
    <button className="ml-[-57px] mt-[25px] transition-transform duration-200 transform-gpu hover:scale-110" onClick={toggleLanguage}>{language === 'es' ? (<img src={spainFlag} title="spain icons" style={{ width: '30px', height: '25px' }}/>) : (<img src={unitedStateFlag} title="united states icons" style={{ width: '30px', height: '25px' }}/>)}</button>
  )
}

export default ButtonLanguage
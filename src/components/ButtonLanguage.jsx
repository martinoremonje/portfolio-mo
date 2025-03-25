import React from 'react'
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import spainFlag from '../assets/spain.png'
import unitedStateFlag from '../assets/united-states.png'


const ButtonLanguage = () => {

    const { toggleLanguage, language } = useContext(LanguageContext);

  return (
    <button style={{marginLeft:'-57px', marginTop:'25px'}} onClick={toggleLanguage}>{language === 'es' ? (<img src={spainFlag} title="spain icons" style={{ width: '30px', height: '25px' }}/>) : (<img src={unitedStateFlag} title="united states icons" style={{ width: '30px', height: '25px' }}/>)}</button>
  )
}

export default ButtonLanguage
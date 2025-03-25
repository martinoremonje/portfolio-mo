import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext'
import Portfolio from './Portafolio'
import PortfolioEn from './PortafolioEn'

const LanguageDependentComponent = () => {
  const { language } = useContext(LanguageContext);
  return language === 'en' ? <PortfolioEn /> : <Portfolio />;
};

export default LanguageDependentComponent;
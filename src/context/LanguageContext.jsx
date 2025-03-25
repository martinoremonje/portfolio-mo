import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Idioma por defecto

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'es' ? 'en' : 'es'));
    console.log(language)
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
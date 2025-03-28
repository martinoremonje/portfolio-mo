import React from "react";
import programadorImg from '../assets/programador.png';
import image from '../assets/pexels-njeromin-19872371.jpg';
import ButtonLanguage from "./ButtonLanguage";
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Navbar = () => {
  const { language } = useContext(LanguageContext);

  return (
    <nav
      id="homes"
      className="fixed top-0 w-full bg-gray-600 text-white py-4 shadow-md z-50" // Se agrego z-50
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex text-lg font-bold mb-2 md:mb-0">
          <img title="Hi there ;)" className="rounded-full h-12 w-12" src={programadorImg} alt="icon" />
          <span className="ml-1">{language === 'en' ? 'Welcome' : '¡Saludos!'}</span>
          <ButtonLanguage />
        </div>
        <ul className="flex flex-row space-x-3 md:space-x-6 items-center">
          <li className="mb-2 md:mb-0">
            <a
              href="#home"
              className="hover:text-blue-300 transition duration-200"
            >
              Home
            </a>
          </li>
          <li className="mb-2 md:mb-0">
            <a
              href="#certificates"
              className="hover:text-blue-300 transition duration-200"
            >
              Certificates
            </a>
          </li>
          <li className="mb-2 md:mb-0">
            <a
              href="#about"
              className="hover:text-blue-300 transition duration-200"
            >
              About Me
            </a>
          </li>
          <li className="mb-2 md:mb-0">
            <a
              href="#contact"
              className="hover:text-blue-300 transition duration-200"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
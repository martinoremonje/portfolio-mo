import React from "react";
import programadorImg from '../assets/programador.png';
import { FaReact } from 'react-icons/fa'; // React
import { SiJavascript, SiNextdotjs, SiMongodb, SiTypescript, SiPostgresql } from 'react-icons/si';



const Footer = () => {
  return (
    <nav className="bg-black text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold"><img className="h-12 w-12" src={programadorImg} alt="icon" /></div>
        <div className="flex space-x-5">
    <FaReact style={{ color: 'blue', fontSize: '2rem' }} />
    <SiJavascript style={{ color: 'yellow', fontSize: '2rem' }} />
    <SiNextdotjs style={{ color: 'white', fontSize: '2rem' }} />
    <SiMongodb style={{ color: 'green', fontSize: '2rem' }} />
    <SiTypescript style={{ color: 'blue', fontSize: '2rem' }} />
    <SiPostgresql style={{ color: 'blue', fontSize: '2rem' }} />
  </div>

        
        <ul className="flex space-x-6">
          <li>
            <a
              href="#home"
              className="hover:text-blue-300 transition duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#certificates"
              className="hover:text-blue-300 transition duration-200"
            >
              Certificados
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-blue-300 transition duration-200"
            >
              About Me
            </a>
          </li>
          <li>
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

export default Footer;
import React from "react";
import programadorImg from '../assets/programador.png';
import { FaReact } from 'react-icons/fa';
import { SiJavascript, SiNextdotjs, SiMongodb, SiTypescript, SiPostgresql } from 'react-icons/si';

const Footer = () => {
  return (
    <nav className="bg-black text-white py-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="text-lg font-bold mb-2 md:mb-0">
          <img className="h-12 w-12" src={programadorImg} alt="icon" />
        </div>
        <div className="flex space-x-5 mb-2 md:mb-0">
          <FaReact style={{ color: 'blue', fontSize: '2rem' }} />
          <SiJavascript style={{ color: 'yellow', fontSize: '2rem' }} />
          <SiNextdotjs style={{ color: 'white', fontSize: '2rem' }} />
          <SiMongodb style={{ color: 'green', fontSize: '2rem' }} />
          <SiTypescript style={{ color: 'blue', fontSize: '2rem' }} />
          <SiPostgresql style={{ color: 'blue', fontSize: '2rem' }} />
        </div>
        
      </div>
    </nav>
  );
};

export default Footer;
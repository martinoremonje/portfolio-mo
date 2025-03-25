import React from "react";
import programadorImg from '../assets/programador.png';
import image from '../assets/pexels-njeromin-19872371.jpg';
import ButtonLanguage from "./ButtonLanguage";

const Navbar = () => {
  return (
    <nav id="home" className="bg-gray-600 text-white py-4 shadow-md" style={{
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex text-lg font-bold mb-2 md:mb-0">
          <img className="rounded-full h-12 w-12" src={programadorImg} alt="icon" />
          <span className="ml-1">Welcome!</span>
          <ButtonLanguage   />
        </div>
        <ul className="flex flex-col md:flex-row space-x-0 md:space-x-6 items-center">
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
              Certificados
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
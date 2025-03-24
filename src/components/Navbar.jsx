import React from "react";
import programadorImg from '../assets/programador.png';
import image from '../assets/pexels-njeromin-19872371.jpg';

const Navbar = () => {
  return (
    <nav className="bg-gray-600 text-white py-4 shadow-md" style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex text-lg font-bold"><img className="rounded-full h-12 w-12" src={programadorImg} alt="icon" /><span className="ml-1">Welcome!</span></div>
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
              href="#certificados"
              className="hover:text-blue-300 transition duration-200"
            >
              Certificados
            </a>
          </li>
          <li>
            <a
              href="#about-me"
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

export default Navbar;
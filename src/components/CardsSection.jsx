import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import urlapp from '../assets/url-short.png';
import todoapp from '../assets/todoApp.png';
import shapp from '../assets/superhero.png';
import w3 from '../assets/w3.jpg';
import { LanguageContext } from '../context/LanguageContext';

const CardsSection = () => {

    const  {language} = useContext(LanguageContext)

    return (
        <section
            id="proyects"
            className="bg-gray-500 min-h-screen flex items-center justify-center px-4 md:px-8"
            style={{
                backgroundImage: `url(${w3})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="flex flex-wrap justify-center flex-col md:flex-row md:items-start"> {/* Contenedor para las cards */}
                <motion.div
                    data-aos="fade-up"
                    className="w-80 h-96 rounded-xl shadow-lg m-4 cursor-pointer bg-gray-100"
                    whileHover={{
                        scale: 1.05,
                        rotateX: -5,
                        rotateY: 5,
                        z: 50,
                        transition: { duration: 0.3 },
                    }}
                    style={{ perspective: 600 }}
                >
                    <a href="https://react-udemy-firebase-8652e.web.app/login">
                        <img
                            src={urlapp}
                            alt="https://react-udemy-firebase-8652e.web.app/login"
                            className="w-full h-48 object-cover rounded-t-xl"
                        />
                    </a>
                    <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">URL shorter</h3>
                        <p className="text-gray-600">
                           {language === 'es' ? 'Acorta tus urls para redes sociales o uso personal, sirve como base de datos con ingreso de usuarios' : 'A URL shortening and management app, ideal for social media and personal URL tracking.'} 
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    data-aos="fade-up"
                    className="w-80 h-96 rounded-xl shadow-lg m-4 cursor-pointer bg-gray-100"
                    whileHover={{
                        scale: 1.05,
                        rotateX: -5,
                        rotateY: 5,
                        z: 50,
                        transition: { duration: 0.3 },
                    }}
                    style={{ perspective: 600 }}
                >
                    <a href="https://martinostareas.netlify.app/">
                        <img
                            src={todoapp}
                            alt="https://martinostareas.netlify.app/"
                            className="w-full h-48 object-cover rounded-t-xl"
                        />
                    </a>
                    <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">Simple Todo App</h3>
                        <p className="text-gray-600">
                        {language === 'es' ? 'Una app para las tareas diarias, simple y con modo oscuro por defecto' : ' A daily task management app with robust features and a sleek dark mode.'} 
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    data-aos="fade-up"
                    className="w-80 h-96 rounded-xl shadow-lg m-4 cursor-pointer bg-gray-100"
                    whileHover={{
                        scale: 1.05,
                        rotateX: -5,
                        rotateY: 5,
                        z: 50,
                        transition: { duration: 0.3 },
                    }}
                    style={{ perspective: 600 }}
                >
                    <a href="https://martinoremonje.github.io/Encuentra-tu-SuperHero-MO/">
                        <img
                            src={shapp}
                            alt="https://martinoremonje.github.io/Encuentra-tu-SuperHero-MO/"
                            className="w-full h-48 object-cover rounded-t-xl"
                        />
                    </a>
                    <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">Super Hero App</h3>
                        <p className="text-gray-600">
                        {language === 'es' ? 'Una simple base de datos de villanos y heroes, llamada desde una API' : 'A comprehensive database search tool for superheroes and villains, powered by an external API.'}  
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CardsSection;
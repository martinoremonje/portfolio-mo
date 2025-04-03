import programadorImg from '../assets/programador.png';
import superheroImg from '../assets/certificadoBootcamp.png';
import river from '../assets/river.jpg';
import insignia from '../assets/insignia.png';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope  } from 'react-icons/fa';
import { motion } from "motion/react"
import CardsSection from "./CardsSection"



const PortfolioEn = () => {
  return (
    <div className="min-h-screen">
      <section
        id="home"
        className="min-h-screen bg-gray-300 flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-8 lg:px-35"
        
        style={{
          backgroundImage: `url(${river})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        
        <img
        data-aos="fade-up"
          src={programadorImg}
          alt="Martin IMG"
          className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full mb-4 md:mb-0"
        />
        {/* <h1
          data-aos-delay="500"
          className="text-white text-2xl md:text-4xl font-bold underline text-center md:text-left"
        >
          Fullstack Developer | Web Designer
        </h1> */}
        <motion.div className="bg-amber-300 text-center text-2xl md:text-4xl p-4 rounded-lg shadow-md w-full md:w-3/4 lg:w-2/3 mx-auto"  initial={{ boxShadow: "0px 0px #000" }}

animate={{ boxShadow: "10px 10px #000" }} transition={{ duration: 2 }}>Fullstack Developer | Web Designer</motion.div>
      </section>

      {/* Sección About */}
      <section
        id="about"
        className="mt-1 mx-2 min-h-screen bg-gray-100 flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-8"
        
      >
       
        
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }} className='mensaje-comic'><p className="text-lg md:text-xl max-w-lg mb-4 md:mb-0">
      Hello! My name is Martin Orellana and I am a fullstack web developer.
      I specialize in Javascript and use Node, Express, React, MongoDb, SQL and Typescript to create web pages with both Frontend and Backend.
    </p></motion.div>
        
    <a data-aos="fade-right" href="https://desafiosdev.s3.amazonaws.com/uploads/certification/image/565/aprobacion-final-td8-g68-m10-desarrollo-de-aplicaciones-full-stack-javascript-trainee-v2-0-desarrollo-de-empleabilidad-en-la-industria-digital-ele030792068087-375(2).png" target="_blank" rel="noopener noreferrer">
  <div className="transition-transform hover:scale-102">
    <img
      src={superheroImg}
      alt="Superhero IMG"
      className="rounded-2xl w-full md:w-150 h-auto"
    />
  </div>
</a>
      </section>

      {/* Sección Certificates */}
      <section
        id="certificates"
        className="mx-2 min-h-screen bg-gray-50 flex flex-col md:flex-row items-center justify-center md:justify-around px-4 md:px-8"
        
      >
        <img
        data-aos="fade-left"
          src={insignia}
          alt="Insignia IMG"
          className="rounded-2xl w-full md:w-130 h-auto mb-4 md:mb-0"
        />
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Certificates</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <a href="https://www.acreditta.com/credential/cd07f906-5bd4-4424-a954-87ff634ff493?utm_source=linkedin_profile&resource_type=badge&resource=cd07f906-5bd4-4424-a954-87ff634ff493">
                BOOTCAMP FULL STACK JAVASCRIPT APPLICATION DEVELOPMENT TRAINEE
              </a>
            </li>
            <li>
              <a href="https://www.udemy.com/certificate/UC-d4877a13-f82b-447e-93ff-efed00299161/">
                React and Next.js Course: Learn Frontend and Backend FullStack
              </a>
            </li>
            <li>
              <a href="https://desafiosdev.s3.amazonaws.com/uploads/certification/image/565/aprobacion-final-td8-g68-m10-desarrollo-de-aplicaciones-full-stack-javascript-trainee-v2-0-desarrollo-de-empleabilidad-en-la-industria-digital-ele030792068087-375(2).png">
                Full Stack Javascript Application Development Trainee
              </a>
            </li>
            <li>
              <a href="https://sqlinteractivo.desafiolatam.com/certificados/685e5192-557a-4279-b6a5-109bbb51dd5e">
                Interactive SQL
              </a>
            </li>
            <li>
              <a href="https://www.udemy.com/certificate/UC-d289abb7-989d-4720-8ad4-9f383f3cde3e/">
                Git, GitHub, GitLab and GitHub Copilot: Repository Usage
              </a>
            </li>
            <li>
              <a href="https://www.udemy.com/certificate/UC-a940e831-9611-4483-a2a0-40c4ba5e326d/">
                Web Development University - FrontEnd Web Developer!
              </a>
            </li>
            <li>
              <a href="https://cert.efset.org/oi5sET">
                EFSET English Certificate 82/100 (C2 Proficient)
              </a>
            </li>
          </ul>
        </div>
      </section>
      <CardsSection/>
      {/* Sección Contacto */}
      <section
  id="contact"
  className="min-h-screen bg-gray-20 flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-8"
>
<div data-aos="fade-right" className="bg-white rounded-lg p-4 relative contact-message  lg:ml-[20vw] border-2 border-black">
  <h2 className="text-2xl md:text-3xl font-semibold mb-4">Contact</h2>
  <ul className="list-none ml-5 space-y-2">
    <li><FaEnvelope style={{ color: '#0078D4', fontSize: '2rem' }} /> m.monjeorellana@gmail.com</li>
    <li><FaWhatsapp style={{ color: '#25D366', fontSize: '2rem' }} /> +56 944011200</li>
    <li>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/martin-orellana-monje/"
        style={{ whiteSpace: 'nowrap' }}
      >
        <FaLinkedin style={{ color: '#0077B5', fontSize: '2rem' }} />
      </a>
    </li>
    <li>
      <a href="https://github.com/martinoremonje?tab=repositories">
        <FaGithub style={{ color: 'black', fontSize: '2rem' }} />
      </a>
    </li>
  </ul>
  
</div>

  <motion.div
    className="bg-amber-300 text-center text-xl md:text-3xl mt-7 p-3 rounded-lg shadow-md w-full  md:w-1/6 lg:w-1/8 mx-auto"
    initial={{ boxShadow: '0px 0px #000' }}
    animate={{ boxShadow: '10px 10px #000' }}
    whileHover={{ scale: 1.2 }}
  >
    :)
  </motion.div>
</section>


    </div>
  );
};

export default PortfolioEn;
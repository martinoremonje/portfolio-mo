import programadorImg from '../assets/programador.png';
import superheroImg from '../assets/Screenshot_1.png';
import river from '../assets/river.jpg';
import insignia from '../assets/insignia.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Corregido: Importación de framer-motion

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <section
        id="homes"
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
        <motion.div
          className="bg-amber-300 text-center text-2xl md:text-4xl p-4 rounded-lg shadow-md w-full md:w-3/4 lg:w-2/3 mx-auto"
          initial={{ boxShadow: '0px 0px #000' }}
          animate={{ boxShadow: '10px 10px #000' }}
          transition={{ duration: 2 }}
        >
          Desarrollador Fullstack | Diseñador Web
        </motion.div>
      </section>

      {/* Sección Acerca de */}
      <section
        id="about"
        className="mt-1 mx-2 min-h-screen bg-gray-100 flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-8"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mensaje-comic"
        >
          <p className="text-lg md:text-xl max-w-lg mb-4 md:mb-0">
            ¡Hola! Mi nombre es Martín Orellana y soy un desarrollador web
            fullstack. Me especializo en Javascript y uso Node, Express, React,
            MongoDb, SQL y Typescript para crear páginas web con Frontend y
            Backend.
          </p>
        </motion.div>
        <div data-aos="fade-right">
          <img
            src={superheroImg}
            alt="Superhero IMG"
            className="rounded-2xl w-full md:w-150 h-auto"
          />
        </div>
      </section>

      {/* Sección Certificados */}
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
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Certificados</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <a href="https://www.acreditta.com/credential/cd07f906-5bd4-4424-a954-87ff634ff493?utm_source=linkedin_profile&resource_type=badge&resource=cd07f906-5bd4-4424-a954-87ff634ff493">
                BOOTCAMP DESARROLLO DE APLICACIONES FULL STACK JAVASCRIPT TRAINEE
              </a>
            </li>
            <li>
              <a href="https://www.udemy.com/certificate/UC-d4877a13-f82b-447e-93ff-efed00299161/">
                Curso de React y Next.js: Aprende Frontend y Backend FullStack
              </a>
            </li>
            <li>
              <a href="https://desafiosdev.s3.amazonaws.com/uploads/certification/image/565/aprobacion-final-td8-g68-m10-desarrollo-de-aplicaciones-full-stack-javascript-trainee-v2-0-desarrollo-de-empleabilidad-en-la-industria-digital-ele030792068087-375(2).png">
                Desarrollo de Aplicaciones Full Stack Javascript Trainee
              </a>
            </li>
            <li>
              <a href="https://sqlinteractivo.desafiolatam.com/certificados/685e5192-557a-4279-b6a5-109bbb51dd5e">
                SQL Interactivo
              </a>
            </li>
            <li>
              <a href="https://www.udemy.com/certificate/UC-d289abb7-989d-4720-8ad4-9f383f3cde3e/">
                Git, GitHub, GitLab y GitHub Copilot: Uso de Repositorios
              </a>
            </li>
            <li>
              <a href="https://www.udemy.com/certificate/UC-a940e831-9611-4483-a2a0-40c4ba5e326d/">
                Universidad de Desarrollo Web - ¡Desarrollador Web FrontEnd!
              </a>
            </li>
            <li>
              <a href="https://cert.efset.org/oi5sET">
                Certificado de Inglés EFSET 82/100 (C2 Proficiente)
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Sección Contacto */}
      <section
        id="contact"
        className="min-h-screen bg-gray-20 flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-8"
      >
        <div data-aos="fade-right">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Contacto</h2>
          <ul className="list-none ml-5 space-y-2">
            <li>Email: m.monjeorellana@gmail.com</li>
            <li>Teléfono: +56 944011200</li>
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
          className="bg-amber-300 text-center text-xl mt-1.5 md:text-3xl p-3 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/3 mx-auto"
          initial={{ boxShadow: '0px 0px #000' }}
          animate={{ boxShadow: '10px 10px #000' }}
          whileHover={{ scale: 1.2 }}
        >
          No hagas clic aquí
        </motion.div>
      </section>
    </div>
  );
};

export default Portfolio;
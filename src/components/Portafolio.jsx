import programadorImg from '../assets/programador.png';
import superheroImg from '../assets/Screenshot_1.png';
import river from '../assets/river.jpg';

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      {/* Sección Home */}
      <section
        id="home"
        className="min-h-screen bg-gray-300 flex flex-col md:flex-row items-center justify-between px-8"
        style={{
          backgroundImage: `url(${river})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <img
          src={programadorImg}
          alt="Martin IMG"
          className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full mb-4 md:mb-0"
        />
        <h1
          data-aos-delay="500"
          className="text-white text-2xl md:text-4xl font-bold text-center"
        >
          Desarrollador Fullstack | Web Designer
        </h1>
      </section>

      {/* Sección About */}
      <section
        id="about"
        className="mx-2 min-h-screen bg-gray-100 flex flex-col md:flex-row items-center justify-between px-8"
      >
        <p
          data-aos="fade-right"
          className="text-lg md:text-xl max-w-lg text-center md:text-left mb-4 md:mb-0"
        >
          ¡Hola! Me llamo Martin Orellana y soy un desarrollador web fullstack.
          Me especializo en el lenguaje de Javascript y utilizo Node, Express,
          React, MongoDb, SQL y Typescript para crear páginas web tanto con Frontend
          como con Backend.
        </p>
        <img
          src={superheroImg}
          alt="Superhero IMG"
          className="rounded-2xl w-48 h-auto md:w-60"
        />
      </section>

      {/* Sección Certificates */}
      <section
        id="certificates"
        className="mx-2 min-h-screen bg-gray-50 flex flex-col items-start justify-center px-8"
      >
        <div data-aos="fade-left">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center md:text-left">
            Certificados
          </h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Bootcamp en Talento Digital</li>
            <li>Certificación React</li>
          </ul>
        </div>
      </section>

      {/* Sección Contacto */}
      <section
        id="contacto"
        className="min-h-screen bg-gray-20 flex flex-col md:flex-row items-center justify-between px-8"
      >
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center md:text-left">
            Contacto
          </h2>
          <ul className="list-disc ml-5 space-y-2 text-center md:text-left">
            <li>Email: m.monjeorellana@gmail.com</li>
            <li>Celular: +56 44011200</li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/martin-orellana-monje/"
                style={{ whiteSpace: 'nowrap' }}
              >
                Linkedin: www.linkedin.com/in/martin-orellana-monje
              </a>
            </li>
            <li>
              <a href="">Github: https://github.com/martinoremonje?tab=repositories</a>
            </li>
          </ul>
        </div>
        <div
          className="tenor-gif-embed md:mt-0 mt-4"
          data-postid="25845145"
          data-share-method="host"
          data-aspect-ratio="1"
          data-width="30%"
          style={{ minWidth: '300px', marginLeft: '1rem' }}
        >
          <a href="https://tenor.com/view/email-email-marketing-glockapps-email-tool-gif-25845145">
            GIF de Email Marketing
          </a>
        </div>
        <script
          type="text/javascript"
          async
          src="https://tenor.com/embed.js"
        />
      </section>
    </div>
  );
};

export default Portfolio;
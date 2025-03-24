import programadorImg from '../assets/programador.png';
import superheroImg from '../assets/Screenshot_1.png';
import river from '../assets/river.jpg';

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      {/* Sección Home */}
      <section
        id="home"
        className="min-h-screen bg-gray-300 flex items-center justify-between px-35"
        data-aos="fade-up"
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
          className="w-48 h-48 object-cover rounded-full"
        />
        <h1
          data-aos-delay="500"
          className="text-white text-4xl font-bold"
        >
          Desarrollador Fullstack | Web Designer
        </h1>
      </section>

      {/* Sección About */}
      <section
        id="about"
        className="mx-2 min-h-screen bg-gray-100 flex items-center justify-between px-8"
        data-aos="fade-right"
      >
        <p
          className="text-xl max-w-lg"
        >
          ¡Hola! Me llamo Martin Orellana y soy un desarrollador web fullstack.
          Me especializo en el lenguaje de Javascript y utilizo Node, Express,
          React, MongoDb, SQL y Typescript para crear páginas web tanto con Frontend
          como con Backend.
        </p>
        <img
          src={superheroImg}
          alt="Superhero IMG"
          className="rounded-2xl w-150 h-auto"
        />
      </section>

      {/* Sección Certificates */}
      <section
        id="certificates"
        className="mx-2 min-h-screen bg-gray-50 flex flex-col items-start justify-center px-8"
      >
        <div data-aos="fade-left">
          <h2 className="text-3xl font-semibold mb-4">Certificados</h2>
          <ul className="list-disc ml-5">
            <li>Bootcamp en Talento Digital</li>
            <li>Certificación React</li>
          </ul>
        </div>
      </section>

      {/* Sección Contacto */}
      <section
        id="contacto"
        className="min-h-screen bg-gray-20 flex items-center justify-between px-8"
        data-aos="fade-right"
      >
        <div>
          <h2 className="text-3xl font-semibold mb-4">Contacto</h2>
          <ul className="list-disc ml-5 space-y-2">
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
          className="tenor-gif-embed"
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
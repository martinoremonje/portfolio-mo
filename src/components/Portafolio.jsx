import programadorImg from '../assets/programador.png';
import superheroImg from '../assets/Screenshot_1.png';


const Portfolio = () => {
    return (
      <div className='mx-2'>
        <section id="home" className="min-h-screen bg-gray-300 flex items-center justify-center">
        <img src={programadorImg} alt="Martin IMG" className="w-48 h-48 object-cover" />
          <h1 data-aos="fade-up" className="text-4xl font-bold">
          Desarrollador Fullstack | Web Designer
          </h1>
        </section>
  
        <section id="about" className="min-h-screen bg-gray-100 flex items-center justify-center">
          <p data-aos="fade-right" className="text-2xl">
          ¡Hola! Me llamo Martin Orellana y soy un desarrollador web fullstack.
                    Me especializo en el lenguaje de Javascript y utilizo Node, Express, React, MongoDb, SQL y Typescript 
                    para crear paginas web tanto con FrontEnd como con Backend.
          </p>
          <img   src={superheroImg} className='w-194 h-154' alt="superHeroIMG" />
        </section>
  
        <section id="certificates" className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div data-aos="fade-left">
            <h2 className="text-3xl font-semibold">Certificados</h2>
            <ul className="list-disc ml-5">
              <li>Bootcamp en Talento Digital</li>
              <li>Certificación React</li>

            </ul>
          </div>
        </section>
        <section id="contacto" className="min-h-screen bg-gray-20 flex items-center justify-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-semibold">Contacto</h2>
            <ul className="list-disc ml-5">
              <li>Email: m.monjeorellana@gmail.com</li>
              <li>Celular: +56 44011200</li>
            <li>Linkdin: <a target='_blank' href="https://www.linkedin.com/in/martin-orellana-monje/">www.linkedin.com/in/martin-orellana-monje</a></li>
            </ul>
          </div>
        </section>
      </div>
    );
  };
  
  export default Portfolio;
  
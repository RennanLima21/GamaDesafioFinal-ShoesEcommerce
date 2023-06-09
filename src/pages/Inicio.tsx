import { Link } from 'react-router-dom';
import '../styles/inicio.css';

import image1 from '../assets/images/carousel/foto1.png';
import image2 from '../assets/images/carousel/foto2.jpg';
import image3 from '../assets/images/carousel/foto3.jpeg';
import image4 from '../assets/images/carousel/foto4.jpg';

export const Inicio = () => {
  return (
    <div className="footer">
      <section className="home-container">
        <h1>
          Bem-vindo ao <span>gama.Shoes</span>
        </h1>
        <p>Comece a pisar com estilo gama de ser.</p>
        <Link to={'/Produtos'}>
          <button className="btn-inicio">Ver Produtos gama</button>
        </Link>  
              <div className="c-container">
                <div className="carousel">
                  <div className="image">
                  <img className='image-img' src={image1} alt="" />
                  <img className='image-img' src={image2} alt="" />
                  <img className='image-img' src={image3} alt="" />
                  <img className='image-img' src={image4} alt="" />
                  </div>
                </div>
              </div>
      </section>
    </div>
  );
};

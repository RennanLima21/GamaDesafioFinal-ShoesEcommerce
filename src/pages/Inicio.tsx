import logo from 'assets/images/logo1.png';
import '../styles/inicio.css';

export const Inicio = () => {
  return (
    <div className="footer">
      <section className="home-container">
        <h1>
          Bem-vindo ao <span>gama.Shoes</span>
        </h1>
        <p>Comece a pisar com estilo gama de ser.</p>
        <a href="/">
          <button className="btn-inicio">Ver Produtos gama</button>
        </a>
        <div className="carousel">
          <div className="item">
            <img src="" alt="Shoe" />
          </div>
          <div className="info">
            <span className="name">Shuper Shoe1</span>
            <span className="oldPrice">R$ 299,00</span>
            <span className="price">R$ 199,00</span>
          </div>
        </div>
      </section>
    </div>
  );
};

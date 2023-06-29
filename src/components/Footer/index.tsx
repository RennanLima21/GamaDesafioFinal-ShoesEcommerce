import React from 'react';
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si';

import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          <h3 className="footer-title">GamaShoes</h3>
          <p className="footer-description">
            Envie um Presente e
            <br />
            proporcione alegria
          </p>
        </div>
        <div className="footer-content">
          <h3 className="footer-title">Nossos Serviços</h3>
          <ul>
            <li className="footer-link">Presente</li>
            <li className="footer-link">Desconto</li>
            <li className="footer-link">Frete</li>
          </ul>
        </div>
        <div className="footer-content">
          <h3 className="footer-title">Quem Somos</h3>
          <ul>
            <li className="footer-link">Blog</li>
            <li className="footer-link">Sobre nós</li>
            <li className="footer-link">Nossa Missão</li>
          </ul>
        </div>
        <div className="footer-content">
          <h3 className="footer-title">Social</h3>
          <SiGithub className="social" />
          <SiInstagram className="social" />
          <SiLinkedin className="social" />
        </div>
      </div>
      <p className="footer-copy">&#169; 2023 Grupo 3. All right reserved</p>
    </footer>
  );
};

export default Footer;

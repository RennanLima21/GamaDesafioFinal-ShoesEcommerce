import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { RootState } from 'store';
import { useAppSelector } from 'hooks';
import logo from 'assets/images/logo1.png';
import './header.css';

const Header = () => {
  const estadoCarrinho = useAppSelector((state: RootState) => state.carrinhoReducer);
  const itensNoCarrinho = estadoCarrinho.carrinho.length;
  return (
    <header className="container-header">
      <img className="img-logo" src={logo} alt="logo" /><MdOutlineShoppingCart className="social" />
      <nav className="container-nav">
        <Link to="/" className="link-header">
          <button className="btn">Home</button>
        </Link>
        <Link to="/Produtos" className="link-header">
          <button className="btn">Produtos</button>
        </Link>
        <Link to="/carrinho" className="link-header">
          {' '}
          {' '}
          <button className="btn"><MdOutlineShoppingCart className="img-carrinho" />({itensNoCarrinho})</button>{' '}
        </Link>
        <Link to="/Login" className="link-header">
          <button className="btn">Login</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;

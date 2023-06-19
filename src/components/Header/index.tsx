import React from 'react';
import { Link } from 'react-router-dom';



import { RootState } from 'store';
import { useAppSelector } from 'hooks';
import logo from "assets/images/logo1.png"
import './header.css'

const Header = () => {
  const estadoCarrinho = useAppSelector((state: RootState) => state.carrinhoReducer);
  const itensNoCarrinho = estadoCarrinho.carrinho.length;
  return (
    <header className='container-header'>
      <img src={logo} alt="logo" />
      <nav className='container-nav'>
        <Link to="/" className='link-header'>Home</Link>
        <Link to="/Produtos" className='link-header'>Comprar</Link>
        <Link to="/carrinho" className='link-header'>Carrinho ({itensNoCarrinho})</Link>
        <Link to="/Login" className='link-header'>Login</Link>
      </nav>
    </header>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { RootState } from 'store';
import { useAppDispatch, useAppSelector } from 'hooks';
import logo from 'assets/images/logo1.png';
import './header.css';
import { spawn } from 'child_process';
import { logout } from 'store/modules/usuario';

const Header = () => {
  const dispatch = useAppDispatch();
  const estadoCarrinho = useAppSelector((state: RootState) => state.carrinhoReducer);
  const itensNoCarrinho = estadoCarrinho.carrinho.length;

  const estadoAutenticacao = useAppSelector((state: RootState) => state.authReducer);

  const escondePedidoLogin = estadoAutenticacao.usuario ? false : true;
  const escondeAdm = estadoAutenticacao.usuario?.isAdmin === true ? false : true;
  
  return (
    <header className="container-header">
      <Link to="/" className="link-header">
        <img className="img-logo" src={logo} alt="logo" />
      </Link>
      <nav className="container-nav">
        <Link to="/" className="link-header">
          <button className="btn">Home</button>
        </Link>
        <Link to="/PainelAdm">
            <button className='btn'>Adm {escondeAdm}</button>
        </Link>
        <Link to="/Pedidos" hidden={escondePedidoLogin}>
            <button className='btn'>Pedidos</button>
        </Link>
        <Link to="/Produtos" className="link-header">
            <button className="btn">Produtos</button>
        </Link>
        <Link to="/carrinho" className="link-header">
                  {' '}
            <button className="btn">
              <MdOutlineShoppingCart className="img-carrinho" />({itensNoCarrinho})
            </button>{' '}
        </Link>
        <Link to="/" className="link-header" hidden={escondePedidoLogin}>
            <button className="btn" onClick={()=>dispatch(logout())}>Logout</button>
        </Link>
        <Link to="/Login" className="link-header" hidden={!escondePedidoLogin}>
           <button className="btn">Login</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
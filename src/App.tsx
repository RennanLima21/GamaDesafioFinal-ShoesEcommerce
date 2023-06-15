/**
 * Alterado por Lívia Alcântara da Silva
 * 
 */
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import "./styles/global.css";
import { Link } from "react-router-dom";
import { useAppSelector } from "./hooks";
import { RootState } from "./store";

function App() {
  const estadoCarrinho = useAppSelector((state: RootState)=>state.carrinhoReducer);
  const itensNoCarrinho = estadoCarrinho.carrinho.length;
  return (
    <BrowserRouter>
    <div>
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/carrinho">Carrinho ({itensNoCarrinho})</Link>
        </nav>
      </header>
    </div>
      <Router />
    </div>
    </BrowserRouter>
  );
}

export default App;

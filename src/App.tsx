/**
 * Alterado por Lívia Alcântara da Silva
 *
 */
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import './styles/global.css';
import Header from 'components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
}

export default App;

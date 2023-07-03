import { IProduto } from '../../types/IProduto';
import { Link } from 'react-router-dom';

import './cardProduto.css';

export const CardProduto = (props: IProduto) => {
  //export const CardProduto = ({ id, nome, preco, foto, descricao, categoria, tamanho }: Produto)=>{
  return (
    <div className="card">
      <div className="content">
        <div className="title">{props.nome}</div>
        <div className="price">{props.preco}</div>
        <div className="description">{props.descricao}</div>
      </div>
      <button className="btn_card">
        <Link to={`/Produto/${props.id}`}>
          <div className="btn-produtos">Detalhes</div>
        </Link>
      </button>
    </div>
  );
};


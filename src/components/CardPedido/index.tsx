import { Link } from 'react-router-dom';

import './cardPedido.css';

interface IPedido{
    id:number,
    usuarioId:number,
    produtoId:number,
    quantidade:number
}

export const CardPedido = (props: IPedido) => {
  return (
    <div className="card">
      <div className="content">
        <div className="title">{props.id}</div>
        <div className="price">{props.produtoId}</div>
        <div className="description">{props.quantidade}</div>
      </div>
      <button className="btn_card">
        <Link to={`/Produto/${props.id}`}>
          <div className="btn-pedidos">Continuar comprando</div>
        </Link>
      </button>
    </div>
  );
};

{
  /* <button onClick={()=> dispatch(adicionarProduto(props))}>
        Detalhes</button> */
}

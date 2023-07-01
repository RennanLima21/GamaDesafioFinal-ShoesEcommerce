import { IProduto } from "../../types/IProduto";
import "./cardProduto.css";
import { Link } from "react-router-dom";

export const CardProduto = (props: IProduto)=>{
//export const CardProduto = ({ id, nome, preco, foto, descricao, categoria, tamanho }: Produto)=>{
    return(
        <div className="card-produtos">

            <div>{props.nome}</div>
            <div>{props.categoriaId}</div>
            <div>{props.descricao}</div>
            <div>{props.preco}</div>
            <Link to={`/Produto/${props.id}`}>
				<div className="btn-produtos">Detalhes</div>
			</Link>
        </div>

    );
};
        /*<button onClick={()=> dispatch(adicionarProduto(props))}>
        Detalhes</button>*/
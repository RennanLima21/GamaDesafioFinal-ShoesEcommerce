import { Produto } from "../../types/Produto";
import { excluirProduto } from "../../store/modules/carrinho";
import { useAppDispatch } from "../../hooks";
import "../../styles/carrinho.css";

export const ProdutoCarrinho = (props: Produto) => {
    const dispatch = useAppDispatch();

    return (
        <div className="card-carrinho">
            <strong>{props.nome}</strong>
            <span>{props.preco}</span>
            <button onClick={()=>{dispatch(excluirProduto(props.id))}}>Remover produto</button>
        </div>
    );
}
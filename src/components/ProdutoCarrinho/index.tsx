import { Produto } from "../../types/Produto";
import { excluirProduto } from "../../store/modules/carrinho";
import { useAppDispatch } from "../../hooks";

export const ProdutoCarrinho = (props: Produto) => {
    const dispatch = useAppDispatch();

    return (
        <div>
            <strong>{props.nome}</strong>
            <span>{props.preco}</span>
            <button onClick={()=>{dispatch(excluirProduto(props.id))}}>Remover produto</button>
        </div>
    );
}
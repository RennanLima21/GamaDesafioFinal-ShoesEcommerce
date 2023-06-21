import { Produto } from "../../types/Produto";
import { excluirProduto } from "../../store/modules/carrinho";
import { useAppDispatch } from "../../hooks";
import "../../styles/carrinho.css";

export const ProdutoCarrinho = (props: Produto) => {
    const dispatch = useAppDispatch();

    return (
        <div className="card-carrinho">
            <div>
                <strong>{props.nome}</strong>
                <span>
                    {
                        props.preco
                            .toFixed(2)
                            .replace('.',',')
                            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
                    }
                </span>
            </div>
            <div>
                <button onClick={()=>{dispatch(excluirProduto(props.id))}}>Remover produto</button>
            </div>
        </div>
    );
}
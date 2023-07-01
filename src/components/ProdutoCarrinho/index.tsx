import { ICompra } from "../../types/ICompra";
import { excluirProduto } from "../../store/modules/carrinho";
import { useAppDispatch } from "../../hooks";
import "./produtoCarrinho.css";

export const ProdutoCarrinho = (props: ICompra) => {
    const dispatch = useAppDispatch();

    return (
        <div className="card-carrinho">
            <div>
                <strong>{props.nome}</strong>
                <span>Preço:{
                    new Intl.NumberFormat("PT-BR", {
                        style: "currency",
                        currency: "BRL",
                    }).format(props.preco)} 
                </span>
                <span>Quantidade: {props.qtdeDesejada}
                </span>
            </div>
            <div>
                <button className="btn-carrinho" onClick={()=>{dispatch(excluirProduto(props.id))}}>Remover produto</button>
            </div>
        </div>
    );
}
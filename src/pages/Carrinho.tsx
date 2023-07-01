/**Alterado por Lívia Alcântara da Silva
 * 
 */
import { useAppDispatch, useAppSelector } from "../hooks";
import { RootState } from "../store";
import { ProdutoCarrinho } from "../components/ProdutoCarrinho";
import { esvaziarCarrinho } from "../store/modules/carrinho";
import "../styles/carrinho.css";

export const Carrinho = () => {
  const dispatch = useAppDispatch();
  const estadoCarrinho = useAppSelector((state: RootState)=>state.carrinhoReducer);
  const itensNoCarrinho = estadoCarrinho.carrinho.length;

  const totalPedido =
  estadoCarrinho.carrinho.length > 0
    ? estadoCarrinho.carrinho
        .map((compra) => {
          return compra.qtdeDesejada * compra.preco;
        })
        .reduce((total, preco) => total + preco)
    : 0;

  return itensNoCarrinho === 0 ? (
    <div className="lista-carrinho">Carrinho vazio!</div>
  ) : (
    <div className="container-carrinho">
      <div className="lista-carrinho">
        {estadoCarrinho.carrinho.map(compra => (
          <ProdutoCarrinho {...compra}/>
        ))}
      </div>
      <div className="card-resumo">
        <strong>Resumo da Compra</strong>
          {new Intl.NumberFormat("PT-BR", {
            style: "currency",
            currency: "BRL",
          }).format(totalPedido)}
        <div className="agrupamento-btn">
          <button className="btn-carrinho">Continuar Comprando</button>
          <button className="btn-carrinho">Finalizar Compra</button>
          <button className="btn-carrinho" onClick={()=>{dispatch(esvaziarCarrinho())}}>Esvaziar Carrinho</button>
        </div>
      </div>
    </div>
  );
};
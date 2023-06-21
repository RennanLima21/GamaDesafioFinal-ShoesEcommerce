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
  return itensNoCarrinho === 0 ? (
    <div className="container-carrinho">Carrinho vazio!</div>
  ) : (
    <div className="container-carrinho">
      {estadoCarrinho.carrinho.map(produto => (
        <ProdutoCarrinho {...produto}/>
      ))}
      <button onClick={()=>{dispatch(esvaziarCarrinho())}}>Esvaziar Carrinho</button>
    </div>
  );
};
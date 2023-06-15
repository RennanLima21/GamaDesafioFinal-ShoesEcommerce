/**Alterado por Lívia Alcântara da Silva
 * 
 */
import { useAppDispatch, useAppSelector } from "../hooks";
import { RootState } from "../store";
import { ProdutoCarrinho } from "../components/ProdutoCarrinho";
import { esvaziarCarrinho } from "../store/modules/carrinho";

export const Carrinho = () => {
  const dispatch = useAppDispatch();
  const estadoCarrinho = useAppSelector((state: RootState)=>state.carrinhoReducer);
  const itensNoCarrinho = estadoCarrinho.carrinho.length;
  return itensNoCarrinho === 0 ? (
    <p>Carrinho vazio!</p>
  ) : (
    <>
    {estadoCarrinho.carrinho.map(produto => (
      <ProdutoCarrinho {...produto}/>
    ))}
    <button onClick={()=>{dispatch(esvaziarCarrinho())}}>Esvaziar Carrinho</button>
    </>
  );
};
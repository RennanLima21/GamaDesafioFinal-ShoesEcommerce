import {useAppDispatch, useAppSelector } from "../hooks";
import { RootState } from "../store";
import { adicionarProduto } from "../store/modules/carrinho";

export const Carrinho = () => {
  const dispatch = useAppDispatch();
  const estadoCarrinho = useAppSelector((state: RootState)=>state.carrinhoReducer);
  const itensNoCarrinho = estadoCarrinho.carrinho.length;

  const handleAdicionarProduto = () =>{
    dispatch(
      adicionarProduto({
        id:"987",
        nome:"Nike Air",
        preço:1999.99,
        foto:"https://localhost:3000/image/nike_air.png",
        descricao:"O estilo rebelde dos anos 90 é remasterizado. Detalhes robustos, incluindo região dos dedos reforçada e estrutura de plástico durável, elevam sua atitude com uma vibe inspirada na vida ao ar livre. E, para mais estabilidade, atualizamos a sua experiência Tuned Air com a inovadora entressola Crater Foam.",
        categoria:"Casual",
        tamanho:"41",
      }

      )
    );

  };
  return (
    <>
      <button onClick={handleAdicionarProduto}>Adicionar Produto</button>
      <p>Tem {itensNoCarrinho} produtos no carrinho.</p>
    </>
  );
};

/**Alterado por Lívia Alcântara da Silva
 * 
 */
import { useAppDispatch, useAppSelector } from "../hooks";
import { RootState } from "../store";
import { ProdutoCarrinho } from "../components/ProdutoCarrinho";
import { esvaziarCarrinho } from "../store/modules/carrinho";
import { api } from "../lib/axios";
import { useNavigate } from "react-router-dom";
import "../styles/carrinho.css";

export const Carrinho = () => {
  const dispatch = useAppDispatch();
  const accessToken =
        useAppSelector((state) => state.authReducer.token) ||
        localStorage.getItem('@desafio4-grupo3:token');
  const estadoCarrinho = useAppSelector((state: RootState)=>state.carrinhoReducer);
  const itensNoCarrinho = estadoCarrinho.carrinho.length;
  const usuario = useAppSelector((store) => store.authReducer.usuario);
  const navigate = useNavigate();

  const totalPedido =
  estadoCarrinho.carrinho.length > 0
    ? estadoCarrinho.carrinho
        .map((compra) => {
          return compra.qtdeDesejada * compra.preco;
        })
        .reduce((total, preco) => total + preco)
    : 0;
  
  function continuarComprando() {
    navigate("/Produtos");
  }  

    function finalizarCompra() {
      if (usuario) {
        const enviarPedido = async () => {
          try {
            estadoCarrinho.carrinho.forEach(async (compra)=>{
              const response = await api.post("/pedido", {
                usuarioId: usuario.id,
                produtoId: compra.id,
                quantidade: compra.qtdeDesejada,
              },{
                headers: {
                  Authorization: 'Bearer ' + accessToken,
                },
              });
              const novaQtd = compra.quantidade - compra.qtdeDesejada;
              const resp = await api.put(`/produto/${compra.id}`, {
                quantidade:novaQtd,
              },{
                headers:{
                  Authorization: 'Bearer ' + accessToken,
                },
              });
            });

            navigate("/");
            alert("Compra realizada com sucesso!");
            dispatch(esvaziarCarrinho());
          } catch (error) {
            alert("Erro na requisição");
          }
        };
        enviarPedido();
      } else {
        navigate("/login?origin=carrinho");
      }
    }

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
          <button className="btn-carrinho" onClick={continuarComprando}>Continuar Comprando</button>
          <button className="btn-carrinho" onClick={finalizarCompra}>Finalizar Compra</button>
          <button className="btn-carrinho" onClick={()=>{dispatch(esvaziarCarrinho())}}>Esvaziar Carrinho</button>
        </div>
      </div>
    </div>
  );
};
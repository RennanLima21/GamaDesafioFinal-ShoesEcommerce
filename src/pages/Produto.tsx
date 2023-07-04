import { IProduto } from "../types/IProduto";
import { useAppDispatch } from "hooks";
import { adicionarProduto } from "store/modules/carrinho";
import { api } from "lib/axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/produto.css"
  
export const Produto = () => {
  const dispatch = useAppDispatch();
  const [produto, setProduto] = useState<IProduto|any>();
  const [qtde, setQtde] = useState(1);
  const { idProduto } = useParams();
  const navigate = useNavigate();

  const incrementaQtde = (max:number) =>{
    if(max>=(qtde+1)){
      setQtde(qtde + 1);
    }else{
      alert("Não é possível adicionar. Quantidade máxima em estoque!");
    }
  };

  const diminuiQtde = () =>{
    if(qtde===1){
      alert("Quantidade mínima para compra.");
    }else{
      setQtde(qtde - 1);
    }
  };

    useEffect(() => {
      const pegaProduto = async () =>{
        try{
          const resposta = await api.get(`/Produto/${idProduto}`);
          setProduto(resposta?.data);
        } catch{
          alert("Nenhum produto encontrado");
        }
      };
      pegaProduto();
    }, [idProduto]);

  return(
      <div className="container-produto">
        <div className="cartao-produto">
        <div>{produto?.foto}</div>
        <div className="descricao-produto">
          <strong>Nome</strong>
          <div>{produto?.nome}</div>
          <strong>Categoria</strong>
          <div>{produto?.categoriaId}</div>
          <strong>Descrição</strong>
          <div>{produto?.descricao}</div>
          <strong>Preço</strong>
          <div>{produto?.preco}</div>
          <strong>Quantidade disponível</strong>
          <div>{produto?.quantidade}</div>
          <strong>Quantidade desejada</strong><p>{qtde}</p>
          <button className="btn-produto" onClick={()=>incrementaQtde(produto?.quantidade)}>+</button>
          <button className="btn-produto" onClick={()=>diminuiQtde()}>-</button>
          
        </div>
          <button className="btn-produto" onClick={()=> {dispatch(adicionarProduto({
            id: produto.id,
            nome: produto.nome,
            descricao: produto.descricao,
            foto: produto.foto,
            preco: produto.preco,
            quantidade: produto.quantidade,
            categoriaId: produto.categoriaId,
            qtdeDesejada: qtde
          }));
           navigate("/");}}>
              Adicionar</button>
        </div>
      </div>
  );
};
import { useAppDispatch } from "../../hooks";
import { adicionarProduto } from "../../store/modules/carrinho";
import "./cardproduto.css"
import { Produto } from "../../types/Produto";
import imagem from "../../assets/images/logo1.png"

export const CardProduto = (props: Produto)=>{
//export const CardProduto = ({ id, nome, preco, foto, descricao, categoria, tamanho }: Produto)=>{
    const dispatch = useAppDispatch();

    return(
        <div className="conteiner">
          <img className="imagem" src={imagem} alt="" />
            <div>{props.nome}</div>
            <div>{props.categoriaId}</div>
            <div>{props.descricao}</div>
            <div>{props.preco}</div>
            <button className="button-f" onClick={()=> dispatch(adicionarProduto(props))}>
                Adicionar produto</button>
        </div>
    );
};
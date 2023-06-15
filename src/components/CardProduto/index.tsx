/**
 * Adicionado por Lívia Alcântara da Silva
 * 
 */
import { useAppDispatch } from "../../hooks";
import { adicionarProduto } from "../../store/modules/carrinho";

import { Produto } from "../../types/Produto";

export const CardProduto = (props: Produto)=>{
//export const CardProduto = ({ id, nome, preco, foto, descricao, categoria, tamanho }: Produto)=>{
    const dispatch = useAppDispatch();

    return(
        <div>
            <div>{props.nome}</div>
            <div>{props.preco}</div>
            <button onClick={()=> dispatch(adicionarProduto(props))}>
                Adicionar produto</button>
        </div>
    );
};
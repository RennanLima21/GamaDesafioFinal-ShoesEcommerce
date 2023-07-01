/**Alterado por Lívia Alcântara da Silva
 * 
 */
import  { CardProduto } from "../components/CardProduto";
import listaProdutos from '../produtos.json';
import { api } from "lib/axios";
import { Produto } from "types/Produto";
import React, { useEffect, useState } from "react";

  
export const Produtos = () => {
  const [products, setProducts] = useState<Produto[]>([]); 
    useEffect(() => {
      api.get("/produto/").then((data) => {
        console.log(data);
        setProducts(data?.data);
      });
    }, []);
    return(
    <div>
      <div>
      Produtos
        {
          products.map((produto,i) =>(
            <CardProduto key={i} {...produto}/>
          ))
        }
      </div>
    </div>
  );
}
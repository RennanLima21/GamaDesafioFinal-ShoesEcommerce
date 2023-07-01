/**Alterado por Lívia Alcântara da Silva
 * 
 */
import { CardProduto } from "../components/CardProduto";
import { api } from "lib/axios";
import React, { useEffect, useState } from "react";
import "../styles/produtos.css";

  
export const Produtos = () => {
    const [produtos, setProdutos] = useState<any[]>([]);
    useEffect(() => {
      api.get("/produto/").then((data) => {
        console.log(data);
        setProdutos(data?.data);
      });
    }, []);
    return(
    <div className="container-produtos">
      Produtos
        {
          produtos.map((produto,i) =>(
            <CardProduto key={i} {...produto}/>
          ))
        }
    </div>
  );
}
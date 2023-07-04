import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { useEffect, useState } from "react";
import { api } from "lib/axios";
import { CardPedido } from "components/CardPedido";

export const Pedidos = () => {
  const accessToken =
  useAppSelector((state) => state.authReducer.token) ||
  localStorage.getItem('@desafio4-grupo3:token');
  const usuario = useAppSelector((store) => store.authReducer.usuario);
  const [pedidos, setPedidos] = useState<any[]>([]);
  useEffect(() => {
    api.get("/pedido/",{
      headers:{
        Authorization: 'Bearer ' + accessToken,
      },
    }).then((data) => {
      console.log(data);
      setPedidos(data?.data);
    });
  }, []);
  return(
    <div className="container-produtos">
      Pedidos
        {
          pedidos.map((pedido,i) =>(
            <CardPedido key={i} {...pedido}/>
          ))
        }
        
    </div>
  );
};
  
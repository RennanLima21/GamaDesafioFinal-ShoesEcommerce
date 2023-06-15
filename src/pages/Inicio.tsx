/**Alterado por Lívia Alcântara da Silva
 * 
 */
import { CardProduto } from "../components/CardProduto";
import listaProdutos from '../produtos.json';


export const Inicio = () => {
  return (
    <div>
      {listaProdutos.produtos.map(produto =>(
        <CardProduto key={produto.id} {...produto} />
      ))}
    </div>    
  );
}
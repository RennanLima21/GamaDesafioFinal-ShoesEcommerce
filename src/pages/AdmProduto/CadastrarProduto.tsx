import { useAppSelector } from "hooks";
import { api } from "lib/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CadastrarProduto = () =>{
    const [nomeProduto, setNomeProduto] = useState("");
    const [descricao, setDescricao] = useState("");
    const [foto, setFoto] = useState("");
    const [preco, setPreco] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [fazendoCadastro, setFazendoCadastro] = useState(false);
    const [escondeBotao, setEscondeBotao] = useState(true);
    const navigate = useNavigate();
    const accessToken = useAppSelector((state) => state.authReducer.token) ||
        localStorage.getItem('@desafio4-grupo3:token');
    const usuario = useAppSelector((store) => store.authReducer.usuario);
  
    const cadastrarProduto = async (evento: React.FormEvent<HTMLFormElement>) => {
      evento.preventDefault();
      const cadastroProduto = async () => {
        setFazendoCadastro(true);
        try {
          const response = await api.post(`/produto`, {
            nome: nomeProduto,
            descricao: descricao,
            foto: foto,
            preco: preco,
            quantidade:quantidade,
            },
            {
                headers:{
                  Authorization: 'Bearer ' + accessToken,
                },
            }
          );
          const data = await response.data;
          alert(`Produto ${nomeProduto} cadastrado com sucesso`);
          navigate("/PainelAdm");
        } catch (error: any) {
          console.log(error);
        } finally {
          setFazendoCadastro(false);
        }
    };
  
      cadastroProduto();
      setNomeProduto("");
      setDescricao("");
      setFoto("");
      setPreco("");
      setQuantidade("");
    };
    return (
      <>
        {fazendoCadastro ? (
          <>
            <div hidden={fazendoCadastro}>
              <div>
                <h1>Carregando, aguarde.</h1>
              </div>
            </div>
          </>
        ) : (
          <div className='container-formulario'>
            <div className='card-formulario'>
              <form onSubmit={cadastrarProduto} className='campos-formulario'>
                <h3>Criar uma conta</h3>
                <input
                  value={nomeProduto}
                  onChange={(valor)=> setNomeProduto(valor.target.value)}
                  required={true}
                  placeholder="Nome do produto"
                  type="text"
                />
                <input
                  value={descricao}
                  onChange={(valor)=> setDescricao(valor.target.value)}
                  required={true}
                  placeholder="Descrição"
                  type="text"
                />
                <input
                  value={foto}
                  onChange={(valor)=> setFoto(valor.target.value)}
                  required={true}
                  placeholder="Digite o endereço da foto"
                  type="number"
                />
                <input
                  value={preco}
                  onChange={(valor)=> setPreco(valor.target.value)}
                  required={true}
                  placeholder="Digite o preço do produto"
                  type="number"
                />
                <input
                  value={quantidade}
                  onChange={(valor)=> setQuantidade(valor.target.value)}
                  required={true}
                  placeholder="Digite o preço do produto"
                  type="number"
                />
                <button disabled={escondeBotao} className='btn-formulario'>
                  Cadastrar
                </button>
              </form>
            </div>
          </div>
        )}
      </>
    );
}
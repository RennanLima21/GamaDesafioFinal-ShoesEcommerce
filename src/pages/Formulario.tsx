import React, { useState } from 'react';
import { api } from 'lib/axios';
import "../styles/Formulario.css";
import { useNavigate } from 'react-router-dom';
import PasswordChecklist from 'react-password-checklist';

export const Formulario = () => {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [fazendoCadastro, setFazendoCadastro] = useState(false);
  const [escondeBotao, setEscondeBotao] = useState(true);
  const navigate = useNavigate();

  const cadastrarUsuario = async (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const autenticarUsuario = async () => {
      setFazendoCadastro(true);
      try {
        const response = await api.post(`/usuario`, {
          nome: nomeCompleto,
          email: email,
          senha: senha,
          isAdmin: false,
          }
        );
        const data = await response.data;
        alert(`${nomeCompleto}, seu cadastro foi realizado com sucesso`);
        navigate("/Login");
      } catch (error: any) {
        console.log(error);
      } finally {
        setFazendoCadastro(false);
      }
    };

    autenticarUsuario();
    setNomeCompleto("");
    setEmail("");
    setSenha("");
    setConfirmarSenha("");
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
            <form onSubmit={cadastrarUsuario} className='campos-formulario'>
              <h3>Criar uma conta</h3>
              <input
                value={nomeCompleto}
                onChange={(valor)=> setNomeCompleto(valor.target.value)}
                required={true}
                placeholder="Nome Completo"
                type="text"
              />
              <input
                value={email}
                onChange={(valor)=> setEmail(valor.target.value)}
                required={true}
                placeholder="e-mail"
                type="text"
              />
              <input
                value={senha}
                onChange={(valor)=> setSenha(valor.target.value)}
                required={true}
                placeholder="Digite a senha"
                type="password"
              />
              <input
                value={confirmarSenha}
                onChange={(valor)=> setConfirmarSenha(valor.target.value)}
                required={true}
                placeholder="Digite a senha novamente"
                type="password"
              />
              <PasswordChecklist
                rules={[
                  "minLength",
                  "specialChar",
                  "number",
                  "capital",
                  "match",
                ]}
                minLength={5}
                value={senha}
                valueAgain={confirmarSenha}
                messages={{
                  minLength: "A senha tem no mínimo 5 caracteres.",
                  specialChar: "A senha tem pelo menos 1 caractere especial.",
                  number: "A senha tem pelo menos 1 número.",
                  capital: "A senha tem pelo menos 1 letra maiúscula.",
                  match: "As senhas coincidem.",
                }}
                iconSize={12}
                onChange={(isValid) => {
                  if (isValid) {
                    setEscondeBotao(false);
                  } else {
                    setEscondeBotao(true);
                  }
                }}
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
};
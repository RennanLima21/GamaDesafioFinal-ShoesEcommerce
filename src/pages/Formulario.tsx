import React, { useState } from 'react';
import { api } from 'lib/axios';
import "../styles/loginemail.css";
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



  const notifyCadastroSucesso = (nome: string) =>
  alert(`${nome}, seu cadastro foi realizado com sucesso`);

  const cadastrarUsuario = async (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const autenticarUsuario = async () => {
      setFazendoCadastro(true);
      try {
        const response = await api.post(`/usuario`, {
          name: nomeCompleto,
          email: email,
          senha: senha,
          isAdmin: false,
          }
          , {headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Access-Control-Allow-Headers': 'content-type',
            'content-type':'application/json'
          }}
        );
        const data = await response.data;
        notifyCadastroSucesso(data.name);
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
        <div>
          <div>
            <form onSubmit={cadastrarUsuario}>
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
              <button disabled={escondeBotao}>
                Cadastrar
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );


  /*
  const [formData, setFormData] = useState<IUsuario|null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await api.post('/usuario', formData);
      console.log(response.data); // Faça algo com a resposta da API
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h1>Formulário</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
  */
};
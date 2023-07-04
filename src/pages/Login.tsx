import {FormEvent, useState} from 'react'
import logoimg from '../assets/images/logo1.png';
import { api } from '../lib/axios';
import "../styles/loginemail.css";
import { Link } from 'react-router-dom';
import { login, setUsuario } from 'store/modules/usuario';
import { useAppDispatch } from 'hooks';
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erroEmail, setErroEmail ] = useState("");
  const [erroSenha, setErroSenha] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();


  function autenticarUsuario (evento:FormEvent){
    evento.preventDefault()
    const fazerLogin = async () => {
      if(! email ){
        setErroEmail ('Por favor insira o Email')
      }
      if(! senha ){
        setErroSenha ('Por favor insira a Senha')
      }

    // Fazer a chamada para a API aqui
      if (email && senha) {  
        try {
          const response = await api.post(`/login`, {
            email: email,
            senha: senha,
          });
          const data = await response.data;
          dispatch(login(data));
          dispatch(setUsuario(data));
          navigate("/");
        } catch (error: any) {
          if (error.response.status === 401) {
            alert("Usuário ou senha incorretos!");
          } else {
            alert("Erro na requisição");
          }
            console.log(error.response.data);
            console.log(error);
        }
      }
    }
    fazerLogin();
    setEmail("");
    setSenha("");
  };
  return (
    <div className="container"> 
      <div className= "container-login">
        <div className="wrap-login">
          <form onSubmit={autenticarUsuario} className="login-form">
            <span className="login-form-title"> Bem vindo</span>
            <span className="login-form-title"> <img src={logoimg} alt="imglogogamashoes" /></span>

            <div className='wrap-input'> 
              <input className={email !== "" ? 'has-val input' :  'input'}
               type='email'
               value={email}
               onChange={e =>{
                setEmail(e.target.value)
                setErroEmail("")
               } }
               />
              <span className='focus-input' data-placeholder='Email'></span> 
            </div>
            {erroEmail && <span className='Weap-input-error'>{erroEmail}</span>}

            <div className='wrap-input'>
              <input className={senha !== "" ? 'has-val input' :  'input'} 
              type='password'
              value={senha}
              onChange={e =>{
                setSenha(e.target.value)
                setErroSenha("")
               } }
              />
             
              <span className='focus-input' data-placeholder='Senha'></span>
            </div>
            {erroSenha && <span className='Weap-input-error'>{erroSenha}</span>}

            <div className='container-login-form-btn'>
              <button className='login-form-btn'>Entrar</button>
            </div>

            <div className='container-login-form-btn'>
              <Link to="/Formulario"><button className='login-form-btn'>Criar Conta</button></Link>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};
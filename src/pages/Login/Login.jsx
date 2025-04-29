import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Cadastro from "../Cadastro/Cadastro";
import firebase from "../../Firebase";

function Login() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try{
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, senha);
      const user = userCredential.user;
      console.log("Usuário logado:", user);
      navigate('/dados')
    }catch(error){
      console.error("Erro ao fazer login:", error);
    }
  }

  return (
    <div className="home">
      <h1 className="title-home">Realize sua autenticação</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">E-mail</label><br />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input><br />

        <label htmlFor="senha">Senha</label><br />
        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)}  required></input><br />

        <Link to="/Cadastro" className="link-p">Quero me cadastrar</Link>
        <button type="submit">Entrar</button><br />
      </form>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import firebase from "../../Firebase";
import { Link, useNavigate } from "react-router-dom";


function Cadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [data, setData] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, senha);
      const user = userCredential.user.uid;

      await firebase.firestore().collection("usuarios").doc(user).set({
        nome,
        sobrenome,
        data,
        email,
      });
      alert("Usuário cadastrado com sucesso!");
      navigate('/login');
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      alert("Erro ao cadastrar usuário: " + error.message);
    }
  };

  return (
    <div className="home">
      <h1 className="title-home">Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <br />
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <br />

        <label htmlFor="sobrenome">Sobrenome:</label>
        <br />
        <input
          type="text"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
        />
        <br />

        <label htmlFor="data">Data de Nacimento:</label>
        <br />
        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <br />

        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <label htmlFor="senha">Senha:</label>
        <br />
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <br />
        <br />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Cadastro;

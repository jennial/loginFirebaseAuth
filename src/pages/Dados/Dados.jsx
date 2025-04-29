import React, { useEffect, useState } from "react";
import firebase from "firebase";
import { Link, useNavigate } from "react-router-dom";

function Dados() {
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();
  

  useEffect(() => {
    const usuario = firebase.auth().currentUser;

    if (usuario) {
      const uid = usuario.uid;

      firebase
        .firestore()
        .collection("usuarios")
        .doc(uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            setUsuario(doc.data());
          } else {
            alert("Nenhum dado encontrado para esse usuário.");
            navigate("/login");
          }
        });
    } else {
      console.log("Nenhum usuário logado.");
    }
  }, []); 

  if (!usuario) {
    return <p>Carregando dados...</p>; 
  }

  return (
    <div className="home">
      <h1 className="title-home">Dados Cadastrais</h1>
      <h3>Olá, {usuario.nome}. Seja bem-vindo(a)!</h3>
      <form>
        <label htmlFor="nome">Nome:</label>
        <br />
        <input type="text" value={usuario.nome} readOnly />
        <br />

        <label htmlFor="sobrenome">Sobrenome:</label>
        <br />
        <input type="text" value={usuario.sobrenome} readOnly />
        <br />

        <label htmlFor="data">Data de Nascimento:</label>
        <br />
        <input type="date" value={usuario.data} readOnly />
        <br />

        <label htmlFor="email">Email:</label>
        <br />
        <input type="email" value={usuario.email} readOnly />
        <br />
      </form>
    </div>
  );
}

export default Dados;

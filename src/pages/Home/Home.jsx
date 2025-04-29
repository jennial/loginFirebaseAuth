import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
      <div className="home">
        <h1 className='title-home'>Bem-vindo a página de informações</h1>
        <p>Já tem cadastro?</p>
        <Link to="/login" className='link-personalizado'>Login</Link>
        <p>Ainda não sou cadastrado</p>
        <Link to="/cadastro" className='link-personalizado'>Cadastrar</Link>
      </div>
    );
  }
  
  export default Home;
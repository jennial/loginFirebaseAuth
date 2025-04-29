import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Dados from './pages/Dados/Dados';
import Menu from './pages/Navbar/Menu';

function App() {
  return (
    <>
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Dados" element={<Dados />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
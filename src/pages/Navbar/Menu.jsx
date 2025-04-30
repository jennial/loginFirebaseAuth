import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './menu.css'; 

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav onClick={toggleMenu}>
        <img src="menu-aberto.png" alt="Menu Icon" className='menu-icon' />
      </nav>

      {isOpen && (
        <nav className="menu-links">
          <Link to="/" className="menu-link">Home</Link>
          <Link to="/login" className="menu-link">Login</Link>
          <Link to="/cadastro" className="menu-link">Cadastro</Link>
        </nav>
      )}
    </>
  );
}

export default Menu;

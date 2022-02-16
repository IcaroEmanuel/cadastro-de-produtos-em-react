import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <header>
      <nav>
        <Link to="/">Cadastro</Link>
        <Link to="/listagem">Listagem</Link>
      </nav>
    </header>
  );
};

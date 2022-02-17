import React, { useState } from 'react';
import ProdutosContext from './ProdutosContext';

export default function ProdutosProvider({ children }) {
  const [produto, setProduto] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState(0);
  const [disponibilidade, setDisponibilidade] = useState('Sim');

  const contextValue = {
    produto,
    setProduto,
    descricao,
    setDescricao,
    valor,
    setValor,
    disponibilidade,
    setDisponibilidade,
  };
  
  return (
    <ProdutosContext.Provider value={contextValue}>
      { children }
    </ProdutosContext.Provider>
  )
}

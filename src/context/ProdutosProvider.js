import React, { useState } from 'react';
import ProdutosContext from './ProdutosContext';

export default function ProdutosProvider({ children }) {
  const [produto, setProduto] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState(0);
  const [disponibilidade, setDisponibilidade] = useState('Sim');

  const capturarProduto = (event) => {
    setProduto(event.target.value);
   };
 
   const capturarDescricao = (event) => {
     setDescricao(event.target.value);
   };
 
   const capturarValor = (event) => {
     setValor(event.target.value);
   };
 
   const capturarDisponibilidade = (event) => {
     setDisponibilidade(event.target.value);
   };

  const contextValue = {
    produto,
    capturarProduto,
    descricao,
    capturarDescricao,
    valor,
    capturarValor,
    disponibilidade,
    capturarDisponibilidade,
  };
  
  return (
    <ProdutosContext.Provider value={contextValue}>
      { children }
    </ProdutosContext.Provider>
  )
}

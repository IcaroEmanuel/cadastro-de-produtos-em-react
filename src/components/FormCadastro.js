import React, { useState } from 'react'

export default function FormCadastro() {
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

  const salvarProduto = () => {
    const novoProduto = [];
    let todosProdutos;

    const produtoObj = {
      produto,
      descricao,
      valor,
      disponibilidade
    };

    const getProdutoLs = JSON.parse(localStorage.getItem('Produtos'));
    novoProduto.push(produtoObj);

    if (getProdutoLs === null) {
      return localStorage.setItem('Produtos', JSON.stringify(novoProduto));
    }

    todosProdutos = novoProduto.concat(getProdutoLs);

    localStorage.setItem('Produtos', JSON.stringify(todosProdutos));
    console.log(todosProdutos);
  }

  return (
    <section>
      <form>
        <label>
          Produto
          <input type="text" name="produto" onChange={capturarProduto} />
        </label>
        <label>
          Descricão
          <input type="text" name="descricao" onChange={capturarDescricao} />
        </label>
        <label>
          Valor
          <input type="number" name="valor" onChange={capturarValor} />
        </label>
        <label>
          Disponibilidade
          <select name="disponibilidade" onChange={capturarDisponibilidade}>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </label>
        <button type="button" onClick={salvarProduto}>Salvar</button>
      </form>
    </section>
  )
}

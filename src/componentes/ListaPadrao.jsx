import React from "react";

const ListaPadrao = ({ itemLista, listaDeFilmes, setListaDeFilmes }) => {
  const removeritemDaLista = () => {
    setListaDeFilmes(
      listaDeFilmes.filter((itemAtual) => itemAtual !== itemLista)
    );
  };
  return (
    <div>
      <li>
        <input type="checkbox" name="" id="" />
        <p className="paragrafo-padrao">{itemLista}</p>
        <button className="botao-remover" onClick={() => removeritemDaLista()}>
          Remover
        </button>
      </li>
    </div>
  );
};

export default ListaPadrao;

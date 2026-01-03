import React, { useRef, useState } from "react";
import ListaPadrao from "./ListaPadrao";

const Lista = () => {
  const [listaDeFilmes, setListaDeFilmes] = useState([]);
  const valorInput = useRef();

  const adicionarFilmeALista = () => {
    const novaListaDeFilme = [...listaDeFilmes];
    const novoValorInput = valorInput.current.value;
    if (novoValorInput) {
      novaListaDeFilme.push(novoValorInput);
      setListaDeFilmes(novaListaDeFilme);
      valorInput.current.value = "";
    }
  };

  return (
    <div className="form-adicionar">
      <input ref={valorInput} type="text" placeholder="Digite o nome" />
      <button
        className="botao-adicionar"
        onClick={() => adicionarFilmeALista()}
      >
        Adicionar
      </button>

      {listaDeFilmes.map((itemLista, index) => (
        <ListaPadrao
          key={index}
          itemLista={itemLista}
          listaDeFilmes={listaDeFilmes}
          setListaDeFilmes={setListaDeFilmes}
        />
      ))}
      <ul></ul>
    </div>
  );
};

export default Lista;

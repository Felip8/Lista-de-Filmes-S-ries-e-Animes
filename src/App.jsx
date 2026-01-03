import "./App.css";
import Lista from "./componentes/Lista.jsx";

function App() {
  return (
    <>
      <h1>Listas de Filmes / Séries / Animes</h1>
      <div className="container-principal">
        <div className="container">
          <p className="titulo-lista">Filmes</p>
          <hr />
          <Lista />
        </div>

        <div className="container">
          <p className="titulo-lista">Séries</p>
          <hr />
          <Lista />
        </div>

        <div className="container">
          <p className="titulo-lista">Animes</p>
          <hr />
          <Lista />
        </div>
      </div>
    </>
  );
}

export default App;

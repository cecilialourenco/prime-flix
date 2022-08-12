import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./favoritos.css";

export default function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("@primeFlix");

    let filmesSalvos = JSON.parse(minhaLista) || [];

    setFilmes(filmesSalvos);
  }, []);

  function excluirFilme(id) {
    let filtroFilmes = filmes.filter((filme) => {
      return filme.id !== id;
    });

    setFilmes(filtroFilmes);
    localStorage.setItem("@primeFlix", JSON.stringify(filtroFilmes));
    toast.success("Filme excluído com sucesso!");
  }

  return (
    <div className="meus-filmes">
      <h1>Meus filmes</h1>
      {filmes.length === 0 && <span>Nenhum filme salvo</span>}
      <ul>
        {filmes.map((filme) => {
          return (
            <li key={filme.id}>
              <span>{filme.title}</span>
              <div>
                <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                <button onClick={() => excluirFilme(filme.id)}>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  {
    /* api filmes 
  const [filmes, setFilmes] = useState([]);

  const fetchFilmes = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=d6a4e09d194a34b300a7bd1b4d36353f"
    );
    setFilmes(response.data.results);
    console.log(filmes);

  };

  useEffect(() => {
    fetchFilmes();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Ano</th>
            <th>Gênero</th>
          </tr>
        </thead>
        <tbody>
          {filmes &&
            filmes.map((filme) => (
              <tr key={filme.id}>
                <td>{filme.title}</td>
                <td>{filme.release_date}</td>
                <td>{filme.vote_average}</td>
                <td><img src={`https://image.tmdb.org/t/p/w300${filme.poster_path}`} alt={filme.title} /></td>
                <td>
                  {filme.genres && filme.genres.length > 0
                    ? filme.genres.map((genre) => genre.name).join(", ")
                    : "Não há informações de gênero disponíveis."}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

*/
  }

  const [myModels, setMyModels] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/myModels")
      .then((response) => {
        setMyModels(response.data);
      })
      .catch((error) => {
        console.error("Erro: " + error);
      });
  }, []);

  return (
    <div>
      <h1>Meus Modelos</h1>
      <ul>
        {myModels.map((myModel) => (
          <li key={myModel._id}>
            <strong>{myModel.name}</strong>: {myModel.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

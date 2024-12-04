import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Row } from "react-bootstrap";
import SingoloFilm from "./SingoloFilm";

// Componente per visualizzare i film
function GoditiFilm3() {
  const [movies, setMovies] = useState([]);

  // Funzione per recuperare i film
  const fetchMovies = () => {
    fetch(`http://www.omdbapi.com/?apikey=10ea4b14&s=Stranger-Things`)
      .then((response) => response.json())
      .then((data) => {
        const limiteFilm = data.Search.slice(0, 6); // Limita i risultati a 6 film
        setMovies(limiteFilm);
      })
      .catch((error) => {
        console.error("Errore nel recupero dei dati dei film:", error);
      });
  };

  // Esegui fetchMovies appena il componente viene montato
  useState(() => {
    fetchMovies();
  });

  return (
    // Ritorna una riga di colonne con i film
    <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
      {movies.map((movie) => (
        <SingoloFilm
          key={movie.imdbID}
          title={movie.Title}
          img={movie.Poster}
        />
      ))}
    </Row>
  );
}

// Esporta il componente
export default GoditiFilm3;

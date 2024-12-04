import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SingoloFilm from "./SingoloFilm";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=10ea4b14&s=the-walking-dead`)
      .then((response) => response.json())
      .then((data) => {
        console.log("API Data:", data); // Log per verificare i dati
        if (data.Search) {
          const limiteFilm = data.Search.slice(0, 6); // Limita i risultati a 6 film
          setMovies(limiteFilm);
        } else {
          console.error("Nessun film trovato:", data);
        }
      })
      .catch((error) =>
        console.error("Errore nel recupero dei dati dei film:", error)
      );
  }, []);

  return (
    <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
      {movies.map((movie) => (
        <div
          key={movie.imdbID}
          onClick={() => navigate(`/movie-details/${movie.imdbID}`)}
        >
          <SingoloFilm title={movie.Title} img={movie.Poster} />
        </div>
      ))}
    </Row>
  );
};

export default Home;

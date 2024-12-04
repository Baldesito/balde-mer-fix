// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Slider from "react-slick";
export default function SimpleSlider() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=10ea4b14&s=Series`
        );
        const data = await response.json();
        const limitedMovies = data.Search.slice(0, 6); // Limita i film a 6
        setMovies(limitedMovies);
      } catch (error) {
        console.error("Errore nel recupero dei dati dei film:", error);
      }
    };

    fetchMovies();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {movies.map((movie) => (
        <div key={movie.imdbID}>
          <Row className="justify-content-center my-4">
            <Col xs={12} sm={6} md={4} lg={3}>
              <img
                className="img-fluid movie-poster"
                src={movie.Poster}
                alt={movie.Title}
              />
              <h5 className="text-center text-white">{movie.Title}</h5>
            </Col>
          </Row>
        </div>
      ))}
    </Slider>
  );
}

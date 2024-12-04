// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=10ea4b14&i=${movieId}`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) =>
        console.error("Errore nel recupero dei dettagli del film:", error)
      );

    fetch(`https://striveschool-api.herokuapp.com/api/comments/${movieId}`)
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) =>
        console.error("Errore nel recupero dei commenti:", error)
      );
  }, [movieId]);

  return (
    <div>
      {movie && (
        <Card>
          <Card.Img variant="top" src={movie.Poster} />
          <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text>{movie.Plot}</Card.Text>
          </Card.Body>
        </Card>
      )}
      <div>
        <h2 className="text-white mt-4">Commenti</h2>
        <ul>
          {comments.map((comment) => (
            <li key={comment._id}>{comment.comment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;

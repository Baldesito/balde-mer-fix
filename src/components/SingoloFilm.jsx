// eslint-disable-next-line no-unused-vars
import React from "react";
import { Card } from "react-bootstrap";

const SingoloFilm = ({ title, img }) => {
  return (
    <Card className="m-2">
      <Card.Img variant="top" src={img} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingoloFilm;

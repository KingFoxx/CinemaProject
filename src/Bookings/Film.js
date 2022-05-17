import React from "react";
import "..//App.css";
import { Card, Button } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

const Film = ({ film, i }) => {
  const navigate = useNavigate();

    const handleClick = (index) => {
        navigate("/FilmDetail/" + index);
    }
  return (
    <div>
      <Card style={{ marginLeft: "20%", width: "18rem" }}>
        <Card.Img variant="top" src={film.image}/>
        <Card.Body className="card-text">
          <Card.Title>{film.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={() => handleClick(i)} variant="primary">Find out more</Button>
          <Card.Text>
            <br/>
            OR
          </Card.Text>
          <Button variant="primary">Book now</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Film;

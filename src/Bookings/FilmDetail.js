import React from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "..//App.css";
import films from "./film.json";

const FilmDetail = () => {
  const { id } = useParams();
  const film = films[id];
  return (
    <div className="OpeningTimes">
      <Container className="detailsCard">
        <Row>
          <Col md={4} lg={4}>
            <img
              className="card-img-top img-fluid my-5"
              src={film.image}
              alt={film.name}
            />
          </Col>
          <Col md={4}>
            <p className="my-5">Some Description</p>
          </Col>
          <Col md={4} lg={4}>
            <Container style={{ mb: 5, mt: 5, my: 5 }}>
              <p className="mb-0 my-5">{film.name}</p>
              <p className="small mt-1 mb-0">{film.genre}</p>
              <form className="form" action="#" method="POST">
                <Row>
                  <Col>
                    <p>
                      <strong>Ticket Quantity:</strong>
                    </p>
                    <select
                      className="form-control rounded-4 w-50"
                      name="product_size"
                      id="id_product_size"
                      style={{ marginLeft: "5px" }}
                    >
                      <option value="#" selected>
                        Select Quantity
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                    <Col s={12}>
                      <Button variant="light" style={{ margin: "5px" }} as={Link} to={"/Films"}>
                        Go Back
                      </Button>
                      <Button variant="light" style={{ margin: "5px" }} >
                        Checkout
                      </Button>
                    </Col>
                  </Col>
                </Row>
              </form>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default FilmDetail;

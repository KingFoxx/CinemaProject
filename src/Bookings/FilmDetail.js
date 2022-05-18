import React, { useState, useContext, useReducer, useCallback} from "react";
import { Link, useParams } from "react-router-dom";
import CartContext from './cart-context';
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "..//App.css";
import films from "./film.json";
import { set } from "mongoose";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

// TODO's 
// Booking is missing Date and Time columns
// We need to implement customer id, possibly take it from login info once implemented

const dataReducer = (state, event) => {
  return {...state, [event.name]: event.value}
}

const FilmDetail = () => {
  const [data, setData] = useReducer(dataReducer, {});
  const navigate = useNavigate();

  const { id } = useParams();
  const film = films[id];
  const { addToCart } = useContext(CartContext);

  // Setting data using reducer
  const handleChange = event => {
    // TODO this is a placeholder value, needs to implement once login functionality works
    setData({name: "cus_id", value: 1}); 

    setData({ name: "mov_id", value: film.id });
    setData({ name: "name", value: film.name });

    // TODO Price should be handled by database
    setData({ name: "price", value: film.price });
    setData({ name: "concession", value: film.concession });
    setData({ name: event.target.name, value: event.target.value });
  }

  const handleSubmit = () => {
    console.log("this is handlesubmit");
    let book_cost = (data.adult_quantity * film.price) + (data.child_quantity * film.concession);
    book_cost = book_cost.toFixed(2);
    let numSeats = (parseInt(data.adult_quantity) + parseInt(data.child_quantity));

    let refPromise = axios.post("http://localhost:4040/booking/create", {
      cus_id : data.cus_id,
      mov_id : data.mov_id,
      adults : data.adult_quantity,
      children : data.child_quantity,
      cost : book_cost,
      num_seats : numSeats
    });
    refPromise.then(console.log("this is section 2"));
    refPromise.then((res) => {
      console.log(res.data);
      addToCart(res.data);
      console.log("this is section 3");
      // Checkout button navigate to cart page from here instead of the button itself
      navigate('/Cart');
    });
  }
  
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
                    <select onChange={handleChange}
                      className="form-control rounded-4 w-50 mb-2"
                      name="adult_quantity"
                      id="id_adult_quantity"
                      style={{ marginLeft: "5px" }}
                    >
                      <option value="#" defaultValue>
                        Adult Quantity
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
                    <select onChange={handleChange}
                      className="form-control rounded-4 w-50 mb-2"
                      name="child_quantity"
                      id="id_child_quantity"
                      style={{ marginLeft: "5px" }}
                    >
                      <option value="#" defaultValue>
                        Child Quantity
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
                      <Button variant="light" style={{ margin: "5px" }} onClick={handleSubmit}>Checkout</Button>
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

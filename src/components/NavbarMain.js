import React, {useState, useRef} from "react";
import { Navbar, Nav, NavDropdown,Form,FormControl, Button, Container } from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route,Link, useNavigate} from "react-router-dom";
import Film from "../Bookings/film.json"
import filmSearch from "./filmSearch"

const NavbarMain=({film, i})=>{
  const [searchTerm,setSearchTerm] = useState('');
  const {searchRef, setSearchRef} = useRef([]);
  const navigate = useNavigate();
    const handleClick = (name) => {
        window.localStorage.setItem('name', name);
        navigate("/Search/");
    }
    return (
      <header>
        <div>
         <Navbar bg="dark" variant={"dark"} expand="lg">
          <Container>
            <Navbar.Brand as={Link} to={"/"}>QA Cinemas</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                <NavDropdown title="Galleries" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to={"/OnNow"}>What's On?</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/ComingSoon"}>Coming Soon...</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to={"/Films"}>Book a film</Nav.Link>
                <Nav.Link as={Link} to={"/Classification"}>Classications</Nav.Link>
                <Nav.Link as={Link} to={"/Screens"}>Welcome to the BIG screen</Nav.Link>
                <NavDropdown title="Locations" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to={"/gettingthere"}>Finding Us?</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/whatsnear"}>What's Near Us?</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to={"/Discussion"}>Discussion</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  id="search"
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={e=>setSearchTerm(e.target.value)}
                />
                <Button onClick={() => handleClick(searchTerm)} variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      </header>
    );
}
export default NavbarMain
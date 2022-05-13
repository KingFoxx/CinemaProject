import { Navbar, Nav, NavDropdown,Form,FormControl, Button, Container } from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";

const NavbarMain=()=>{
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
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      </header>
    );
}
export default NavbarMain
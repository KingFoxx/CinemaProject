import { Navbar, Nav, NavDropdown,Form,FormControl, Button, Container } from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {useState, useReducer, useRef} from 'react';
import axios from 'axios';

const formReducer = (state, event) => {
  return {...state, [event.name]: event.value}
}

const NavbarMain=()=>{

    const [formData, setFormData] = useReducer(formReducer, {});
    
    const [loginState, setLoginState] = useState(false);
    const [invalidUserState, setInvalidUserState] = useState("");

    const loginRef = useRef(false);
    const customerRef = useRef({});

    const initiateLogin = () => {
      console.log("login button pressed");
      console.log(formData.user_name + " : " + formData.password);
      if(!loginState) {
        let refPromise = axios.post("http://localhost:4040/customer/read", {
          username : formData.user_name,
          password : formData.password
        });
        refPromise.then((res) => {
          console.log(res);

          if (res.data.length != 0) {
            loginRef.current = true;
            customerRef.current = res.data[0];
            setLoginState(true);
            setInvalidUserState("");
            console.log("customer ref dot current is:");
            console.log(customerRef.current);
          } else {
            setInvalidUserState("Invalid username or password!");
          }

          // console.log("Login state: " + loginState);
          // console.log("Login Ref: " + loginRef.current);
          // console.log("Customer Ref: " + customerRef.current);
        });
      } else {
        loginRef.current = false;
        customerRef.current = [];
        setLoginState(false);
        setInvalidUserState("You've been logged out!");

        // console.log("@logout Login state: " + loginState);
        // console.log("@logout Login Ref: " + loginRef.current);
        // console.log("@logout Customer Ref: " + customerRef.current);
      }
    }

    const handleChange = event => {
      setFormData({
        name: event.target.name,
        value: event.target.value
      });
    }

    return (
      <header>
        <div>
         <Navbar bg="dark" variant={"dark"} expand="lg">
          <div>
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
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
          </div>
          
        </Navbar>
        <Navbar bg="dark" variant={"dark"} expand="lg">
        <div class="container" style={{width: "100%"}}>
            <Container class="row">
              <div class="col">Welcome {customerRef.current.length == 0 ? "Guest" : customerRef.current.name}</div>
            </Container>
            <Container class="col"></Container>
            <Container>
            <div class="col">
                <NavDropdown class="row" title={loginState ? "Logout" : "Login"}>
                  <p name="info_text" style={{color: "red", marginLeft: 4}}>{invalidUserState}</p>
                  <input onChange={handleChange} name="user_name" class="row" style={{padding: 4, margin: 8, width: "92%"}} height={2} type="text" placeholder="username"/>
                  <input onChange={handleChange} name="password" class="row" style={{padding: 4, margin: 8, width: "92%"}} type="password" placeholder="password"/>
                  <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: 10}}>
                    <Button onClick={initiateLogin}>{loginState ? "Logout" : "Login"}</Button><br/>
                  </div>
                  <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: 6}}>
                    <Button>Create Account</Button>
                  </div>
                  
                </NavDropdown>
              </div>
            </Container>
          </div>
        </Navbar>
      </div>
      </header>
    );
}
export default NavbarMain
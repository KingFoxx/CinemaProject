import { Carousel } from "react-bootstrap";
import "../App.css";
import batman from "../Images/batman.jpeg";
import spiderMan from "../Images/Spider-man.jpg";
import shangChi from "../Images/shang-chi.jpg";

const Home = () => {
  return (
    <body>
      <div className="App">
        <h1>Welcome to Fantastic 4 Cineams!</h1><br/>
        <Carousel>
          <Carousel.Item>
            <img
              className="carousel-img"
              src={batman}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src={spiderMan}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src={shangChi}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </body>
  );
};
export default Home;

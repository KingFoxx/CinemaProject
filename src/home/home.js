import { Carousel } from "react-bootstrap";
import "../App.css";
import batman from "../Images/batman.jpeg";
import spiderMan from "../Images/Spider-man.jpg";
import shangChi from "../Images/shang-chi.jpg";

const Home = () => {
  return (
      <div className="App">
        <h1 className="header">Latest Additions!</h1><br/>
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="carousel-img"
              src={batman}
              alt="First slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src={spiderMan}
              alt="Second slide"
            />

            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src={shangChi}
              alt="Third slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <br/>
      </div>
  );
};
export default Home;

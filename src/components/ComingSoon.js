import { Carousel } from "react-bootstrap";
import "../App.css";
import batman from "../Images/batman.jpeg";
import spiderMan from "../Images/Spider-man.jpg";
import shangChi from "../Images/shang-chi.jpg";
import doctorstrange from "../Images/Doctor-Strange.jpg";


const ComingSoon = () => {
  return (
      
      <div className="App">
        <h1 className="header">Coming Soon to the Cinema</h1><br/>
        <Carousel>
          <Carousel.Item>
            <img
              className="carousel-img"
              src={batman}
              alt="Batman Movie"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src={spiderMan}
              alt="SpiderMan Movie"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src={shangChi}
              alt="ShangChi Movie"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src={doctorstrange}
              alt="DoctorStrange Movie"
            />
          </Carousel.Item>
        </Carousel>
        <br/>
      </div>
  );
};
export default ComingSoon;

import { Carousel } from "react-bootstrap";
import "../App.css";
import batman from "../Images/batman.jpeg";
import spiderMan from "../Images/Spider-man.jpg";
import shangChi from "../Images/shang-chi.jpg";
import doctorstrange from "../Images/Doctor-Strange.jpg";


const ComingSoon = () => {
  return (
      
      <div className="App">
        <h1>Coming Soon to the Cinema</h1><br/>
        <Carousel>
          <Carousel.Item>
              <a href="/batman">
            <img
              className="carousel-img"
              src={batman}
              alt="Batman Movie"
              href
            />
            </a>
            <Carousel.Caption>
              <h3 className="text-gallery">Batman Movie</h3>
              <p className="text-gallery">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <a href="/spiderman">
            <img
              className="carousel-img"
              src={spiderMan}
              alt="SpiderMan Movie"
            />
            </a>
            <Carousel.Caption>
              <h3 className="text-gallery">SpiderMan Movie</h3>
              <p className="text-gallery">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <a href="/shangchi">
            <img
              className="carousel-img"
              src={shangChi}
              alt="ShangChi Movie"
            />
            </a>
            <Carousel.Caption>
              <h3 className="text-gallery">ShangChi Movie</h3>
              <p className="text-gallery">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <a href="/doctorstrange">
            <img
              className="carousel-img"
              src={doctorstrange}
              alt="DoctorStrange Movie"
            />
            </a>
            <Carousel.Caption>
              <h3 className="text-gallery">DoctorStrange Movie</h3>
              <p className="text-gallery">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <br/>
      </div>
  );
};
export default ComingSoon;

import { Carousel } from "react-bootstrap";
import "../App.css";
import lotr1 from "../Images/lotr1.jpg";
import lotr2 from "../Images/lotr2.jpg";
import lotr3 from "../Images/lotr3.jpg";
import lotr4 from "../Images/lotr4.jpg";


const ComingSoon = () => {
  return (
    <body>
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
              <h3>Batman Movie</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
              <h3>SpiderMan Movie</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
              <h3>ShangChi Movie</h3>
              <p>
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
              <h3>DoctorStrange Movie</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </body>
  );
};
export default ComingSoon;

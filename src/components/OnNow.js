import { Carousel } from "react-bootstrap";
import "../App.css";
import lotr1 from "../Images/lotr1.jpg";
import lotr2 from "../Images/lotr2.jpg";
import lotr3 from "../Images/lotr3.jpg";
import lotr4 from "../Images/lotr4.jpg";


const ComingSoon = () => {
  return (
      <div className="App">
        <h1 className="header">What's Currently on</h1><br/>
        <Carousel>
          <Carousel.Item>
              <a href="/lotr1">
            <img
              className="carousel-img"
              src={lotr1}
              alt="The Lord of the Rings: The Fellowship of the Ring"
              href
            />
            </a>
            <Carousel.Caption>
              <h3 className="text-gallery">The Lord of the Rings: The Fellowship of the Ring</h3>
              <p className="text-gallery">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <a href="/lotr2">
            <img
              className="carousel-img"
              src={lotr2}
              alt="The Lord of the Rings: The Two Towers"
            />
            </a>
            <Carousel.Caption>
              <h3 className="text-gallery">The Lord of the Rings: The Two Towers</h3>
              <p className="text-gallery">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <a href="/lotr3">
            <img
              className="carousel-img"
              src={lotr3}
              alt="The Lord of the Rings: The Return of the King"
            />
            </a>
            <Carousel.Caption>
              <h3 className="text-gallery">The Lord of the Rings: The Return of the King</h3>
              <p className="text-gallery">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <a href="/lotr4">
            <img
              className="carousel-img"
              src={lotr4}
              alt="The Lord of the Rings: The Rings of Power"
            />
            </a>
            <Carousel.Caption>
              <h3 className="text-gallery">The Lord of the Rings: The Rings of Power</h3>
              <p className="text-gallery">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <br/>
      </div>
      
  );
};
export default ComingSoon;

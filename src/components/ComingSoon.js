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
            <Carousel.Caption>
              <h3 className="text-gallery">Batman Movie</h3>
              <p className="text-gallery">The film sees Batman, who has been fighting crime in Gotham City for two years, uncover corruption while pursuing the Riddler (Dano), a serial killer who targets Gotham's elite.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src={spiderMan}
              alt="SpiderMan Movie"
            />
            <Carousel.Caption>
              <h3 className="text-gallery">SpiderMan Movie</h3>
              <p className="text-gallery">When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src={shangChi}
              alt="ShangChi Movie"
            />
            <Carousel.Caption>
              <h3 className="text-gallery">ShangChi Movie</h3>
              <p className="text-gallery">
              Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src={doctorstrange}
              alt="DoctorStrange Movie"
            />
            <Carousel.Caption>
              <h3 className="text-gallery">DoctorStrange Movie</h3>
              <p className="text-gallery">After a horrible car accident, brilliant neurosurgeon Stephen Strange must find a way and a cure to healing his hands</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <br/>
      </div>
  );
};
export default ComingSoon;

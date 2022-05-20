import { Carousel } from "react-bootstrap";
import lotr1 from "../Images/lotr1.jpg";
import lotr2 from "../Images/lotr2.jpg";
import lotr3 from "../Images/lotr3.jpg";
import lotr4 from "../Images/lotr4.jpg";


const ComingSoon = () => {
  return (
      <div className="App" id="onNow">
        <h1 className="header">What's Currently on</h1><br/>
        <Carousel>
          <Carousel.Item>
            <img
              className="carousel-img"
              src={lotr1}
              alt="The Lord of the Rings: The Fellowship of the Ring"
              href
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src={lotr2}
              alt="The Lord of the Rings: The Two Towers"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src={lotr3}
              alt="The Lord of the Rings: The Return of the King"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src={lotr4}
              alt="The Lord of the Rings: The Rings of Power"
            />
           
          </Carousel.Item>
        </Carousel>
        <br/>
      </div>
      
  );
};
export default ComingSoon;

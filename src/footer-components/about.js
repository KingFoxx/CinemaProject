import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Mateusz from "../Images/Mateusz.jpg";
import Salman from "../Images/Salman.png";
import Dev from "../Images/Dev.jpg";

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div>
          <h2 className="header">About The Team</h2>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 my-auto">
            <p>Hello I'm Matt</p>
            <div className="flex text-2xl">
            <a target="_blank" href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} className="social-icon" size="2xl"></FontAwesomeIcon></a>
              <FontAwesomeIcon icon={faGithub} className="social-icon" size="2xl"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" mask={['circle']} size="2xl"></FontAwesomeIcon>
            </div>
          </div>
          <div className="col sm-12 col-md-6 my-auto">
            <img
              className="about-image"
              src={Mateusz}
              alt="Mateusz Chocianowski"
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="row h-100">
        <div class="col sm-12 col-md-6 my-auto">
          <img class="about-image" src={Dev} alt="Dev Bakin" />
        </div>
        <div class="col-sm-12 col-md-6 my-auto">
          <p>Hello I'm Dev.</p>
          <div className="flex text-2xl">
            <a target="_blank" href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} className="social-icon" size="2xl"></FontAwesomeIcon></a>
              <FontAwesomeIcon icon={faGithub} className="social-icon" size="2xl"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" size="2xl"></FontAwesomeIcon>
            </div>
        </div>
      </div>
      <hr />
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-sm-12 col-md-6 my-auto">
            <p>Hello I'm Salman</p>
            <div className="flex text-2xl">
            <a target="_blank" href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} className="social-icon" size="2xl"></FontAwesomeIcon></a>
              <FontAwesomeIcon icon={faGithub} className="social-icon" size="2xl"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" size="2xl"></FontAwesomeIcon>
            </div>
          </div>
          <div className="col sm-12 col-md-6 my-auto">
            <img className="about-image" src={Salman} alt="Salman" />
          </div>
        </div>
      </div>
      <hr />
      <div className="row h-100">
        <div class="col sm-12 col-md-6 my-auto">
          <img class="home-image" src="#" alt="Badul" />
        </div>
        <div class="col-sm-12 col-md-6 my-auto">
          <p>Hello I'm Badul.</p>
          <div className="flex text-2xl">
            <a target="_blank" href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} className="social-icon" size="2xl"></FontAwesomeIcon></a>
              <FontAwesomeIcon icon={faGithub} className="social-icon" size="2xl"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" size="2xl"></FontAwesomeIcon>
            </div>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default About;
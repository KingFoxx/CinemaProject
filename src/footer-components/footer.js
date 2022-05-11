import "../App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import OpeningTimes from "./opening-times";

const Footer = () => {
  return (
    <footer> 
      <div className="footer">
        <div class="container">
          <div class="row">
            <div class="col l4 offset-l4 s12">
              <h5 class="footer-heading">QA Cinemas LTD.</h5>
            </div>
          </div>
          <div className="row">
            <div className="col l4 offset-l4 s12">
              <ul className="bulletless-lists">
                <li>
                  <Link to="/opening-times">Opening Times</Link>
                </li>
                <li>
                <Link to="/contact">Contact Us</Link>
                </li>
                <li as={Link} to={"/"}>
                  About Us
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">© 2022 Copyright Text</div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

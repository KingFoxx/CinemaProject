import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarMain from "./components/NavbarMain";
import Home from "./home/home";
import Footer from "./footer-components/footer";
import {BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
import OpeningTimes from "./footer-components/opening-times";
import Contact from "./footer-components/contact"
import About from "./footer-components/about"

const App = () => {
  return (
    <Router>
      <div className="App">
      <main>
      <NavbarMain />
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/opening-times" element={<OpeningTimes/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        </Routes>
        <Footer/>
      </main>
    </div>
    </Router>
    
  );
};

export default App;

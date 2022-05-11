import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarMain from "./components/NavbarMain";
import Home from "./home/home";
import Footer from "./footer-components/footer";
import {BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
import OpeningTimes from "./footer-components/opening-times";

const App = () => {
  return (
    <Router>
      <div className="App">
      <header>
        <NavbarMain />
      </header>
      <main>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/opening-times" element={<OpeningTimes/>}/>
        </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
    </Router>
    
  );
};

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarMain from "./components/NavbarMain";
import Home from "./components/home";
import Footer from "./footer-components/footer";
import {BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
import OpeningTimes from "./footer-components/opening-times";
import GettingThere from "./components/gettingthere";
import WhatsNear from "./components/whatsnear";
import Classification from "./components/Classification";
import Contact from "./footer-components/contact"
import About from "./footer-components/about"
import Films from "./Bookings/Films"
import Screens from "./components/Screens";
import ComingSoon from "./components/ComingSoon";
import OnNow from "./components/OnNow";



const App = () => {
  return (
    <Router>
      <div className="App">
      <main>
      <NavbarMain />
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Films" element={<Films/>}/>
        <Route path="/gettingthere" element={<GettingThere/>}/>
        <Route path="/whatsnear" element={<WhatsNear/>}/>
        <Route path="/Classification" element={<Classification/>}/>
        <Route path="/opening-times" element={<OpeningTimes/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Screens" element={<Screens/>}/>
        <Route path="/ComingSoon" element={<ComingSoon/>}/>
        <Route path="/OnNow" element={<OnNow/>}/>
        </Routes>
        <Footer/>
      </main>
    </div>
    </Router>
    
  );
};

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import useCart from './hooks/use-cart';
import CartContext from './Bookings/cart-context';
import NavbarMain from "./components/NavbarMain";
import Home from "./components/home";
import Footer from "./footer-components/footer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import OpeningTimes from "./footer-components/opening-times";
import GettingThere from "./components/gettingthere";
import WhatsNear from "./components/whatsnear";
import Classification from "./components/Classification";
import Contact from "./footer-components/contact"
import About from "./footer-components/about"
import Discussion from "./components/Discussion";
import Films from "./Bookings/Films"
import Screens from "./components/Screens";
import ComingSoon from "./components/ComingSoon";
import OnNow from "./components/OnNow";
import FilmDetail from "./Bookings/FilmDetail";
import Cart from "./Bookings/Cart";
import Checkout from "./Bookings/Checkout"


const App = () => {
  return (
    <CartContext.Provider value={useCart([])}>
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
          <Route path="/discussion" element={<Discussion/>}/>
          <Route path="/Screens" element={<Screens/>}/>
          <Route path="/ComingSoon" element={<ComingSoon/>}/>
          <Route path="/OnNow" element={<OnNow/>}/>
          <Route path="/FilmDetail/:id" element={<FilmDetail/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/Checkout" element={<Checkout/>}/>
        </Routes>
        <Footer/>
      </main>
    </div>
    </Router>
  </CartContext.Provider>
  );
};

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarMain from "./components/NavbarMain";
import Home from "./home/home";
import Footer from "./footer-components/footer";
const App = () => {
  return (
    <div className="App">
      <header>
        <NavbarMain />
      </header>
      <body>
        <Home />
      </body>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default App;

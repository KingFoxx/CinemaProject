import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarMain from "./components/NavbarMain";
import Home from "./home/home";
const App = () => {
  return (
    <div className="App">
      <header>
        <NavbarMain />
      </header>
      <body>
        <Home />
      </body>
    </div>
  );
};

export default App;

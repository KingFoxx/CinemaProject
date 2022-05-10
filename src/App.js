import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarMain from "./components/NavbarMain";
import Home from "./home/home";
const App = () => {
  return (
    
      <header className="App">
      <NavbarMain />
      <Home/>
      </header>
  )
};

export default App;

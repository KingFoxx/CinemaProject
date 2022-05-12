import Screen1 from "../Images/Screen1.jpg";
import Screen2 from "../Images/Screen2.jpg";
import DirectorBox from "../Images/Directorbox.jpg";
import "..//App.css";


const Screens = () => {
    return (
<div className="row">
  <div className="column">
    <img src={Screen1} alt="Screen1" />
    <p>
        Adult :
        Child :
    </p>
  </div>
  <div className="column">
    <img src={Screen2} alt="Screen2" />
    <p>
        Adult :
        Child :
    </p>
  </div>
  <div className="column">
    <img src={DirectorBox} alt="Directorbox" />
    <p>
        Adult :
        Child :
    </p>
  </div>
</div>

    );
};
export default Screens;

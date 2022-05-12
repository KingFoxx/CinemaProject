import Screen1 from "../Images/Screen 1.png";
import Screen2 from "../Images/Screen 2.png";
import DirectorBox from "../Images/Director Box.png";
import "..//App.css";


const Screens = () => {
    return (
<div class="row">
  <div class="column">
    <img src={Screen1} alt="Snow" style="width:100%"/>
    <p>
        Adult :
        Child :
    </p>
  </div>
  <div class="column">
    <img src={Screen2} alt="Forest" style="width:100%"/>
    <p>
        Adult :
        Child :
    </p>
  </div>
  <div class="column">
    <img src={DirectorBox} alt="Mountains" style="width:100%"/>
    <p>
        Adult :
        Child :
    </p>
  </div>
</div>

    );
};
export default Screens;

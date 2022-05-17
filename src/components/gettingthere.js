import "..//App.css";
import Exterior from "../Images/QA-HQ.jpg";
import Parking from "../Images/Parking.png";

const GettingThere = () => {
  return (
<div>
<h1 className="header">How to get here?</h1><br/>
<div className="newbody App">
<img src={Exterior} alt="Screen1" className="newimg"/>
<p>3rd Floor, International House, 1 St Katharine's Way,London E1W 1UN</p>

    <img src={Parking} alt="Screen2"className="newimg" />
    <p>Nearest Parking: Minories Car Park, 1 Shorter St, London E1 8LP</p>

        <p>Directions from TowerHill: Turn left onto Tower Hill Road as you exit
        the station, right onto A100, Cinema is located 600 meters away on your
        left hand side.</p>
            </div>
            </div>
  );
};
export default GettingThere;

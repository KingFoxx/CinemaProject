
import "..//App.css";
import Exterior from "../Images/cinemaExterior.jpg";
import Parking from "../Images/Parking.png";


const GettingThere = () => {
    return(
    <div class="newbody App" >
    <h1> How To Find Us </h1>
        <p>3rd Floor, International House, 1 St Katharine's Way,London E1W 1UN</p>
        <img 
              src={Exterior}
              alt="Exterior of Venue"
              class="newimg"
            />
        <p>Nearest Parking: Minories Car Park, 1 Shorter St, London E1 8LP </p>
        <img
              src={Parking}
              alt="Nearest Parking"
              class="newimg"
            />
        <p> Directions from TowerHill: Turn left onto Tower Hill Road as you exit the station, right onto A100, Cinema is located 600 meters away on your left hand side.  </p>

    </div>
    );
};
export default GettingThere;
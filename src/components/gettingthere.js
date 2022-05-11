
import "..//App.css";
import Exterior from "../Images/cinemaExterior.jpg";
import Parking from "../Images/Parking.png";


const GettingThere = () => {
    return(
    <div class="newbody App" >
    <h1> How To Find Us </h1>
        <p>118 Lothian Road Edinburgh EH3 8BG</p>
        <img 
              src={Exterior}
              alt="Exterior of Venue"
              class="newimg"
            />
        <p>Nearest Parking: 30 Semple St, Edinburgh EH3 8BL </p>
        <img
              src={Parking}
              alt="Nearest Parking"
              class="newimg"
            />
        <p> Directions from Haymarket TrainStation: Turn right onto Clifton Terrace, straight onto Morrison Street, Cinema is located 600 meters away.  </p>

    </div>
    );
};
export default GettingThere;
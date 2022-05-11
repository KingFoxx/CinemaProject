import "../App.css";
import QaCinema from "../Images/QA-HQ.jpg";
const OpeningTimes = () =>{
    return(
        <div className="OpeningTimes">
        <h1 className="header">Opening Times</h1>
            <ul className="bulletless-lists">
                <li> Sunday-Thursday: 10:00am - 00:00am</li>
                <li> Friday-Saturday: 10:00am - 02:00am</li><br/>
                <img
                className="QaCinema"
                src={QaCinema}
                alt="First slide"/>
            </ul>
        </div>
    );
}
export default OpeningTimes;
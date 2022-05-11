import "../App.css";

const OpeningTimes = () =>{
    return(
        <div>
        <h1 className="header">Opening Times</h1>
            <ul className="bulletless-lists">
                <li> Sunday-Thursday: 10:00am - 00:00am</li>
                <li> Friday-Saturday: 10:00am - 02:00am</li>
            </ul>
        </div>
    );
}
export default OpeningTimes;
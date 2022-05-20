import Screen1 from "../Images/Screen1.jpg";
import Screen2 from "../Images/Screen2.jpg";
import DirectorBox from "../Images/Directorbox.jpg";
import "..//App.css";


const Screens = () => {
    return (
<div>
<h1 className="header">Our Screens</h1><br/>
<div className="newbody App">
<img src={Screen1} alt="Screen1" className="newimg"/>
<p>Sit in our cheapest seats imaginable! Folding chairs that offer no support for the duration of the movie. Be quick, your seat might be broken or sticky. None of which is our problem.</p>

    <img src={Screen2} alt="Screen2"className="newimg" />
    <p>Sit in our cheapest seats imaginable! Folding chairs that offer no support for the duration of the movie. Be quick, your seat might be broken or sticky. None of which is our problem.</p>

        <img src={DirectorBox} alt="Directorbox" className="newimg"/>
        <p> Bringing an innovative lifestyle approach to our venues, where you swap your soft drink for a nice glass of red wine and a slice of freshly made pizza served to your seat. We create a warm and friendly atmosphere, with an excellent food and drink selection and fantastic customer service. With a wide array of mainstream, independent and classic films, special events, launches and a diverse calendar of live satellite broadcasts, there is something for everyone</p>
            </div>
            </div>

            );
};


export default Screens;

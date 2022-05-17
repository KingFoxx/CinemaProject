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
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo in, impedit quod dicta est facilis consectetur laborum eius vitae voluptate asperiores, vel ipsa laboriosam odit esse beatae nesciunt architecto deserunt.</p>

    <img src={Screen2} alt="Screen2"className="newimg" />
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo in, impedit quod dicta est facilis consectetur laborum eius vitae voluptate asperiores, vel ipsa laboriosam odit esse beatae nesciunt architecto deserunt.</p>

        <img src={DirectorBox} alt="Directorbox" className="newimg"/>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo in, impedit quod dicta est facilis consectetur laborum eius vitae voluptate asperiores, vel ipsa laboriosam odit esse beatae nesciunt architecto deserunt.</p>
            </div>
            </div>

            );
};


export default Screens;

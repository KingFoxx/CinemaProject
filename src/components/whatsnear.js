
import "..//App.css";
import bread from "../Images/Bread.jpg";
import bentoya from "../Images/Bentoya.jpg";
import byron from "../Images/Byron.jpg";
import raging from "../Images/Raging-Bull.jpg";


const WhatsNear = () => {
    return (
        <div>
            <div className="newbody App">
            <img src={bread} alt="Bread Meats Bread" className="newimg"/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo in, impedit quod dicta est facilis consectetur laborum eius vitae voluptate asperiores, vel ipsa laboriosam odit esse beatae nesciunt architecto deserunt.</p>

                <img src={bentoya} alt="Bentoya"className="newimg" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo in, impedit quod dicta est facilis consectetur laborum eius vitae voluptate asperiores, vel ipsa laboriosam odit esse beatae nesciunt architecto deserunt.</p>

                    <img src={byron} alt="Byron" className="newimg"/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo in, impedit quod dicta est facilis consectetur laborum eius vitae voluptate asperiores, vel ipsa laboriosam odit esse beatae nesciunt architecto deserunt.</p>

                        <img src={raging} alt="Raging Bull"className="newimg" />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo in, impedit quod dicta est facilis consectetur laborum eius vitae voluptate asperiores, vel ipsa laboriosam odit esse beatae nesciunt architecto deserunt.</p>
                        </div>
                        </div>

                        );
};


                        export default WhatsNear;
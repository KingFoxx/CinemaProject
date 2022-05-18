
import "..//App.css";
import bread from "..//Images/Bread.jpg";
import bentoya from "../Images/Bentoya.jpg";
import byron from "../Images/Byron.jpg";
import raging from "../Images/Raging-Bull.jpg";


const WhatsNear = () => {
    return (
        <div>
            <div className="newbody App">
            <img src={bread} alt="Bread Meats Bread" className="newimg"/>
            <p>We offer quality, fresh food, that’s made in-house, using only the best local ingredients. Our food portions are very generous so pop round for a meal and you will not leave hungry. info@breadmeatsbread.com
0131 225 3000 Buy one burger for the price of two and get 1 free.</p>

                <img src={bentoya} alt="Bentoya"className="newimg" />
                <p>With 20 years of experience cooking in the finest restaurants, our chef is excited to present their vision to you and all our guests 0131 6293993 All you can eat ramen with valid ticket* *All you can eat only lasts 5 minutes</p>

                    <img src={byron} alt="Byron" className="newimg"/>
                    <p>American-inspired chain diner serving posh hamburgers with a choice of toppings, sides & salads. Salad free for those who weight over 90KG. 0131 556 0930 byron.co.uk</p>

                        <img src={raging} alt="Raging Bull"className="newimg" />
                        <p>Fashionable, convivial cocktail spot specializing in espresso martinis & drink-making classes.£6 cocktail deal after movie with valid ticket. 0131 228 5558 theragingbulledinburgh.co.uk</p>
                        </div>
                        </div>

                        );
};


                        export default WhatsNear;
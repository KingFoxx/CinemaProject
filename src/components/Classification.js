import "..//App.css";
import ClassU from "../Images/ClassU.png";
import ClassPG from "../Images/ClassPG.png";
import Class12 from "../Images/Class12.png";
import Class15 from "../Images/Class15.png";
import Class18 from "../Images/Class18.png";

const Classification = () => {
  return (
    <div className="OpeningTimes">
      <h1 className="header"> Movie Classifications </h1><br/>
      <img src={ClassU} width="50" alt="" />
      <img src={ClassPG} width="50" alt="" />
      <img src={Class12} width="50" alt="" />
      <img src={Class15} width="50" alt="" />
      <img src={Class18} width="50" alt="" />

      <span>
        For more information please follow this link
        https://www.bbfc.co.uk/about-classification .
      </span>
    </div>
  );
};

export default Classification;

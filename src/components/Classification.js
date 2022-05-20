import "..//App.css";
import ClassU from "../Images/ClassU.png";
import ClassPG from "../Images/ClassPG.png";
import Class12 from "../Images/Class12.png";
import Class15 from "../Images/Class15.png";
import Class18 from "../Images/Class18.png";

const Classification = () => {
  return (
 
<ul class="cards">
  <li>
    <a href="https://www.bbfc.co.uk/about-classification" class="card">
      <img src={ClassU} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">                     
          <div class="card__header-text">
            <h3 class="card__title">Suitable for all</h3>            
          </div>
        </div>
        <p class="card__description">A U film should be suitable for audiences aged four years and over, although it is impossible to predict what might upset any particular child.</p>
      </div>
    </a>      
  </li>
  <li>
    <a href="https://www.bbfc.co.uk/about-classification" class="card">
      <img src={ClassPG} class="card__image" alt="" />
      <div class="card__overlay">        
        <div class="card__header">                
          <div class="card__header-text">
            <h3 class="card__title">Parental Guidance</h3>
          </div>
        </div>
        <p class="card__description">General viewing, but some scenes may be unsuitable for young children. A PG film should not unsettle a child aged around eight or older.</p>
      </div>
    </a>
  </li>
  <li>
    <a href="https://www.bbfc.co.uk/about-classification" class="card">
      <img src={Class12} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">                  
          <div class="card__header-text">
            <h3 class="card__title">Suitable for 12 years and over</h3>       
          </div>
        </div>
        <p class="card__description">No one younger than 12 may see a 12A film in a cinema unless accompanied by an adult. </p>
      </div>
    </a>
  </li>
  <li>
    <a href="https://www.bbfc.co.uk/about-classification" class="card">
      <img src={Class15} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">                  
          <div class="card__header-text">
            <h3 class="card__title">Suitable only for 15 years and over</h3>           
          </div>
        </div>
        <p class="card__description">No one younger than 15 may see a 15 film in a cinema. No one younger than 15 may rent or buy a 15 rated video work.</p>
      </div>
    </a>
  </li>
  <li>
    <a href="https://www.bbfc.co.uk/about-classification" class="card">
      <img src={Class18} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header"> 
          <div class="card__header-text">
            <h3 class="card__title">18 – Suitable only for adults</h3>
          </div>          
        </div>
        <p class="card__description">No one younger than 18 may see an 18 film in a cinema. No one younger than 18 may rent or buy an 18 rated video work. </p>
      </div>
    </a>
  </li>    
</ul>
  );
};
export default Classification;

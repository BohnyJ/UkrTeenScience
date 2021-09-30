import React from "react";
import "./Partners.css";
import mc from "./img/kmc.png";
import ap from "./img/ap.png";
import biologus from "./img/Biolympus.png";
import teen from "./img/teen.png";

function Partners(props) {
  return (
    <div className="partnerds section container dark-flat">
      <h2 id="partners" tabIndex="-1">
        Партнери
      </h2>
      <div className="partners-wrapper ticker-wrapper">
        <div className="ticker-wrapper__first-half">
          <img src={mc} alt="Partner" />
          <img src={ap} alt="Partner" />
        </div>
        <div className="ticker-wrapper__second-half">
          <img src={biologus} alt="Partner" />
          <img src={teen} alt="Partner" />
        </div>
      </div>
    </div>
  );
}

export default Partners;

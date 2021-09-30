import React, { Component } from "react";
import "./About.css";
import Card from "./Card";
import scilogo from "./img/scilogo.png";
import bio from "./img/bio.png";
import mask from "./img/mask.png";

class About extends Component {
  render() {
    return (
      <div className="container section">
        <h2 id="about" tabIndex="-1">
          Хто ми?
        </h2>
        <span className="subtitle">
          UkrTeenScience - це молодіжна громадська організація, заснована
          навесні 2020-го року, метою якої є розвиток та популяризація
          української молодіжної науки
        </span>
        <div className="cards">
          <Card
            title="Громадська діяльність"
            src={scilogo}
            txt="Наша команда періодично проводить наукові івенти та конкурси, створюємо навчально-менторські програми для українських школярів та підтримуємо інші наукові спільноти."
          />
          <Card
            title="Науково-технічні розробки"
            src={mask}
            txt="МГО UkrTeenScience займається дослідженнями у сфері біології, мікроелектроніки та штучного інтелекту."
          />
          <Card
            title="Наукпоп"
            src={bio}
            txt="Окремої уваги заслуговуть наші офіційні сторінки в соціальних мережах, де ми публікуємо контент для популяризації науки серед молоді. Саме з цього почалась історія UkrTeenScience."
          />
        </div>
      </div>
    );
  }
}

export default About;

import React, { Component } from "react";
import Button from "./Button";
import "./Intro.css";

function Intro(props) {
  return (
    <div className="intro">
      <div className="block-title">
        <h1 id="intro" tabIndex="-1">
          UkrTeenScience
        </h1>
        <span className="subtitle">
          У ґазди є ж бо гевеї, які шиють прості килими, наче хащі фацелій
        </span>
        <div className="block-buttons">
          <Button txt="Більше" href="#about" />
          <Button txt="Підтримати" />
        </div>
      </div>
      <div className="gradient"></div>
    </div>
  );
}

export default Intro;

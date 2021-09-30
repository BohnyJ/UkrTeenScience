import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <span className="subtitle">{props.title}</span>
      <img src={props.src} alt="Image" />
      <span className="txt">{props.txt}</span>
    </div>
  );
}

export default Card;

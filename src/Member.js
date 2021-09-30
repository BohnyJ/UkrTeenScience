import React from "react";
import "./Member.css";
function Member(props) {
  return (
    <div className="member">
      <img src={props.src} alt="" />
      <span className="subtitle">{props.title}</span>
      <span className="txt">{props.txt}</span>
      <div className="icons">
        <a href={`mailto:${props.social.email}`}>
          <i className="far fa-envelope"></i>
        </a>
        <a href={`mailto:${props.social.telegram}`}>
          <i className="fab fa-telegram-plane"></i>
        </a>
        {props.social.facebook ? (
          <a href={props.social.facebook}>
            <i className="fab fa-facebook-square"></i>
          </a>
        ) : props.social.instagram ? (
          <a href={props.social.instagram}>
            <i className="fab fa-instagram"></i>
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default Member;

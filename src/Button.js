import React from "react";

function Button(props) {
  return (
    <a className="button" href={props.href}>
      {props.txt}
      <i className="fas fa-chevron-right"></i>
    </a>
  );
}

export default Button;

import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <footer id="contacts" tabIndex="-1" className="container section dark-flat">
      <div>
        <span className="txt">м. Чернігів, вул. Академіка Рибакова 57/124</span>
        <a href="">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="">
          <i className="fab fa-facebook-square"></i>
        </a>
        <a href="">
          <i className="fas fa-phone"></i>
        </a>
        <a href="">
          <i className="far fa-envelope"></i>
        </a>
      </div>
      <div>
        <span className="txt">© 2021 UkrTeenScience. All Right Reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;

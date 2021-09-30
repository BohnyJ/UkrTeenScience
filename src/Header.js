import { Component } from "react";
import logo from "./img/logo.png";
import "./Header.css";

class Header extends Component {
  openMenu() {
    let menu = document.getElementById("dropdown-menu");
    menu.className === "shown"
      ? (menu.className = "hidden")
      : (menu.className = "shown");
  }
  render() {
    return (
      <header>
        <nav className="container">
          <a href="#intro">
            <img src={logo} alt="Logo" className="logo" />
          </a>
          <ul className="menu">
            <a href="#about">
              <li>Про нас</li>
            </a>
            <a href="#projects">
              <li>Проєкти</li>
            </a>
            <a href="#results">
              <li>Результати</li>
            </a>
            <a href="#team">
              <li>Команда</li>
            </a>
            <a href="#partners">
              <li>Партнери</li>
            </a>
            <a href="#contacts">
              <li>Контакти</li>
            </a>
          </ul>
          <i id="hamburger" className="fas fa-bars" onClick={this.openMenu}></i>
          <ul id="dropdown-menu" className="hidden">
            <i className="fas fa-times" onClick={this.openMenu}></i>
            <a onClick={this.openMenu} href="#about">
              <li>Про нас</li>
            </a>
            <a onClick={this.openMenu} href="#projects">
              <li>Проєкти</li>
            </a>
            <a onClick={this.openMenu} href="#results">
              <li>Результати</li>
            </a>
            <a onClick={this.openMenu} href="#team">
              <li>Команда</li>
            </a>
            <a onClick={this.openMenu} href="#partners">
              <li>Партнери</li>
            </a>
            <a onClick={this.openMenu} href="#contacts">
              <li>Контакти</li>
            </a>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;

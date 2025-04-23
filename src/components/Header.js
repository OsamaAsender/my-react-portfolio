// Header.js
import React from 'react';
import myImage from '../images/myImage.png';

function Header() {
  return (
    <header id="home">
      <div className="navbar">
        <nav>
          <a href="#home" id="logo">Osama Asender</a>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className="header-content">
        <div className="content-text">
          <p><span className="text-primary">Hi there, I'm</span></p>
          <h1>Osama Asender</h1>
          <p className="title">FullStack Web Developer</p>
          <div className="social">
            <a href="https://www.linkedin.com/in/osama-asender-914119239/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/OsamaAsender">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
          <a href="#about" className="btn-primary">
            About me <i className="fa-solid fa-circle-arrow-down"></i>
          </a>
        </div>
        <img src={myImage} alt="Osama Asender" />
      </div>
    </header>
  );
}

export default Header;
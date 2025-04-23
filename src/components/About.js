// About.js
import React from 'react';

function About() {
  return (
    <section id="about">
      <div className="container">
        <h2>About Me</h2>
        <hr />
        <div className="about-content">
          <div className="col-1">
            <h3>I'm <span className="text-primary">Osama Asender,</span> a web developer</h3>
            <p>I'm a front-end web developer with a strong passion for creating visually appealing and user-friendly web
            applications. I am very passionate about improving my coding skills &amp; developing applications &amp;
            websites.</p>
            <p>I have also gained a solid foundation in HTML, CSS, and JavaScript. I am always eager to learn new
            technologies and techniques to enhance my skillset.</p>
          </div>
          <div className="col-2">
            <p><b>Age:</b> 23</p>
            <p><b>Email: </b>Osama.asndr@gmail.com</p>
            <p><b>Place: </b> Jordan - Zarqa</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
// Skills.js
import React from 'react';
import htmlImg from '../images/html.png';
import cssImg from '../images/css.png';
import jsImg from '../images/Js.jpg';
import reactImg from '../images/react.jpg';
import phpImg from '../images/php.png';
import githubImg from '../images/github.png';
import tsImg from '../images/ts.jpg';
import mysqlImg from '../images/mysql.jpg';

function Skills() {
  const skills = [
    { name: 'Html', img: htmlImg },
    { name: 'Css', img: cssImg },
    { name: 'JavaScript', img: jsImg },
    { name: 'React', img: reactImg },
    { name: 'Php', img: phpImg },
    { name: 'Github', img: githubImg },
    { name: 'Typescript', img: tsImg },
    { name: 'MySql', img: mysqlImg }
  ];

  return (
    <section id="skills">
      <div className="container">
        <h2>
          <i className="fa-solid fa-laptop-code"></i>
          Skills &amp; <span className="text-primary">Abilities</span>
        </h2>
        <hr />
        <div className="skills-content">
          <div className="row">
            {skills.map((skill, index) => (
              <div className="item" key={index}>
                <img src={skill.img} alt={skill.name} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
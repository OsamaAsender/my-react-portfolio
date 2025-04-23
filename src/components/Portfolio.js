// Portfolio.js
import React from 'react';
import projectImage from '../images/project-thumbnails/Prodac.png';

function Portfolio() {
  const projects = [
    {
      image: projectImage,
      title: 'HTML & CSS Mockup Template',
      link: './projects/prodac/HtmlMockPage/index.html'
    },
    {
      image: projectImage,
      title: 'Example Project',
      link: '#'
    },
    {
      image: projectImage,
      title: 'Example Project',
      link: '#'
    },
    {
      image: projectImage,
      title: 'Example Project',
      link: '#'
    },
    {
      image: projectImage,
      title: 'Example Project',
      link: '#'
    },
    {
      image: projectImage,
      title: 'Example Project',
      link: '#'
    }
  ];

  return (
    <section id="portfolio">
      <div className="container">
        <h2>
          <i className="fa-solid fa-laptop-code"></i>
          My <span className="text-primary">Portfolio</span>
        </h2>
        <hr />
        <div className="row">
          {projects.map((project, index) => (
            <div className="item" key={index}>
              <img src={project.image} alt={project.title} />
              <div className="item-content">
                <h3>{project.title}</h3>
                <a href={project.link}>Visit Website</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
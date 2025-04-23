// Services.js
import React from 'react';
import servicesIcon from '../images/icons/services.png';
import webDevelopmentIcon from '../images/icons/webdevelopment.jpg';
import responsiveDesignIcon from '../images/icons/responsivedesign.jpg';
import creativityIcon from '../images/icons/creativity.png';
import solutionIcon from '../images/icons/solution.png';
import designIcon from '../images/icons/design.png';
import supportIcon from '../images/icons/support.png';

function Services() {
  const services = [
    {
      icon: webDevelopmentIcon,
      title: 'Web Development',
      description: 'I can build a website using Html, Css and Javascript'
    },
    {
      icon: responsiveDesignIcon,
      title: 'Responsive Design',
      description: 'Your Website will be 100% Responsive for all devices: Tablets and Smartphones.'
    },
    {
      icon: creativityIcon,
      title: 'Creative Design',
      description: 'I can edit your current website by adding a new content to make it much better'
    },
    {
      icon: solutionIcon,
      title: 'Web Ideas',
      description: 'I could turn your ideas into real projects with high quality'
    },
    {
      icon: designIcon,
      title: 'Retouch',
      description: 'I can help you with Re-Designing your website'
    },
    {
      icon: supportIcon,
      title: 'Support',
      description: 'Support Available after Project Delivery'
    }
  ];

  return (
    <section id="services">
      <div className="container">
        <div className="heading">
          <img src={servicesIcon} alt="Services" />
          <h2>My <span className="text-primary">Services</span></h2>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div className="item" key={index}>
              <img src={service.icon} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
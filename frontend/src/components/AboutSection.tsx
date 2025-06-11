// src/components/AboutSection.js
import React from 'react';
import '../assets/css/AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about-us" className="about-section">
      <div className="container">
        <h2>About Our Company</h2>
        <p className="about-intro">
          A team dedicated to crafting innovative solutions
          that drive success and inspire change. <br></br> Learn more about our journey, values, and
          the people behind our work.
        </p>
        <div className="about-content">
          <div className="about-text">
            <h3>Our Mission</h3>
            <p>
              To empower businesses and individuals through cutting-edge technology and
              creative thinking, fostering growth and making a positive impact.
            </p>
            <h3>Our Vision</h3>
            <p>
              To be a leading force in innovation, recognized for our commitment to excellence,
              integrity, and the success of our clients and partners.
            </p>
          </div>
          {/* You could add an image here if desired */}
          {/* <img src="/path/to/team-image.jpg" alt="Our Team" className="about-image" /> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
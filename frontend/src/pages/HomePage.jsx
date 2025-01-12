import React, { useEffect } from 'react';
import { scene, camera, renderer } from '../three/scene';
import { addLights } from '../three/lights';
import { loadModel } from '../three/modelLoader';
import { addBackgroundCrosses } from '../three/background';
import { animate } from '../three/animation';
import { addBackgroundElements } from '../three/bgtext.js';
import Navbar from '../components/Navbar'; // Import Navbar component

import '../assets/css/HomePage.css'; // Import CSS for HomePage

import jetsketch1Path from '../assets/models/plane2.glb';

const HomePage = () => {
  useEffect(() => {
    const container = document.getElementById('about');
    const companyText = document.querySelector('.company-text');

    if (container) {
      // Append the Three.js renderer DOM element
      container.appendChild(renderer.domElement);

      // Add lights
      addLights();

      // Add background elements and crosses
      addBackgroundElements();
      addBackgroundCrosses();

      // Load the initial model
      loadModel(jetsketch1Path, (model) => {
        model.position.set(0, -10, -60);
        model.scale.set(4, 4, 4);
        animate(model)
      });

      // Start animation loop
      animate();
    } else {
      console.error('Container for scroll animation not found.');
    }

    // Add scroll listener to fade out text
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = window.innerHeight * 0.55; // Adjust fade-out within the viewport height
      const opacity = Math.max(0, 1 - scrollTop / maxScroll); // Calculate opacity (1 to 0)

      if (companyText) {
        companyText.style.opacity = opacity.toString(); // Set text opacity
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup scroll listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ height: '500vh', position: 'relative' }}>
      {/* Navbar */}
      <Navbar />

      {/* Three.js 3D Container */}
      <section
        id="about"
        style={{
          position: 'fixed', // Keeps the container in view
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          zIndex: -1, // Send it behind other elements
        }}
        aria-label="3D animated section"
      ></section>

      {/* "We Are A Company" Section */}
      <div className="company-text">
        <h1 className="company-title">We Are A Company</h1>
        <p className="company-description">
          Dedicated to innovative solutions and exceptional service.
        </p>
      </div>
    </div>
  );
};

export default HomePage;

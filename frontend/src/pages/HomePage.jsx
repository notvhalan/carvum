// src/pages/HomePage.js
import React, { useEffect } from 'react';
import { scene, camera, renderer } from '../three/scene'; // Assuming these are correctly set up
import { addLights } from '../three/lights';
import { loadModel } from '../three/modelLoader';
import { addBackgroundCrosses } from '../three/background';
import { animate } from '../three/animation';
import { addBackgroundElements } from '../three/bgtext.js';

import Navbar from '../components/Navbar';
import OurBusinessesSection from '../components/OurBusinessesSection'; // <-- Import new component
import AboutSection from '../components/AboutSection';     // <-- Import new component
import ContactSection from '../components/ContactSection';   // <-- Import new component
import bibsu4 from '/videos/bibsu4.mp4';  // adjust path if needed

import '../assets/css/HomePage.css';
// Ensure CSS for new components are imported within the components themselves or globally

import jetsketch1Path from '../assets/models/plane2.glb';

const HomePage = () => {
  useEffect(() => {
    // IMPORTANT: Changed id from 'about' to 'three-js-bg-container'
    const threeContainer = document.getElementById('three-js-bg-container');
    const companyText = document.querySelector('.company-text');

    if (threeContainer && threeContainer.childNodes.length === 0) { // Check if renderer already appended
      threeContainer.appendChild(renderer.domElement);

      addLights();
      addBackgroundElements();
      addBackgroundCrosses();

      loadModel(jetsketch1Path, (model) => {
        model.position.set(20, -10, -60);
        model.scale.set(3, 3, 3);
        animate(model) // Assuming animate() takes the model for specific animations, or is general
      });

      animate(); // Start general animation loop
    } else if (!threeContainer) {
      console.error('Container for Three.js background not found.');
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const fadeEnd = window.innerHeight * 0.55; // Text fully faded after scrolling this much
      const opacity = Math.max(0, 1 - scrollTop / fadeEnd);

      if (companyText) {
        companyText.style.opacity = opacity.toString();
        // Optionally hide it completely when faded to prevent accidental interaction
        companyText.style.pointerEvents = opacity === 0 ? 'none' : 'auto';
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call to set opacity based on current scroll position (e.g., on refresh)
    handleScroll();


    // Responsive Three.js canvas
    const handleResize = () => {
        if (renderer && camera) {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        }
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call


    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      // Optional: Clean up Three.js renderer if component unmounts and renderer is page-specific
      // if (threeContainer && renderer.domElement.parentNode === threeContainer) {
      //   threeContainer.removeChild(renderer.domElement);
      // }
      // Consider more advanced Three.js cleanup (disposing geometries, materials, etc.)
      // if you are frequently mounting/unmounting this HomePage.
    };
  }, []); // Empty dependency array, so this runs once on mount

  return (
    <div className="homepage-scroll-container" style={{ height: 'auto', position: 'relative' }}> {/* Changed height */}
      <Navbar />

      {/* Three.js 3D Container */}
      <section
        id="three-js-bg-container" // IMPORTANT: ID changed
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          zIndex: -1,
        }}
        aria-label="3D animated background section"
      ></section>

      {/* Hero Section with fading text */}
      <div className="hero-section" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <div className="company-text">
        <img className='planesketch' src="/images/planesketch3.png" alt="Plane Sketch" />
         <h1 className="company-title">We Are A Company</h1>
          <p className="company-description">
            Dedicated to innovative solutions and exceptional service.
          </p>
        </div>
      </div>
      <div style={{ flexShrink: 0, marginLeft: '2rem', zIndex: 1 }}>
      <video
        src={bibsu4}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          bottom: '65%',       // 10% up from the bottom
          right: '40%',        // 15% in from the right edge
          width: '400px',      // or whatever fixed size you prefer
          height: 'auto',
          borderRadius: '8px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
          zIndex: 1,
        }}
      />
      </div>
      {/* New Sections */}
      <OurBusinessesSection />
      <AboutSection />
      <ContactSection />

      {/* Optional: Footer component can be added here */}
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
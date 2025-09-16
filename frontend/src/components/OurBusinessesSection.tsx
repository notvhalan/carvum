// src/components/OurBusinessesSection.tsx
import React from 'react';
import '../assets/css/OurBusinessesSection.css'; // Ensure this path is correct

const OurBusinessesSection: React.FC = () => {
  return (
    <section id="our-businesses" className="businesses-section">
      <div className="container">
        <h2>Ventures by Carvum</h2> {/* Updated title */}
        <div className="businesses-grid">

          {/* Bibliotec */}
          <div className="business-item">
            <h3>Bibliotec</h3>
            <p>
              Infinite Pages, Inclusive Minds. Experience reading transformed with
              lifelike AI narration and synchronized text for effortless immersion.
            </p>
            <a
              href="https://bibliotec.site"
              target="_blank"
              rel="noopener noreferrer"
              className="business-link"
            >
              Visit Bibliotec.site
            </a>
          </div>

          {/* Neram */}
          <div className="business-item">
            <h3>Neram</h3>
            <p>
              Uncovering hidden opportunities in financial markets by empowering
              exceptional minds to push boundaries and deliver groundbreaking solutions.
            </p>
            <a
              href="https://neram.live"
              target="_blank"
              rel="noopener noreferrer"
              className="business-link"
            >
              Visit Neram.live
            </a>
          </div>

          {/* Gamefix */}
          <div className="business-item">
            <h3>Gamefix</h3>
            <p>
              Our exciting new venture into the gaming world. Stay tuned, Gamefix is
              coming soon!
            </p>
            <span className="business-link coming-soon">(Coming Soon)</span>
            {/* Or, if you prefer a disabled-looking link:
            <a href="#" className="business-link disabled" onClick={(e) => e.preventDefault()}>
              Coming Soon
            </a>
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBusinessesSection;
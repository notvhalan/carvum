// src/components/OurAppsSection.tsx
import React from 'react';
import '../assets/css/OurAppsSection.css';

const OurAppsSection: React.FC = () => {
  return (
    <section id="our-apps" className="apps-section">
      <div className="container">
        <h2>Our Apps</h2>
        <div className="apps-grid">

          {/* Bibliotec */}
          <a 
            href="https://apps.apple.com/gb/app/bibliotec/id6745482412" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="app-card"
          >
            <img 
              src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/75/2b/a5/752ba553-7141-0477-f4e5-6c43968f5d3a/AppIcon-0-0-1x_U007epad-0-1-85-220.png/320x0w.webp" 
              alt="Bibliotec App Icon"
              className="app-icon"
            />
            <h3>Bibliotec</h3>
            <p>Books</p>
          </a>

          {/* adict help Sober Up */}
          <a 
            href="https://apps.apple.com/gb/app/adict-help-sober-up/id6748348641" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="app-card"
          >
            <img 
              src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/61/b3/da/61b3dacf-4826-272a-c5a7-ce397b48da94/AppIcon-0-0-1x_U007emarketing-0-3-85-220.png/320x0w.webp" 
              alt="adict help Sober Up App Icon"
              className="app-icon"
            />
            <h3>adict help Sober Up</h3>
            <p>Lifestyle</p>
          </a>

          {/* Short Video Hider */}
          <a 
            href="https://apps.apple.com/gb/app/short-video-hider/id6745738626" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="app-card"
          >
            <img 
              src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/3d/fd/68/3dfd684a-d96f-db79-3276-46ef1d0f4401/AppIcon-0-0-1x_U007epad-0-1-85-220.png/320x0w.webp" 
              alt="Short Video Hider App Icon"
              className="app-icon"
            />
            <h3>Short Video Hider</h3>
            <p>Productivity</p>
          </a>

        </div>

        {/* Optional: Link to your full App Store developer profile */}
        <div className="view-all-apps">
          <a 
            href="https://apps.apple.com/gb/developer/arulvhalan-anandarajah/id1812461533" 
            target="_blank" 
            rel="noopener noreferrer"
            className="view-all-link"
          >
            View All Apps on App Store
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurAppsSection;

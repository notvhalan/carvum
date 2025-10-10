// src/pages/TreePage.jsx
import React from 'react';
import { GlassElement } from '../GlassElement/GlassElement';
import '../assets/css/TreePage.css';
import amgVideo from '../assets/videos/amg.mp4';
import avatarImage from '../assets/images/avt.png';

const TreePage = () => {
  const links = [
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/amusementsgroundsstagnating',
      icon: '📸'
    },
    {
      title: 'YouTube',
      url: 'https://www.youtube.com/@vhalan',
      icon: '🎥'
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/vhalaniscool?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      icon: '💼'
    },
    {
      title: 'Personal Website',
      url: 'http://carvum.life',
      icon: '🌐'
    }
  ];

  return (
    <div className="tree-page">
      {/* Background Video */}
      <video 
        className="background-video"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src={amgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Video Overlay */}
      <div className="video-overlay"></div>

      <div className="tree-container">
        {/* Profile Section */}
        <div className="profile-section">

            <div className="profile-content">
              <div className="profile-avatar">
                <img src={avatarImage} alt="vhalan" className="avatar-image" />
              </div>
              <h1 className="profile-name">vhalan</h1>
              <p className="profile-bio">creating world changing technology</p>
            </div>
        </div>

        {/* Links Section */}
        <div className="links-section">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-link-wrapper"
            >
              <GlassElement
                width={320}
                height={70}
                radius={20}
                depth={25}
                blur={5}
                chromaticAberration={8}
                strength={0.8}
                debug={false}
              >
                <div className="link-content">
                  <span className="link-icon">{link.icon}</span>
                  <span className="link-title">{link.title}</span>
                  <span className="link-arrow">→</span>
                </div>
              </GlassElement>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="tree-footer">
          <p>© 2025 Carvum</p>
        </div>
      </div>
    </div>
  );
};

export default TreePage;

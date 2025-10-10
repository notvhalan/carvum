// src/pages/TreePage.jsx
import React from 'react';
import '../assets/css/TreePage.css';

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
      <div className="tree-container">
        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-avatar">
            <span className="avatar-text">V</span>
          </div>
          <h1 className="profile-name">vhalan</h1>
          <p className="profile-bio">Pls download stuff :)</p>
        </div>

        {/* Links Section */}
        <div className="links-section">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-button"
            >
              <span className="link-icon">{link.icon}</span>
              <span className="link-title">{link.title}</span>
              <span className="link-arrow">→</span>
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

import React from 'react';
import '../assets/css/Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>Home</li>
        <li>
          Solutions <span className="dropdown-arrow">▼</span> {/* Added className */}
          <ul className="dropdown">
            <li>
              <a href="https://neram.live" target="_blank" rel="noopener noreferrer">
                Neram
              </a>
            </li>
            <li>Gamefix</li>
            <li>
              <a href="https://bibliotec.site" target="_blank" rel="noopener noreferrer">
                Bibliotec
              </a>
            </li>
          </ul>
        </li>
        <li>
          Services <span className="dropdown-arrow">▼</span> {/* Added className */}
          <ul className="dropdown">
            <li>
              <a href="https://www.instagram.com/amusementsgroundsstagnating" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@vhalan" target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/vhalaniscool?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/notvhalan" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="http://carvum.life" target="_blank" rel="noopener noreferrer">
                Personal Website
              </a>
            </li>
          </ul>
        </li>
        <li>
          Policies <span className="dropdown-arrow">▼</span>
          <ul className="dropdown">
            <li>
              <a href="/privacyc">
                CardCounter Privacy Policy
              </a>
            </li>
            <li>
              <a href="/empathticspolicy">
                Empathytics Privacy Policy
              </a>
            </li>
            <li>
              <a href="/shortvideohiderpolicy">
                Short Video Hider Privacy Policy
              </a>
            </li>
          </ul>
        </li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
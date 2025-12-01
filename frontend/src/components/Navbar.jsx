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
          </ul>
        </li>
        <li>Cases</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
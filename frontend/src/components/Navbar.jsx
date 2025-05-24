import React from 'react';
import '../assets/css/Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>Home</li>
        <li>
          Solutions <span>▼</span>
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
          Services <span>▼</span>
          <ul className="dropdown">
            <li>Investing</li>
            <li>Planning</li>
          </ul>
        </li>
        <li>Cases</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
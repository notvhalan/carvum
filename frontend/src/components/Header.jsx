import React from "react";
import '../assets/css/header.css'
const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img
          src="./src/assets/images/carvumlogoheader.png"
          alt="Carvum Logo"
          className="logo"
        />
        <div className="text-links">
          <span className="title">Investor Relations</span>
          <span className="link">Investors</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

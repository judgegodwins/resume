import React from 'react';
// import { Link } from 'react-router-dom';

function TopBar() {

  return (
    <div className="top-bar">
      <ul className="links">
        <a href="#home-tab">
          <li className="link">ABOUT</li>
        </a>
        <a href="#work">
          <li className="link">EXPERIENCE</li>
        </a>
        <a href="#projects">
          <li className="link">PROJECTS</li>
        </a>
        <a href="#contact">
          <li className="link">CONTACT</li>
        </a>
      </ul>
    </div>
  )
}

export default TopBar;
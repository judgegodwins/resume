import React from 'react';
import Picture from "../images/picture.jpg";
// import { Link } from 'react-router-dom';

function HomeTab(props) {

  return (
    <div className="home-tab" id="home-tab">
      <div className="about">
        <h1>Judge Godwins</h1>

        <p>
          Backend Engineer
        </p>
        <div className="socials home">
          <div className="social touch-indicator">
            <a href="tel:+2348148243489"><i className="fas fa-phone-alt"></i></a>
          </div>
          <div className="social touch-indicator">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/judgegodwins"><i className="fab fa-github"></i></a>
          </div>
          <div className="social touch-indicator">
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/judgegodwins"><i className="fab fa-twitter"></i></a>
          </div>
          <div className="social touch-indicator">
            <a target="_blank" rel="noopener noreferrer" href="https://ng.linkedin.com/in/judge-godwins-221140113"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        {/* <Link className="explore-link" to="/projects">
          <button className="explore">EXPLORE  <i className="fas fa-long-arrow-alt-right"></i></button>
        </Link> */}
      </div>
      <div className="picture">
        <img src={Picture} alt="Me" />
      </div>
    </div>
  );
}

export default HomeTab;
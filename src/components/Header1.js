import "./header1.css";
import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

const Header1 = () => {
  return (
    <>
      <header className="header">
        {/* 1st Logo Part */}
        <div className="logo">
          <h2>
            <span>T</span>hapa
            <span>T</span>echnical
          </h2>
        </div>

        {/* 2nd Menu Links */}
        <nav className="menu-link">
          <ul className="menu-list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
          </ul>
        </nav>

        {/* 3rd Social Media links */}
        <div className="social-media-links">
          <ul className="social-media-desktop">
            <li>
              <a href="">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>

            <li>
              <a href="">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>

            <li>
              <a href="">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>
        </div>
      </header>

      {/*Hero Section */}

      <section className="hero-section">
        <p>Welcome to</p>
        <h2>Thapa Tech</h2>
      </section>
    </>
  );
};

export default Header1;

import React from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  return (
    <header className="header active">
      <a href="">
        <h2 className="logo">Tech Star</h2>
      </a>
      <nav className="navbar">
        <ul className="navbar-list">
          <li>
            <a className="navbar-link" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="navbar-link" href="#">
              About
            </a>
          </li>
          <li>
            <a className="navbar-link" href="#">
              Service
            </a>
          </li>
          <li>
            <a className="navbar-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>

          {/* Hamburger menu */}
        <div className="mobile-navbar-btn">   
            <RxHamburgerMenu className="mobile-nav-icon" />
            <AiOutlineClose className="mobile-nav-icon closeBtn" />
          </div>
    </header>
  );
}

export default Header
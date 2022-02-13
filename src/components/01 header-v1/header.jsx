import React from 'react';
import './sticky-header.css';
import MenuIcon from './../../icons/lordicon/menu-icon.gif'
import LogoIcon from './../../images/LOGO-C1.png'

function HeaderV1() {
  return (
    <div className="header">
      <div className="header-inner-container">
        <div className="header-logo">
          <img src={LogoIcon}></img>
          <h1>ESPORTS TALENT AGENCY</h1>
        </div>
        <div className="header-nav-bar">
          <ul>
            <li><a data-scroll-nav="0" href="#" className="active2">Home</a></li>
            <li><a data-scroll-nav="1" href="#">What we do</a></li>
            <li><a data-scroll-nav="2" href="#">Cases</a></li>
            <li><a data-scroll-nav="3" href="#">Testimonials</a></li>
            <li><a data-scroll-nav="4" href="#">Our Story</a></li>
            <li><a data-scroll-nav="5" href="#">Team</a></li>
            <li><a data-scroll-nav="6" href="#">Try us</a></li>
          </ul>
        </div>
        <div className="header-mobile-nav-bar">
          <a><i class="bi bi-list"></i></a>
        </div>
      </div>
    </div>
  );
}

export default HeaderV1;
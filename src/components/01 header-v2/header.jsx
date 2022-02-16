import React from 'react';
import './sticky-header.css';
import LogoIcon from './../../images/LOGO-C1.png'

function HeaderV2() {
    return (
      <div className="header">
        <div className="header-inner-container">
          <a className="header-logo" href="https://e-sportagency.com">
            <img src={LogoIcon}></img>
            <h1>E-SPORT AGENCY</h1>
          </a>
          <div className="header-nav-bar">
            <ul>
              <li><a data-scroll-nav="7" href="#" className="active2">Intro</a></li>
              <li><a data-scroll-nav="8" href="#">About</a></li>
              <li><a data-scroll-nav="9" href="#">Testimonial</a></li>
              <li><a data-scroll-nav="10" href="#">Gallery</a></li>
              <li><a data-scroll-nav="6" href="#">Try us</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default HeaderV2;
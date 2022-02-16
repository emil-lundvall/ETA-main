import React from 'react';
import {Links} from 'react-router-dom';
import './sticky-header.css';
import LogoIcon from './../../images/LOGO-C1.png'

function HeaderV2() {
    return (
      <div className="header">
        <div className="header-inner-container">
          <div className="header-logo">
            <img src={LogoIcon}></img>
            <h1>E-SPORT AGENCY</h1>
          </div>
          <div className="header-nav-bar">
            <ul>
              <li><a href="#" className="active2">Home</a></li>
              <li><a data-scroll-nav="7" href="#">What we do</a></li>
              <li><a data-scroll-nav="8" href="#">Cases</a></li>
              <li><a data-scroll-nav="9" href="#">Testimonials</a></li>
              <li><a data-scroll-nav="10" href="#">Our Story</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default HeaderV2;
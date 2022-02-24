import React, { useEffect, useState } from 'react';
import './sticky-header.css';
import MenuIcon from './../../icons/lordicon/menu-icon.gif'
import LogoIcon from './../../images/LOGO-C1.png'
import PopupHeader from './header-popup';

function HeaderV2() {
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    updateScreenWidth();

    window.addEventListener("resize", updateScreenWidth);

    return () => window.removeEventListener("resize", updateScreenWidth);
  }, []);

  const updateScreenWidth = () => {
    if (window.innerWidth > 850) {
      setPopup(false);
    }
  }

  const togglePopup = () => {
    setPopup(!popup);
  }

  const hidePopup = (e) => {
    setPopup(false);
  }

  return (
    <>
      <div className="header">
        <div className="header-inner-container">
          <a className="header-logo" href="https://e-sportagency.com">
            <img src={LogoIcon}></img>
            <h1>ESPORTS TALENT AGENCY</h1>
          </a>
          <div className="header-nav-bar">
            <ul>
              <li><a data-scroll-nav="16" href="#" className="active2">Home</a></li>
              <li><a data-scroll-nav="17" href="#">What we do</a></li>
              <li><a data-scroll-nav="18" href="#">Services</a></li>
              <li><a data-scroll-nav="19" href="#">Testimonials</a></li>
              <li><a data-scroll-nav="20" href="#">About us</a></li>
              <li><a data-scroll-nav="20" href="#">Team</a></li>
              <li><a data-scroll-nav="6" href="#">Try us</a></li>
            </ul>
          </div>
          <div className="header-mobile-nav-bar">
            <a onClick={togglePopup}><i class="bi bi-list"></i></a>
          </div>
        </div>
      </div>

      <PopupHeader hidePopup={hidePopup} popup={popup} />
    </>
    );
  }
  
  export default HeaderV2;
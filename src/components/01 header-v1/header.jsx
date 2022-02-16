import React, { useEffect, useState } from 'react';
import './sticky-header.css';
import MenuIcon from './../../icons/lordicon/menu-icon.gif'
import LogoIcon from './../../images/LOGO-C1.png'
import PopupHeader from './header-popup';

function HeaderV1() {
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
            <img src={LogoIcon} />
            <h1>ESPORTS TALENT AGENCY</h1>
          </a>
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
            <a onClick={togglePopup}><i class="bi bi-list"></i></a>
          </div>
        </div>
      </div>

      <PopupHeader hidePopup={hidePopup} popup={popup} />
    </>
  );
}

export default HeaderV1;
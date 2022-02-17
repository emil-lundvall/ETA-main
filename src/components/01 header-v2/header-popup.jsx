import React from 'react';
import './header-popup.css';

function PopupHeader({ popup, hidePopup }) {
  return (
    <div className={`popup-header ${popup ? "active" : ""}`}>
      <div className="backdrop" onClick={hidePopup} />
      <div className="container">
        <ul>
          <li><a onClick={hidePopup} href="https://e-sportagency.com">Home</a></li>
          <li><a onClick={hidePopup} data-scroll-nav="7" href="#" className="active2">Intro</a></li>
          <li><a onClick={hidePopup} data-scroll-nav="8" href="#">About</a></li>
          <li><a onClick={hidePopup} data-scroll-nav="9" href="#">Testimonial</a></li>
          <li><a onClick={hidePopup} data-scroll-nav="10" href="#">Gallery</a></li>
          <li><a onClick={hidePopup} data-scroll-nav="6" href="#">Try us</a></li>
        </ul>
      </div>
    </div>
  );
}

export default PopupHeader;
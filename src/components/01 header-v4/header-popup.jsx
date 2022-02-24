import React from 'react';
import './header-popup.css';

function PopupHeader({ popup, hidePopup }) {
  return (
    <div className={`popup-header ${popup ? "active" : ""}`}>
      <div className="backdrop" onClick={hidePopup} />
      <div className="container">
        <ul>
          <li><a  onClick={hidePopup} data-scroll-nav="11" href="#" className="active2">Home</a></li>
          <li><a  onClick={hidePopup} data-scroll-nav="11" href="#">What we do</a></li>
          <li><a  onClick={hidePopup} data-scroll-nav="12" href="#">Services</a></li>
          <li><a  onClick={hidePopup} data-scroll-nav="13" href="#">Testimonials</a></li>
          <li><a  onClick={hidePopup} data-scroll-nav="6" href="#">Try us</a></li>
        </ul>
      </div>
    </div>
  );
}

export default PopupHeader;
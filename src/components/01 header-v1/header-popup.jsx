import React from 'react';
import './header-popup.css';

function PopupHeader({ popup, hidePopup }) {
  return (
    <div className={`popup-header ${popup ? "active" : ""}`}>
      <div className="backdrop" onClick={hidePopup} />
      <div className="container">
        <ul>
          <li><a onClick={hidePopup} data-scroll-nav="0" href="#" className="active2">Home</a></li>
          <li><a onClick={hidePopup} data-scroll-nav="1" href="#">What we do</a></li>
          <li><a onClick={hidePopup} data-scroll-nav="2" href="#">Cases</a></li>
          <li><a onClick={hidePopup} data-scroll-nav="3" href="#">Testimonials</a></li>
          <li><a onClick={hidePopup} data-scroll-nav="4" href="#">Our Story</a></li>
          <li><a onClick={hidePopup} data-scroll-nav="5" href="#">Team</a></li>
          <li><a onClick={hidePopup} data-scroll-nav="6" href="#">Try us</a></li>
        </ul>
      </div>
    </div>
  );
}

export default PopupHeader;
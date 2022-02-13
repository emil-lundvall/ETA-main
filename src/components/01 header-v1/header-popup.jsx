import React from 'react';
import './header-popup.css';
import MenuIcon from './../../icons/lordicon/menu-icon.gif'

function PopupHeader() {
  return (
    <div className="popup-header">
        <div className="container">
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
    </div>
  );
}

export default PopupHeader;
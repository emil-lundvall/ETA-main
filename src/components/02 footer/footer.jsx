import React, { useState } from 'react';
import './../../App.css';
import '../../scroll-it/scrollIt.js';
import './footer.css';
import ContactUs from './ContactUs.jsx';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Popup from './Popup';

function Footer() {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className="default-section-contact" data-scroll-index="6">
            <div className="contact-container">
                <div className="contact-inner-container">
                    <div className="contact-left">
                        <div className="cl-contact-container">
                            <div className="cl-text-container">
                                <h1>Get in touch with us<b>.</b></h1>
                                <p>Fill upp the form and our Team will get back to you within 24 hours.</p>
                            </div>

                            <div className="cl-contact-info-container">
                                <div className="cl-contact-info-inner-container">
                                    <a className="cl-contact-item">
                                        <i className="bi bi-telephone-fill"></i>
                                        <p>+46 76-127 01 02</p>
                                    </a>

                                    <a className="cl-contact-item">
                                        <i className="bi bi-envelope-fill"></i>
                                        <p>info@e-sportagency.com</p>
                                    </a>

                                    <a className="cl-contact-item">
                                        <i className="bi bi-geo-alt-fill"></i>
                                        <p>Uddvägen 28A, Lidingö</p>
                                    </a>
                                </div>
                            </div>
                            <div className="cl-social-media-container">
                                <a className="social-item" href="https://www.instagram.com/esportstalentagency/" target="_blank"><i className="bi bi-instagram"></i></a>
                                <a className="social-item" href="https://www.facebook.com/esportstalentagencyab" target="_blank"><i className="bi bi-facebook"></i></a>
                                <a className="social-item" href="https://www.linkedin.com/company/esports-talent-agency-ab" target="_blank"><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-right">
                        <div className="cr-form-wrapper">
                            <Popup showPopup={showPopup} setShowPopup={setShowPopup} />

                            <div className="cr-form-container">
                                <ContactUs setShowPopup={setShowPopup} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-container">
                <div className="footer-upper-container">
                    <div className="footer-upper-inner-container">
                        <i>"Quote here"</i>
                    </div>
                </div>
                <div className="copyright-footer">
                    <p>© 2022 ESPORT AGENCY AB. ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer
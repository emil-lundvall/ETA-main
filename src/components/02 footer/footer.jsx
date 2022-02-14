import React, { useState } from 'react';
import './../../App.css';
import '../../scroll-it/scrollIt.js';
import './footer.css';
import ContactUs from './ContactUs.jsx';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Popup from './Popup';
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

function Footer() {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className="default-section-contact" data-scroll-index="6">
            <div className="contact-container">
                <div className="contact-inner-container">
                    <div className="contact-left">
                        <div className="cl-contact-container">
                            <div className="cl-text-container">
                                <Fade left>
                                    <h1>Get in touch with us<b>.</b></h1>
                                </Fade>
                                <Zoom delay={250}>
                                    <p>Fill upp the form and our Team will get back to you within 24 hours.</p>
                                </Zoom>
                            </div>

                            <div className="cl-contact-info-wrapper">
                                <div className="cl-contact-info-container">
                                    <div className="cl-contact-info-inner-container">
                                        <Fade left delay={500}>
                                            <a className="cl-contact-item">
                                                <i className="bi bi-telephone-fill"></i>
                                                <p>+46 73 508 33 63</p>
                                            </a>
                                        </Fade>

                                        <Fade left delay={500}>
                                            <a className="cl-contact-item">
                                                <i className="bi bi-envelope-fill"></i>
                                                <p>info@e-sportagency.com</p>
                                            </a>
                                        </Fade>

                                        <Fade left delay={500}>
                                            <a className="cl-contact-item">
                                                <i className="bi bi-geo-alt-fill"></i>
                                                <p>Östermalmsgatan 87 C<br></br> 114 59 Stockholm</p>
                                            </a>
                                        </Fade>
                                    </div>
                                </div>
                                <div className="cl-social-media-container">
                                    <Fade top delay={750} cascade>
                                        <a className="social-item" href="https://www.instagram.com/esportstalentagency/" target="_blank"><i className="bi bi-instagram"></i></a>
                                        <a className="social-item" href="https://www.facebook.com/esportstalentagencyab" target="_blank"><i className="bi bi-facebook"></i></a>
                                        <a className="social-item" href="https://www.linkedin.com/company/esports-talent-agency-ab" target="_blank"><i className="bi bi-linkedin"></i></a>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-right">
                        <Fade right delay={500}>
                            <div className="cr-form-wrapper">
                                <Popup showPopup={showPopup} setShowPopup={setShowPopup} />

                                <div className="cr-form-container">
                                    <ContactUs setShowPopup={setShowPopup} />
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
            <div className="footer-container">
                <div className="footer-upper-container">
                    <div className="footer-upper-inner-container">
                        <i>"Get in the game!"</i>
                    </div>
                </div>
                <div className="copyright-footer">
                    <p>© 2022 ESPORTS TALENTS AGENCY GROUP AB. ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer
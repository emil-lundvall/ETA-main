import React, { useState } from 'react';
import './../../App.css';
import '../../scroll-it/scrollIt.js';
import './footer.css';
import ContactUs from './ContactUs.jsx';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Email from './../../icons/lordicon/email.gif';
import Location from './../../icons/lordicon/location.gif';
import Phone from './../../icons/lordicon/phone.gif';
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
                                    <h1>Try us - get in the game<b>!</b></h1>
                                </Fade>
                                <Zoom delay={250}>
                                    <p>Fill upp the form and our Team will get back to you within 24 hours.</p>
                                </Zoom>
                            </div>

                            <div className="cl-contact-info-container">
                                <div className="cl-contact-info-inner-container">
                                    <Fade left delay={500}>
                                        <a className="cl-contact-item" href="tel:+46735083363">
                                            <img src={Phone} />
                                            <p>+46 73 508 33 63</p>
                                        </a>
                                    </Fade>

                                    <Fade left delay={500}>
                                        <a className="cl-contact-item" href="mailto:info@e-sportagency.com">
                                            <img src={Email} />
                                            <p>info@e-sportagency.com</p>
                                        </a>
                                    </Fade>

                                    <Fade left delay={500}>
                                        <a className="cl-contact-item" href="https://www.google.com/maps/place/%C3%96stermalmsgatan+87c,+114+59+Stockholm/@59.3403422,18.086227,18.25z/data=!4m5!3m4!1s0x465f9d45f3fc7355:0x1a53f28646ad80e2!8m2!3d59.3405098!4d18.0868891?hl=sv" target="_blank">
                                            <img src={Location} />
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
                        <i>Get in the Game!</i>
                    </div>
                </div>
                <div className="copyright-footer">
                    <p>© 2022 ETA International AB. ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
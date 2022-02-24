import React from 'react';
import './../../../App.css';
import '../../../scroll-it/scrollIt.js';
import './services.css';
import one from './../../../icons/lordicon/analysis-alignement.gif';
import two from './../../../icons/lordicon/esport-team-development.gif';
import three from './../../../icons/lordicon/merchandising-licensing.gif';
import four from './../../../icons/lordicon/ambassador-programs.gif';
import five from './../../../icons/lordicon/fan-activation.gif';
import six from './../../../icons/lordicon/original-content.gif';
import seven from './../../../icons/lordicon/endorsement-programs.gif';
import eight from './../../../icons/lordicon/influencer-programs.gif';
import nine from './../../../icons/lordicon/promotions.gif';
import ten from './../../../icons/lordicon/events.gif';
import eleven from './../../../icons/lordicon/management.gif';
import twelve from './../../../icons/lordicon/representation.gif';
import thirteen from './../../../icons/lordicon/sponsorships.gif';
import fourteen from './../../../icons/lordicon/strategy.gif';
import fifteen from './../../../icons/lordicon/tournaments.gif';
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

function services() {
    return (
        <div className="default-section t-services" data-scroll-index="18">
            <div className="default-inner-section">
                <div className="project-text-container">
                    <div className="project-text-inner-container">
                        <Zoom>
                            <h1>Services<b>.</b></h1>
                        </Zoom>
                    </div>
                </div>
                <div className="lower-container">
                    <div className="lower-grid-container">
                        <Fade delay={250} cascade>
                            <div className="lower-grid-item grid-item-hover">
                                <div className="grid-item-container">
                                    <div className="grid-item-row-1"><img className="grid-icon" src={one}></img></div>
                                    <div className="grid-item-row-2">
                                        <h1>Analysis & alignement</h1>
                                    </div>
                                    <div className="grid-item-row-3">
                                        <p>Matching you as a talent with the right mainstream Brands</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lower-grid-item">
                                <div className="grid-item-container">
                                    <div className="grid-item-row-1"><img className="grid-icon" src={four}></img></div>
                                    <div className="grid-item-row-2">
                                        <h1>Ambassador programs</h1>
                                    </div>
                                    <div className="grid-item-row-3">
                                        <p>Tailor made with a long term perspective to increase Brand visibility and public likability through various promotions.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lower-grid-item">
                                <div className="grid-item-container">
                                    <div className="grid-item-row-1"><img className="grid-icon" src={five}></img></div>
                                    <div className="grid-item-row-2">
                                        <h1>Fan activation</h1>
                                    </div>
                                    <div className="grid-item-row-3">
                                        <p>Mobilizing and engaging communities within the gaming ecosystem.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lower-grid-item">
                                <div className="grid-item-container">
                                    <div className="grid-item-row-1"><img className="grid-icon" src={eight}></img></div>
                                    <div className="grid-item-row-2">
                                        <h1>Influencer programs</h1>
                                    </div>
                                    <div className="grid-item-row-3">
                                        <p>Tailor made social media marketing programs. Let your expert level of knowledge and social  influence work for brands you like and love.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lower-grid-item">
                                <div className="grid-item-container">
                                    <div className="grid-item-row-1"><img className="grid-icon" src={eleven}></img></div>
                                    <div className="grid-item-row-2">
                                        <h1>Management</h1>
                                    </div>
                                    <div className="grid-item-row-3">
                                        <p>For talents we provide a wide range of management services for career development.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lower-grid-item">
                                <div className="grid-item-container">
                                    <div className="grid-item-row-1"><img className="grid-icon" src={twelve}></img></div>
                                    <div className="grid-item-row-2">
                                        <h1>Represention</h1>
                                    </div>
                                    <div className="grid-item-row-3">
                                        <p>A long term perspective service, continuous and consistent building your brand image towards communities within the gaming ecosystem.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lower-grid-item">
                                <div className="grid-item-container">
                                    <div className="grid-item-row-1"><img className="grid-icon" src={thirteen}></img></div>
                                    <div className="grid-item-row-2">
                                        <h1>Sponsorship</h1>
                                    </div>
                                    <div className="grid-item-row-3">
                                        <p>Short or long-term programs and packages with brands, available for events, teams and individual talent. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lower-grid-item">
                                <div className="grid-item-container">
                                    <div className="grid-item-row-1"><img className="grid-icon" src={fourteen}></img></div>
                                    <div className="grid-item-row-2">
                                        <h1>Stragtegy</h1>
                                    </div>
                                    <div className="grid-item-row-3">
                                        <p>Get our advice on how to concentrate your resources on the best opportunities to achieve the greatest outcome.</p>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default services

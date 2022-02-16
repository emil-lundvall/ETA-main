import React from 'react';
import './../../../App.css';
import './../../../scroll-it/scrollIt.js';
import './team.css';
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

function team() {
    return (
        <div className="default-section">
            <div className="default-inner-section">
                <div className="story-text-container" data-scroll-index="4">
                    <div className="story-title">
                        <Zoom>
                            <h1>Our story<b>.</b></h1>
                        </Zoom>
                    </div>
                    <div className="story-text">
                        <Fade top delay={250}>
                            <h2>Growing up with a game in your pocket or almost at lesast within arms length reach, we are gamers at heart.</h2>
                            <p>Deeply embedded in gaming, streaming and Twitch cultures, we are always on the pulse of the latest trends. We know the content that ticks for Gen Z. ETA is the fruit of two young entrepreneurs Emil Lundvall and Noah Karlberg. Founded in Sweden 2022 but with roots leading back to 2014 when Noah became an active streamer and youtuber. Our unique history and insider perspective gives us the opportunity to cater to both brands and esports talents needs with a wide range of services. Bringing the best practices and concepts of both worlds together, leveraging the highest quality output.</p>
                        </Fade>
                    </div>
                </div>

                <div className="team-text-container" data-scroll-index="5">
                    <div className="team-text-title">
                        <Zoom>
                            <h1>Meet our team<b>.</b></h1>
                        </Zoom>
                    </div>
                

                    <div className="team-staff-container">
                        <div className="team-staff-inner-container">
                            <Fade left delay={250}>
                                <div className="team-staff-item tsi-left">
                                    <div className="staff-row-one">
                                        <div className="staff-img" id="staff-one"></div>
                                    </div>
                                    <div className="staff-row-two">
                                        <div className="row-two-inner-container-text">
                                            <h1>Emil Lundvall</h1>
                                            <p>Partner & Founder</p>
                                        </div>
                                    </div>
                                    <div className="staff-row-three">
                                        <div className="email-container">

                                        </div>
                                    </div>
                                </div>
                            </Fade>

                            <Fade bottom delay={300}>
                                <div className="team-staff-item">
                                    <div className='staff-row-one'>
                                        <div className="staff-img" id="staff-two"></div>
                                    </div>
                                    <div className="staff-row-two">
                                        <div className="row-two-inner-container-text">
                                            <h1>Noah Karlberg</h1>
                                            <p>Partner & Founder</p>
                                        </div>
                                    </div>
                                    <div className="staff-row-three">
                                        <div className="email-container">

                                        </div>
                                    </div>
                                </div>
                            </Fade>

                            <Fade right delay={350}>
                                <div className="team-staff-item tsi-right">
                                    <div className='staff-row-one'>
                                        <div className="staff-img" id="staff-three"></div>
                                    </div>
                                    <div className="staff-row-two">
                                        <div className="row-two-inner-container-text">
                                            <h1>Martin Lundvall</h1>
                                            <p>Advisor & Co-Founder</p>
                                        </div>
                                    </div>
                                    <div className="staff-row-three">
                                        <div className="email-container">

                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default team

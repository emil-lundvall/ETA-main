import React from 'react';
import './../../../App.css';
import './../../../scroll-it/scrollIt.js';
import './team.css';

function team() {
    return (
        <div className="default-section" data-scroll-index="5">
            <div className="default-inner-section">
                <div className="story-text-container">
                    <div className="story-title">
                        <h1>Our story<b>.</b></h1>
                    </div>
                    <div className="story-text">
                        <p>Growing up with a game in your pocket or almost at lesast within arms length reach, we are gamers at heart. <br></br><br></br>Deeply embedded in gaming, streaming and Twitch cultures, we are always on the pulse of the latest trends. We know the content that ticks for Gen Z. ETA is the fruit of two young entrepreneurs Emil Lundvall and Noah Karlberg. Founded in Sweden 2022 but with roots leading back to 2014 when Noah became an active streamer and youtuber. Our unique history and insider perspective gives us the opportunity to cater to both brands and esports talents needs with a wide range of services. Bringing the best practices and concepts of both worlds together, leveraging the highest quality output.</p>
                    </div>
                </div>

                <div className="team-text-container">
                    <div className="team-text-title">
                        <h1>Meet our team<b>.</b></h1>
                    </div>
                </div>

                <div className="team-staff-container">
                    <div className="team-staff-inner-container">
                        <div className="team-staff-item">
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

                        <div className="team-staff-item">
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

                    </div>
                </div>
            </div>
        </div>
    )
}

export default team

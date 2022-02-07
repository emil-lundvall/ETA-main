import React from 'react';
import './../../../App.css';
import './../../../scroll-it/scrollIt.js';
import './team.css';

function team() {
    return (
        <div className="default-section team" data-scroll-index="5">
            <div className="default-inner-section">
                <div className="team-text-container">
                    <div className="team-text-title">
                        <h1>Meet our team<b>.</b></h1>
                    </div>
                    <div className="team-text-under">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
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

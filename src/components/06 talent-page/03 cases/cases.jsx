import React from 'react';
import './../../../App.css';
import '../../../scroll-it/scrollIt.js';
import './cases.css';
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

function cases() {
    return (
        <div className="default-section projects" data-scroll-index="2">
            <div className="default-inner-section">
                <div className="project-text-container">
                    <div className="project-text-inner-container">
                        <Zoom>
                            <h1>Cases<b>.</b></h1>
                        </Zoom>
                    </div>
                </div>
                <div className="project-grid-section">
                    <div className="project-grid-container">
                        <Fade cascade delay={250}>
                            <div className="project-grid-item">
                                <div className="prjct-inner-container">
                                    <div className="event-type">
                                        <p>E-SPORT</p>
                                        <p>TOURNAMENT</p>
                                    </div>
                                </div>
                                <div className="prjct-text-cont">
                                    <h1>Present the challenge – CASE 1</h1>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                </div>
                                <div className="button-view-more">
                                    <a>View case details<li></li></a>
                                </div>
                            </div>
                            <div className="project-grid-item prjct-two">
                                <div className="prjct-inner-container">
                                    <div className="event-type">
                                        <p>E-SPORT</p>
                                        <p>EVENT</p>
                                    </div>
                                </div>
                                <div className="prjct-text-cont">
                                    <h1>Present the challenge – CASE 2</h1>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                </div>
                                <div className="button-view-more">
                                    <a>View case details<li></li></a>
                                </div>
                            </div>
                            <div className="project-grid-item">
                                <div className="prjct-inner-container">
                                    <div className="event-type">
                                        <p>E-SPORT</p>
                                        <p>MERCHANDISE</p>
                                    </div>
                                </div>
                                <div className="prjct-text-cont">
                                    <h1>Present the challenge – CASE 3</h1>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                </div>
                                <div className="button-view-more">
                                    <a>View case details<li></li></a>
                                </div>
                            </div>
                            <div className="project-grid-item">
                                <div className="prjct-inner-container">
                                    <div className="event-type">
                                        <p>E-SPORT</p>
                                        <p>TEAM DEVELOPMENT</p>
                                    </div>
                                </div>
                                <div className="prjct-text-cont">
                                    <h1>Present the challenge – CASE 4</h1>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                </div>
                                <div className="button-view-more">
                                    <a>View case details<li></li></a>
                                </div>
                            </div>
                            <div className="project-grid-item">
                                <div className="prjct-inner-container">
                                    <div className="event-type">
                                        <p>E-SPORT</p>
                                        <p>REPRESENTION</p>
                                    </div>
                                </div>
                                <div className="prjct-text-cont">
                                    <h1>Present the challenge – CASE 5</h1>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                </div>
                                <div className="button-view-more">
                                    <a>View case details<li></li></a>
                                </div>
                            </div>
                            <div className="project-grid-item">
                                <div className="prjct-inner-container">
                                    <div className="event-type">
                                        <p>E-SPORT</p>
                                        <p>PROMOTION</p>
                                    </div>
                                </div>
                                <div className="prjct-text-cont">
                                    <h1>Present the challenge – CASE 6</h1>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                </div>
                                <div className="button-view-more">
                                    <a>View case details<li></li></a>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cases

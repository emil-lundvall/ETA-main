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
                            <a className="project-grid-item" href="https://e-sportagency.com/projects/case-one/">
                                <div className="prjct-inner-container">
                                    <div className="event-type">
                                        <p>TWITCH.TV</p>
                                        <p>FAN ACTIVATION</p>
                                    </div>
                                </div>
                                <div className="prjct-text-cont">
                                    <h1>Foodora</h1>
                                    <p>Foodora wanted to get more new customers. They had for a while been curious about the opportunities to target the gaming segment.</p>
                                </div>
                                <div className="button-view-more">
                                    <a>View case details<li></li></a>
                                </div>
                            </a>
                            <a className="project-grid-item disable" href="https://e-sportagency.com/projects/case-two/">
                                <div className="prjct-inner-container">
                                    <div className="event-type">
                                        <p>E-SPORT</p>
                                        <p>EVENT</p>
                                    </div>
                                </div>
                                <div className="prjct-text-cont">
                                    <h1>Present the challenge</h1>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                </div>
                                <div className="button-view-more">
                                    <a>View case details<li></li></a>
                                </div>
                            </a>
                            <a className="project-grid-item disable" href="https://e-sportagency.com/projects/case-three/">
                                <div className="prjct-inner-container">
                                    <div className="event-type">
                                        <p>E-SPORT</p>
                                        <p>MERCHANDISE</p>
                                    </div>
                                </div>
                                <div className="prjct-text-cont">
                                    <h1>Present the challenge</h1>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                </div>
                                <div className="button-view-more">
                                    <a>View case details<li></li></a>
                                </div>
                            </a>
                            <a className="project-grid-item disable" href="https://e-sportagency.com/projects/case-four/">
                                <div className="prjct-inner-container">
                                    <div className="event-type">
                                        <p>E-SPORT</p>
                                        <p>TEAM DEVELOPMENT</p>
                                    </div>
                                </div>
                                <div className="prjct-text-cont">
                                    <h1>Present the challenge</h1>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                </div>
                                <div className="button-view-more">
                                    <a>View case details<li></li></a>
                                </div>
                            </a>
                            <a className="project-grid-item disable" href="https://e-sportagency.com/projects/case-five/">
                                <div className="prjct-inner-container">
                                    <div className="event-type">
                                        <p>E-SPORT</p>
                                        <p>REPRESENTION</p>
                                    </div>
                                </div>
                                <div className="prjct-text-cont">
                                    <h1>Present the challenge</h1>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                </div>
                                <div className="button-view-more">
                                    <a>View case details<li></li></a>
                                </div>
                            </a>
                            <a className="project-grid-item disable" href="https://e-sportagency.com/projects/case-six/">
                                <div className="prjct-inner-container">
                                    <div className="event-type">
                                        <p>E-SPORT</p>
                                        <p>PROMOTION</p>
                                    </div>
                                </div>
                                <div className="prjct-text-cont">
                                    <h1>Present the challenge</h1>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                </div>
                                <div className="button-view-more">
                                    <a>View case details<li></li></a>
                                </div>
                            </a>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cases

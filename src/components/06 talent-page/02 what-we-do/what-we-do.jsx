import React from 'react';
import './../../../App.css';
import '../../../scroll-it/scrollIt.js';
import './what-we-do.css';
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";


function whatWeDo() {
    return (
    <div className="default-section services" data-scroll-index="17">
        <div className="default-inner-section">
            <div className="project-text-container">
                <Zoom>
                    <h1>What we do<b>?</b></h1>
                </Zoom>
            </div>
        </div>

        <div className="default-step-row odd">
            <div className="inner-step-end"></div>
        </div>
        <div className="default-step-row">
            <div className="inner-step-start"></div>
        </div>
        <div className="default-step-row odd"></div>
        <div className="default-step-row"></div>
    </div>
    )
}

export default whatWeDo

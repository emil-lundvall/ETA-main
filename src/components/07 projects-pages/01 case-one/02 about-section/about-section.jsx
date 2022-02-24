import React from 'react';
import './about-section.css';
import './../../../../App.css'
import Fade from "react-reveal/Fade";

function aboutSection() {
  return (
    <div className="default-section case" data-scroll-index="8">
      <div className="about">
        <div className="about-container">
          <Fade cascade>
            <div className="about-row">
              <div className='title'>
                <h1>Challenge<b>.</b></h1>
              </div>
              <div className="text">
                <h1>Challenge<b>.</b></h1>
                <Fade left>
                  <p>Foodora wanted to get more new customers. They had for a while been curious about the opportunities to target the gaming segment.</p>
                </Fade>
              </div>
            </div>

            <div className="about-row">
              <div className='title'>
                <h1>Solution<b>.</b></h1>
              </div>
              <div className="text">
                <h1>Solution<b>.</b></h1>
                <Fade left>
                  <p>Together we developed a new customer acquisition tactic. After an initial brand analyzis we
selected streamers from our talent pool that were on brand and had the reach and audience
base matching the brand’s needs. Then we created a mix of services, endorsements,
brand integration and sales driving promotions including a unique identifier, making it
possible to measure how we delivered against KPI and goals.</p>
                </Fade>
              </div>
            </div>

            <div className="about-row">
              <div className='title'>
                <h1>Result<b>.</b></h1>
              </div>
              <div className="text">
                <h1>Result<b>.</b></h1>
                <Fade left>
                  <p>In one month the activity delivered 2100+ new customers to Foodora.</p>
                </Fade>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default aboutSection
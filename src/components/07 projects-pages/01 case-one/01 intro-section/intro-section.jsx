import React from 'react';
import './intro-section.css';
import './../../../../App.css';
import Fade from "react-reveal/Fade";

function introSection() {
  return (
    <div className="default-section intro" data-scroll-index="7">

      <div className="intro-container">
        <div className="row-container">
          <Fade top>
            <div className='intro-row'>
              <p>EVENT</p> {/* Case type example: event, sponsor, influencer and so on */}
            </div>
          </Fade>
          <Fade>
            <div className='intro-row mid'>
              <h1>Present the challenge<b>.</b></h1> {/* Title of the case */}
              <h2>Foodora</h2>
            </div>
          </Fade>
          <Fade bottom>
            <div className='intro-row'>
              <p>2022-02-14</p> {/* Date when case was created */}
            </div>
          </Fade>
        </div>
        <div className="background-img-container">
          <div className="background-img-layer"></div>
          <div className="background-img"></div>
        </div>
      </div>

      <div className="background">
        <div className="bg-one"></div>
        <div className="bg-two"></div>
      </div>

    </div>
  );
}

export default introSection
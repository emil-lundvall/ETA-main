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
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
import React from 'react';
import './testimonial-section.css';
import './../../../../App.css'
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

function testimonialSection() {
  return (
    <div className="default-section-test" data-scroll-index="9">
      <div className="inner-section">
        <div className="section-title">
          <Zoom>
            <h1>What did the customer think<b>?</b></h1>
          </Zoom>
        </div>
        <div className="testimonial-container">
          <div className="about-test">
            <Fade left>
              <div className="avatar"></div>
            </Fade>
          </div>
          <div className="info-test">
            <Fade delay={250}>
              <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."</p>
            </Fade>
            <Fade bottom>
              <p><b>Tekla Wannberg - Social Media Manager</b></p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default testimonialSection
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
              <p>"ETA have with their expertise helped us market ourselves through various activations on the relevant gaming platforms. We have together set up clear measurable KPIs that are also fulfilled. Very satisfied with our collaboration."</p>
            </Fade>
            <Fade bottom>
              <p><b>Tekla Wannberg - Marketing Manager</b></p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default testimonialSection
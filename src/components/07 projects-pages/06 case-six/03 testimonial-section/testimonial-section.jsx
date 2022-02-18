import React from 'react';
import './testimonial-section.css';
import './../../../../App.css'

function testimonialSection() {
    return (
      <div className="default-section-test" data-scroll-index="9">
        <div className="inner-section">
          <div className="section-title">
            <h1>What did the customer think<b>?</b></h1>
          </div>
          <div className="testimonial-container">
            <div className="about-test">
              <div className="avatar"></div>
            </div>
            <div className="info-test">
              <i>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."<br></br><br></br> <b>Tekla Wannberg <a>- Social Media Manager</a></b></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default testimonialSection
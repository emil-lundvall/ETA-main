import React from 'react';
import HeaderV2 from '../../01 header-v2/header';
import Intro from './01 intro-section/intro-section';
import About from './02 about-section/about-section';
import Testimonial from './03 testimonial-section/testimonial-section';
// import Gallery from './03 gallery-section/gallery-section';
import Footer from '../../02 footer/footer';
import './case.css';

function caseOne() {
  return (
    <div className="case-page">
      <HeaderV2 />
      <Intro />
      <About />
      <Testimonial />
      {/* <Gallery /> */}
      <Footer />
    </div>
  );
}

export default caseOne
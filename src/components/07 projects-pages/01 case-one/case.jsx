import React from 'react';
import Pointers from './../../01 pointers-v2/point'
import HeaderV2 from '../../01 header-v2/header';
import Intro from './01 intro-section/intro-section';
import About from './02 about-section/about-section';
import Testimonial from './03 testimonial-section/testimonial-section';
import Gallery from './04 gallery-section/gallery-section';
import Footer from '../../02 footer/footer';
import './case.css';

function caseOne() {
  return (
    <div className="case-page">
      <Pointers />
      <HeaderV2 />
      <Intro />
      <About />
      <Testimonial />
      <Gallery />
      <Footer />
    </div>
  );
}

export default caseOne
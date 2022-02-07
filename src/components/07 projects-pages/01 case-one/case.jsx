import React from 'react';
import HeaderV2 from '../../01 header-v2/header';
import Intro from './01 intro-section/intro-section';
import About from './02 about-section/about-section';
import Gallery from './03 gallery-section/gallery-section';
import Outro from './04 outro-section/outro-section';
import Footer from '../../02 footer/footer';
import './case.css';

function caseOne() {
    return (
      <div className="case-page">
        <HeaderV2 />
        <Intro />
        <About />
        <Gallery />
        <Outro />
        <Footer />
      </div>
    );
  }
  
  export default caseOne
import React from 'react';
import './../../index.css';
import './../../App.css';
import HeaderV1 from '../01 header-v1/header';
import Pointers from './../01 pointers/point'
import Home from './01 hero/hero';
import WhatWeDo from './02 what-we-do/what-we-do';
import Cases from './03 cases/cases';
import Testimonials from './04 testimonials/testimonials';
import OurStory from './05 our-story/our-story';
import Team from './06 team/team';
import Footer from './../02 footer/footer';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../01 header-v1/headerEffect.js';

function Homepage() {
  return (
    <div className="home-page">
      <div className="website-container" id="fullpage">
        <Pointers />
        <HeaderV1 />
        <Home />
        <WhatWeDo />
        <Cases />
        <Testimonials />
        <OurStory />
        <Team />
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;

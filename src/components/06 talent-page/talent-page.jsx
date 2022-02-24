import React from 'react';
import './../../index.css';
import './../../App.css';
import HeaderV4 from '../01 header-v4/header';
import Pointers from './../01 pointers-v4/point';
import HeroV2 from './01 hero-v2/hero';
import WhatWeDo from './02 what-we-do/what-we-do';
import Services from './03 services/services';
import TestimonialsV2 from './04 testimonials-v2/testimonials';
import Team from './05 team-v2/team';
import Footer from './../02 footer/footer';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../01 header-v1/headerEffect.js';

// import Home from './01 t-hero/t-hero';
// import WhatWeDo from './02 t-what-we-do/t-what-we-do';
// import Cases from './03 t-cases/t-cases';
// import Testimonials from './04 t-testimonials/t-testimonials';
// import Team from './05 t-team/t-team';

function talentPage() {
    return (
    <div className="talent-page">
      <div className="website-container" id="fullpage">
        <Pointers />
        <HeaderV4 />
        <HeroV2 />
        <WhatWeDo />
        <Services />
        <TestimonialsV2 />
        <Team />
        <Footer />
      </div>
    </div>
    );
  }
  
  export default talentPage;
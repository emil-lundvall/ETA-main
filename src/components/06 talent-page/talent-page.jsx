import React from 'react';
import './../../index.css';
import './../../App.css';
import HeaderV1 from '../01 header-v1/header';
import Pointers from './../01 pointers-v1/point'
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
        <HeaderV1 />
        <Footer />
      </div>
    </div>
    );
  }
  
  export default talentPage;
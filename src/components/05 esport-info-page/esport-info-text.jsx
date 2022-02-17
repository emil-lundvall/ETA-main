import React from 'react';
import './../../App.css'
import './../../index.css'
import Pointer from './../01 pointers-v3/point';
import HeaderV3 from '../01 header-v3/header';
import EsportIntro from './esport-intro/esport-intro';
import Footer from './../02 footer/footer';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../01 header-v1/headerEffect.js';

function esportInfo() {
    return (
      <div className="esport-info">
        <Pointer />
        <HeaderV3 />
        <EsportIntro />
        <Footer />
      </div>
    );
  }
  
  export default esportInfo
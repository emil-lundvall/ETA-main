import React from 'react';
import './../../index.css';
import './../../App.css';
import HeaderV2 from '../01 header-v2/header';
import Footer from './../02 footer/footer';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../01 header-v1/headerEffect.js';

function esportInfo() {
    return (
      <div className="esport-info">
        <HeaderV2 />
        <Footer />
      </div>
    );
  }
  
  export default esportInfo
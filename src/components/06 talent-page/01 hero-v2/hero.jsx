import React from 'react';
import './../../../App.css';
import '../../../scroll-it/scrollIt.js';
import './hero.css';
import Fade from "react-reveal/Fade";
import backgroundVideo from './../../../videos/E-BrokR website video 1080p.mp4';

function home() {
    return (
        <div className="default-section home" data-scroll-index="16">
            <div className="default-inner-section-home">
                <div className="home-left-container">
                    <div className="home-text-container">
                        <div className="home-text-title">
                            <Fade bottom>
                                <h1>JOIN US - GAME ON<b>!</b></h1>
                            </Fade>
                        </div>
                        <Fade left delay={250}>
                            <p>We are a full-service esports marketing and talent agency.
Together with our clients and partners we are reshaping entertainment
and the way people engage with esports.<br></br><br></br>
Our deep knowledge of gaming culture and communities, paired with
digital know-how and marketing skills creates value and new streams of
revenue for brands and talent.</p>
                        </Fade>
                    </div>
                    <div className="home-buttons-container">
                        <Fade bottom delay={750}>
                            <a  href="https://e-sportagency.com/">For Brands</a>
                            <a className="active-btn" href="#">For Talents</a>
                        </Fade>
                    </div>
                </div>
            </div>
            <div className="video-overlay"></div>
            <video autoPlay playsinline muted loop preload="metadata" className="home-video">
                <source src={backgroundVideo} type="video/mp4;charset=UTF-8" />
            </video>
        </div>
    )
}

export default home
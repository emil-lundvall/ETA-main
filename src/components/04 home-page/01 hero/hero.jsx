import React,{Component} from 'react';
import './../../../App.css';
import '../../../scroll-it/scrollIt.js';
import './hero.css';
import './../../../particle-effect-globe/effect.scss'
import backgroundVideo from './../../../videos/background.mp4'

function home() {
    return (
        <div className="default-section home" data-scroll-index="0">
            <div className="default-inner-section-home">
                <div className="home-left-container">
                    <div className="home-text-container">
                        <h1>Get in the game<b>!</b></h1>
                        <p>We are a full-service esports marketing and talent agency. Together with our clients and partners we are reshaping entertainment and the way people engage with esports.<br></br><br></br>Our deep knowledge of gaming culture and communities, paired with digital know-how and marketing skills creates value and new streams of  revenue for brands and talent</p>
                    </div>
                    <div className="home-buttons-container">
                        <a className="help-btn">Brands ><i></i></a>
                        <a className="contact-btn">Talents ><i></i></a>
                    </div>
                </div>
                <div className="home-right-container">
                    
                </div>
            </div>
            <div className="home-background"></div>
            <video autoPlay muted loop className="home-video">
                <source src={backgroundVideo} type="video/mp4" />
            </video>
        </div>
    )
}

export default home
import React from 'react';
import './../../../App.css';
import '../../../scroll-it/scrollIt.js';
import './testimonials.css';
import Naia from './../../../images/naia-logo.png';
import Foodora from './../../../images/foodora-logo.png';
import EscoWeb from './../../../images/escoweb-logo.png';

function testimonials() {
    return (
        <div className="default-section review" data-scroll-index="3">
            <div className="default-inner-section">
                <div className="tm-text-container">
                    <h1>This is what some other brands says<b>.</b></h1>
                </div>

                <div className="tm-lower-container">
                    <div className="tm-select">
                        <a className="select-opt active-opt opt-one">
                            <div className="select-avatar">
                                <div className="sa-img"></div>
                            </div>
                            <div className="select-text">
                                <div className="select-text-inner">
                                    <h1>Sebrin Poli</h1>
                                    <p>The Naia Initiative</p>
                                </div>
                            </div>
                        </a>

                        <a className="select-opt opt-two">
                            <div className="select-avatar">
                                <div className="sa-img"></div>
                            </div>
                            <div className="select-text">
                                <div className="select-text-inner">
                                    <h1>Frida Jonsson</h1>
                                    <p>Nick's</p>
                                </div>
                            </div>
                        </a>
                        <a className="select-opt opt-three">
                            <div className="select-avatar">
                                <div className="sa-img"></div>
                            </div>
                            <div className="select-text">
                                <div className="select-text-inner">
                                    <h1>Anton Persson</h1>
                                    <p>Esco Web</p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="tm-selected">
                        <div className="tm-selected-item tm-item-one">
                            <div className="tm-selected-inner-item">
                                <h1>It was a great experience!</h1>
                                <p>”Fast, flexible &amp; solution-oriented. We are super satisfied with our collaboration and are happy to work together in the future!”</p>
                            </div>

                            <div className="tm-divider-container">
                                <div className="tm-divider"></div>
                            </div>

                            <div className="company-container">
                                <div className="company-inner-container">
                                    <a className="company-info" href="https://www.foodora.com/" target="_blank">
                                        <img src={Foodora} alt="Naia Logotype" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default testimonials

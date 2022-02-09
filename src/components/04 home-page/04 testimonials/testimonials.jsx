import React, { useState } from 'react';
import './../../../App.css';
import '../../../scroll-it/scrollIt.js';
import './testimonials.css';
import Naia from './../../../images/naia-logo.png';
import Foodora from './../../../images/foodora-logo.png';
import EscoWeb from './../../../images/escoweb-logo.png';

const testimonials = [
    {name: "Sebrin Poli", brand: "The Naia Initiative", brandLogo: Naia, desc: {
        title: "It was a great experience!"
    }},
    {name: "Frida Jonsson", brand: "Nick's", brandLogo: Foodora},
    {name: "Anton Persson", brand: "Esco Web", brandLogo: EscoWeb},
]

function Testimonials() {
    const [selected, setSelected] = useState(0);
    
    const handleSelection = (index) => {
        setSelected(index);
    }

    return (
        <div className="default-section review" data-scroll-index="3">
            <div className="default-inner-section">
                <div className="tm-text-container">
                    <h1>This is what some other brands says<b>.</b></h1>
                </div>

                <div className="tm-lower-container">
                    <div className="tm-select">
                        {testimonials.map((testimonial, index) => (
                            // active-opt
                            <a className={`select-opt ${index === selected ? "active-opt" : ""}`} onClick={() => handleSelection(index)}>
                                <div className="select-avatar">
                                    <div className="sa-img"></div>
                                </div>
                                <div className="select-text">
                                    <div className="select-text-inner">
                                        <h1>{testimonial.name}</h1>
                                        <p>{testimonial.brand}</p>
                                    </div>
                                </div>
                            </a>
                        ))}
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

export default Testimonials

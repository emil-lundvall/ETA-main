import React, { useEffect, useState } from 'react';
import './../../../App.css';
import '../../../scroll-it/scrollIt.js';
import './testimonials.css';
import Naia from './../../../images/naia-logo.png';
import Foodora from './../../../images/foodora-logo.png';
import EscoWeb from './../../../images/escoweb-logo.png';
import EmilLundvall from "../../../images/emil-lundvall.jpg";
import MartinLundvall from "../../../images/martin-lundvall.jpg";
import NoahKarlberg from "../../../images/noah-karlberg.jpg";

const testimonials = [
    {
        name: "Sebrin Poli",
        img: EmilLundvall,
        brand: {
            name: "The Naia Initiative",
            logo: Naia,
            website: "https://thenaiainitiative.se/"
        },
        desc: {
            title: "It was a great experience!",
            text: "Fast, flexible and solution-oriented. We are super satisfied with our collaboration and are happy to work together in the future!"
        }
    },
    {
        name: "Frida Jonsson",
        img: MartinLundvall,
        brand: {
            name: "Nick's",
            logo: Foodora,
            website: "https://nicks.se/"
        },
        desc: {
            title: "It was a great experience!",
            text: "The collaboration with ETA has given us at Nick&#39;s the opportunity to explore Twitch as a channel to reach a new target group for the brand. The team has shown great commitment to the project and communication and project management has been perceived as safe and smooth."
        }
    },
    {
        name: "Anton Persson",
        img: NoahKarlberg,
        brand: {
            name: "Esco Web",
            logo: EscoWeb,
            website: "https://escoweb.se/"
        },
        desc: {
            title: "Jag heter Anton!",
            text: "lol"
        }
    },
]

function Testimonials() {
    const [selected, setSelected] = useState(0);
    const [timeoutId, setTimeoutId] = useState(null);

    const handleSelection = (index) => {
        setSelected(index);
    }

    useEffect(() => {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }

        const timeout = setTimeout(() => {
            const index = selected === testimonials.length - 1 ? 0 : selected + 1;
            setSelected(index);
        }, 7500)

        setTimeoutId(timeout);
    }, [selected])

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
                                    <img className="sa-img" src={testimonial.img} alt={testimonial.name} />
                                </div>
                                <div className="select-text">
                                    <div className="select-text-inner">
                                        <h1>{testimonial.name}</h1>
                                        <p>{testimonial.brand.name}</p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="tm-selected-wrapper">
                        {testimonials.map((testimonial, index) => (
                            <div className={`tm-selected ${index === selected ? "tm-selected-active" : ""}`}>
                                <div className="tm-selected-item tm-item-one">
                                    <div className="tm-selected-inner-item">
                                        <h1>{testimonial.desc.title}</h1>
                                        <p>”{testimonial.desc.text}”</p>
                                    </div>

                                    <div className="tm-divider-container">
                                        <div className="tm-divider"></div>
                                    </div>

                                    <div className="company-container">
                                        <div className="company-inner-container">
                                            <a className="company-info" href={testimonial.brand.website} target="_blank">
                                                <img src={testimonial.brand.logo} alt={`${testimonial.brand.name} Logotype`} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials

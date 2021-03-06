import React, { useEffect, useState } from 'react';
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import './../../../App.css';
import '../../../scroll-it/scrollIt.js';
import './testimonials.css';
import Naia from './../../../images/naia-logo.png';
import Nicks from './../../../images/nicks-logo.png';
import Foodora from './../../../images/foodora-logo.png';
import Sebrin from './../../../images/sebrin-poli.jpg';
import Frida from './../../../images/frida-jonsson.jpg';
import Tekla from './../../../images/tekla-wannberg.jpg';


const testimonials = [
    {
        name: "Sebrin Poli",
        img: Sebrin,
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
        img: Frida,
        brand: {
            name: "Nick's",
            logo: Nicks,
            website: "https://nicks.se/"
        },
        desc: {
            title: "Perfect work from ETA!",
            text: "The collaboration with ETA has given us at Nick's the opportunity to explore Twitch as a channel to reach a new target group for the brand. The team has shown great commitment to the project and communication and project management has been perceived as safe and smooth."
        }
    },
    {
        name: "Tekla Wannberg",
        img: Tekla,
        brand: {
            name: "Foodora",
            logo: Foodora,
            website: "https://foodora.se/"
        },
        desc: {
            title: "Very satisfied!",
            text: "ETA have with their expertise helped us market ourselves through various activations on the relevant gaming platforms. We have together set up clear measurable KPIs that are also fulfilled. Very satisfied with our collaboration."
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
        }, 10000)

        setTimeoutId(timeout);
    }, [selected])

    return (
        <div className="default-section t-review" data-scroll-index="19">
            <div className="default-inner-section">
                <div className="tm-text-container">
                    <Zoom>
                        <h1>This is what some other brands says<b>.</b></h1>
                    </Zoom>
                </div>

                <div className="tm-lower-container">
                    <div className="tm-select">
                        <Fade left>
                            {testimonials.map((testimonial, index) => (
                                <a className={`select-opt ${index === selected ? "active-opt" : ""}`} onClick={() => handleSelection(index)} key={index}>
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
                        </Fade>
                    </div>

                    <Fade right delay={250}>
                        <div className="tm-selected-wrapper">
                            {testimonials.map((testimonial, index) => (
                                <div className={`tm-selected ${index === selected ? "tm-selected-active" : ""}`} key={index}>
                                    <div className="tm-selected-item tm-item-one">
                                        <div className="tm-selected-inner-item">
                                            <h1>{testimonial.desc.title}</h1>
                                            <p>???{testimonial.desc.text}???</p>
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
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Testimonials

import React from 'react';
import './../../../App.css';
import '../../../scroll-it/scrollIt.js';
import './what-we-do.css';
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";


function whatWeDo() {
    return (
    <div className="default-section-what-we-do" data-scroll-index="17">
        <div>
            <div className="what-we-do-text-container">
                <Zoom>
                    <h1>What we do<b>?</b></h1>
                </Zoom>
            </div>
        </div>

        <div className="default-step-row odd">
            <div className="inner-step-flex">
                <div className="item-img-container">
                    <div className="item-img-step"></div>
                </div>
                <div className="item-text-step">
                    <h1><b>1.</b> Geting you plugged-in</h1>
                    <p>This gives you the opportunity do what you do best – focus on the game,
while we are working on relationships and exploring opportunities, communicating
with brands, corporations and media outlets everyday.
Take advantage of our professional relationships and get your career moving.</p>
                </div>
            </div>
        </div>
        <div className="default-step-row">
            <div className="inner-step-flex">
                <div className="item-text-step">
                    <h1><b>2.</b> Pitching you</h1>
                    <p>We will market you and you and your skills and find the right commercial
opportunities out there. We have our fingers on the pulse and knows
who is doing what and can anticipate what will be in the pipeline.
That translates into job opportunities that many wouldn't have access to.</p>
                </div>
                <div className="item-img-container">
                    <div className="item-img-step"></div>
                </div>
            </div>
        </div>
        <div className="default-step-row odd">
            <div className="inner-step-flex">
                <div className="item-img-container">
                    <div className="item-img-step"></div>
                </div>
                <div className="item-text-step">
                    <h1><b>3.</b> Making the deal</h1>
                    <p>Have you ever tried to negotiate a deal where you are “the product”?
You are dealing with brand representatives and people who give you sponoships,
the people you want to like you, and you have to negotiate with them.
It can be very awkward and difficult. Now you can focus on the game and let us
take care of the deal making.</p>
                </div>
            </div>
        </div>
        <div className="default-step-row">
            <div className="inner-step-flex">
                <div className="item-text-step">
                    <h1><b>4.</b> New perspectives</h1>
                    <p>When you’re a streamer your view on the esports industry and streaming can become
quite narrow. We will look at your career objectively and offer you insights and advice
you can’t see. Over the course of a year we will have at least two strategy meetings
were we both reflect and work together to see where to go next.</p>
                </div>
                <div className="item-img-container">
                    <div className="item-img-step"></div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default whatWeDo

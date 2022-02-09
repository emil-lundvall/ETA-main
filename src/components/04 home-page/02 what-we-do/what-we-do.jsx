import React, { Component } from 'react';
import './../../../App.css';
import '../../../scroll-it/scrollIt.js';
import './what-we-do.css';
import one from './../../../icons/lordicon/analysis-alignement.gif';
import two from './../../../icons/lordicon/esport-team-development.gif';
import three from './../../../icons/lordicon/merchandising-licensing.gif';
import four from './../../../icons/lordicon/ambassador-programs.gif';
import five from './../../../icons/lordicon/fan-activation.gif';
import six from './../../../icons/lordicon/original-content.gif';
import seven from './../../../icons/lordicon/endorsement-programs.gif';
import eight from './../../../icons/lordicon/influencer-programs.gif';
import nine from './../../../icons/lordicon/promotions.gif';
import ten from './../../../icons/lordicon/events.gif';
import eleven from './../../../icons/lordicon/management.gif';
import twelve from './../../../icons/lordicon/representation.gif';
import thirteen from './../../../icons/lordicon/sponsorships.gif';
import fourteen from './../../../icons/lordicon/strategy.gif';
import fifteen from './../../../icons/lordicon/tournaments.gif';
import Fade from "react-reveal/Fade";

function whatWeDo() {
    return (
        <Fade cascade>
            <div className="default-section services" data-scroll-index="1">
                <div className="default-inner-section">
                    <div className="upper-container">
                        <Fade left delay={250}>
                            <div className="uc-text-container">
                                <div className="uc-title-container">
                                    <h1>Why E-Sports<b>?</b></h1>
                                </div>
                                <p>With continuosly growing audiences and engaged fans esports follows the path of other growing global sports through history – and has already reached a higher level of commercialization.</p>
                                <div className="uc-btn-container">
                                    <a className="read-more-btn">Read more</a>
                                </div>
                            </div>
                        </Fade>
                        <Fade right delay={500}>
                            <div className="mc-text-container">
                                <div className="mc-title-container">
                                    <h1>Our Sevices<b>.</b></h1>
                                </div>
                                <p>We help and support brands by introducing and connecting them to esports and digital entertainment. Developing concepts, activities and events we create new avenues for marketing and promotion.</p>
                            </div>
                        </Fade>

                    </div>
                    <Fade bottom delay={750}>
                        <div className="info-section">
                            <div className="info-container">
                                <p>We have a deep understanding of creating and integrating marketing campaigns
                                    in esports while retaining audience engagement in an organic and authentic way.
                                    We manage all aspects of a 360 campaign including analysis, strategy, programming,
                                    content creation, promotions, 24/7 coverage & community moderation and
                                    revenue generation. We develop and implement strategies to boost your brand’s
                                    influence and presence on any network; including gaming focused platforms such
                                    as Instagram , Twitter, Youtube, TikTok and Twitch.
                                    We develop strategies and create concepts and activities to boost your brand’s
                                    visibility and presence in order to;<br></br>
                                    Get more people to know your brand, like your brand and try or buy your brand.</p>
                            </div>
                        </div>
                    </Fade>
                    <div className="lower-container">
                        <div className="lower-grid-container">
                            <Fade delay={250} cascade>
                                <div className="lower-grid-item grid-item-hover">
                                    <div className="grid-item-container">
                                        <div className="grid-item-row-1"><img className="grid-icon" src={one}></img></div>
                                        <div className="grid-item-row-2">
                                            <h1>Analysis & alignement</h1>
                                        </div>
                                        <div className="grid-item-row-3">
                                            <p>Matching Brands with the right talent.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lower-grid-item">
                                    <div className="grid-item-container">
                                        <div className="grid-item-row-1"><img className="grid-icon" src={two}></img></div>
                                        <div className="grid-item-row-2">
                                            <h1>Esport Team Development</h1>
                                        </div>
                                        <div className="grid-item-row-3">
                                            <p>Talent- and team identification. Team building, Training and Infrastructure investments.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lower-grid-item">
                                    <div className="grid-item-container">
                                        <div className="grid-item-row-1"><img className="grid-icon" src={three}></img></div>
                                        <div className="grid-item-row-2">
                                            <h1>Merchandising & Licensing</h1>
                                        </div>
                                        <div className="grid-item-row-3">
                                            <p>Develop concepts and partnerships that generate revenue and consumer loyalty for all parties.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lower-grid-item">
                                    <div className="grid-item-container">
                                        <div className="grid-item-row-1"><img className="grid-icon" src={four}></img></div>
                                        <div className="grid-item-row-2">
                                            <h1>Ambassador programs</h1>
                                        </div>
                                        <div className="grid-item-row-3">
                                            <p>Tailor made with a long term perspective to increase Brand visibility and public likability.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lower-grid-item">
                                    <div className="grid-item-container">
                                        <div className="grid-item-row-1"><img className="grid-icon" src={five}></img></div>
                                        <div className="grid-item-row-2">
                                            <h1>Fan activation</h1>
                                        </div>
                                        <div className="grid-item-row-3">
                                            <p>Mobilizing and engaging communities within the gaming ecosystem.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lower-grid-item">
                                    <div className="grid-item-container">
                                        <div className="grid-item-row-1"><img className="grid-icon" src={six}></img></div>
                                        <div className="grid-item-row-2">
                                            <h1>Original content</h1>
                                        </div>
                                        <div className="grid-item-row-3">
                                            <p>We bring your brand to life with custom made content geared towards specific audiences you want to reach.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lower-grid-item">
                                    <div className="grid-item-container">
                                        <div className="grid-item-row-1"><img className="grid-icon" src={seven}></img></div>
                                        <div className="grid-item-row-2">
                                            <h1>Endorsement programs</h1>
                                        </div>
                                        <div className="grid-item-row-3">
                                            <p>The luxury of trust - get our talent to support your product’s features, quality, benefits and/or brand.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lower-grid-item">
                                    <div className="grid-item-container">
                                        <div className="grid-item-row-1"><img className="grid-icon" src={eight}></img></div>
                                        <div className="grid-item-row-2">
                                            <h1>Influencer programs</h1>
                                        </div>
                                        <div className="grid-item-row-3">
                                            <p>Tailor made social media marketing programs. Make our talents expert level of knowledge andsocial influence in their field work for you.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lower-grid-item">
                                    <div className="grid-item-container">
                                        <div className="grid-item-row-1"><img className="grid-icon" src={nine}></img></div>
                                        <div className="grid-item-row-2">
                                            <h1>Promotions</h1>
                                        </div>
                                        <div className="grid-item-row-3">
                                            <p>Let our talents get your brand, product or service moving now. Get attention and drive action.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lower-grid-item">
                                    <div className="grid-item-container">
                                        <div className="grid-item-row-1"><img className="grid-icon" src={ten}></img></div>
                                        <div className="grid-item-row-2">
                                            <h1>Events</h1>
                                        </div>
                                        <div className="grid-item-row-3">
                                            <p>From small happenings to big arena events, we create rich experiences that connect with consumers in innovative and lasting ways.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lower-grid-item">
                                    <div className="grid-item-container">
                                        <div className="grid-item-row-1"><img className="grid-icon" src={eleven}></img></div>
                                        <div className="grid-item-row-2">
                                            <h1>Management</h1>
                                        </div>
                                        <div className="grid-item-row-3">
                                            <p>For brands we provide a wide range of management services for events, projects and programs.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lower-grid-item">
                                    <div className="grid-item-container">
                                        <div className="grid-item-row-1"><img className="grid-icon" src={twelve}></img></div>
                                        <div className="grid-item-row-2">
                                            <h1>Represention</h1>
                                        </div>
                                        <div className="grid-item-row-3">
                                            <p>A long term perspective service, continuous and consistent building your brand image towards communities within the gaming ecosystem.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lower-grid-item">
                                    <div className="grid-item-container">
                                        <div className="grid-item-row-1"><img className="grid-icon" src={thirteen}></img></div>
                                        <div className="grid-item-row-2">
                                            <h1>Sponsorship</h1>
                                        </div>
                                        <div className="grid-item-row-3">
                                            <p>Get an instant boost with our short or long-term programs and packages available for events, teams and individual talent.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lower-grid-item">
                                    <div className="grid-item-container">
                                        <div className="grid-item-row-1"><img className="grid-icon" src={fourteen}></img></div>
                                        <div className="grid-item-row-2">
                                            <h1>Stragtegy</h1>
                                        </div>
                                        <div className="grid-item-row-3">
                                            <p>Get our advice on how to concentrate your resources on the best opportunities to achieve the greatest outcome.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lower-grid-item">
                                    <div className="grid-item-container">
                                        <div className="grid-item-row-1"><img className="grid-icon" src={fifteen}></img></div>
                                        <div className="grid-item-row-2">
                                            <h1>Tournaments</h1>
                                        </div>
                                        <div className="grid-item-row-3">
                                            <p>We will create a custom made experince - making your brand shine at National and International Tournaments.</p>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>

                </div>
            </div>
        </Fade>
    )
}

export default whatWeDo

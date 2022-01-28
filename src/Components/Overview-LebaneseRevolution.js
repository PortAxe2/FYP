import React from 'react';
import Fade from 'react-reveal/Fade';
import '../css/overviewLR.css';
import pic1  from '../Graphics/ge.jpg';
import pic2  from '../Graphics/pic1.jpg';
import pic3  from '../Graphics/pic3.jpg';
import pic4  from '../Graphics/pic4.jpg';
import pic5  from '../Graphics/pic2.jpg';

function OverviewLebaneseRevolution () {
    return(
        <body>
            <div className="main">
                <Fade right>
                    <div className="row row2">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <img className="image1" src={pic1} alt=""/>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <h1>Lebanese Revolution</h1>
                            <h3>October 17, 2019</h3>
                            <p>The 2019–2021 Lebanese protests, also known locally as the 
                                October Revolutio‎n are a series of civil protests taking 
                                place in Lebanon. These national protests were triggered 
                                by planned taxes on gasoline, tobacco, and VoIP calls on 
                                applications such as WhatsApp, but quickly
                                expanding into a country-wide condemnation of sectarian 
                                rule, stagnant economy, unemployment that reached 46% 
                                in 2018, endemic corruption in the public sector, 
                                legislation that was perceived to shield the ruling 
                                class from accountability (such as banking secrecy) and
                                failures of the government to provide basic services 
                                such as electricity, water, and sanitation.</p>
                        </div>
                    </div>
                </Fade>
                <Fade left>
                    <div className="row row1">
                        <div style={{textAlign: 'right'}} className="col-lg-3 col-md-12 col-sm-12">
                            <h2>Flow of Info</h2>
                            <hr/>
                            <p>Focus focuses on the most influential Twitter accounts during the period of the event</p>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <img className="image2" src={pic4} alt=""/>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <img className="image2" src={pic3} alt=""/>
                        </div>
                        <div style={{textAlign: 'left'}} className="col-lg-3 col-md-12 col-sm-12">
                            <h2>Timeline of Events</h2>
                            <hr/>
                            <p>Understand what lead to the October Revolution and what repercussions it had</p>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className="row row1">
                        <div style={{textAlign: 'right'}} className="col-lg-3 col-md-12 col-sm-12">
                            <h2>Graphical Analysis</h2>
                            <hr/>
                            <p>Explore how the Lebanese Revolution impacted the
                                 world of social media and how widespread it
                                  became. From interactive maps to graphs, you'll
                                   be able to understand the distrubtion of info 
                                   during this decisive time in the history of Lebanon. </p>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <img className="image2" src={pic2} alt=""/>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <img className="image2" src={pic5} alt=""/>
                        </div>
                        <div style={{textAlign: 'left'}} className="col-lg-3 col-md-12 col-sm-12">
                            <h2>Network Analysis</h2>
                            <hr/>
                            <p>Explore the interactions between the most viral Twitter acounts during
                                the revolutions and the conclusions drawn from these connections.
                            </p>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className="row row1">
                        <div className="heh col-lg-6 col-md-12 col-sm-12"> 
                            <iframe width="630" height="500" src="https://www.youtube.com/embed/QadUzG-Ggkw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="heh col-lg-6 col-md-12 col-sm-12"> 
                            <iframe width="630" height="500" src="https://www.youtube.com/embed/2ZZMs4jWbD4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </Fade>
            </div>
        </body>
    );
}

export default OverviewLebaneseRevolution;
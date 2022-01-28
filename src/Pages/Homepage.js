import {React, useRef} from 'react';
import { Carousel } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import '../css/Homepage.css';
//import {setEvent} from '../actions';
import TB from '../Components/TopBar.js';
import Event from '../Components/eventPoster';
import exp from '../Graphics/exp.png';
import prot from '../Graphics/prot.png';
import rev from '../Graphics/rev.png';
import loc from '../Graphics/location.png';
import sm from '../Graphics/social-media.png';
import sn from '../Graphics/social-network-3.png';
import jawad from '../Graphics/jawad.jpeg';
import randa from '../Graphics/randa.jpg';
import sarah from '../Graphics/sarah.jpeg';
import nagham from '../Graphics/nagham.jpeg'
import badih from '../Graphics/badih.jpg';
import LV from '../Graphics/LR-01.png';
import BE from '../Graphics/BE-01.png';

const Person = ({name, image, major, linkedin}) => {
    return(
        <div className="person-box col-lg-4">
            <a href={linkedin} target="blank">
                <img className="members" src={image} alt="Sarah"/>
                <h5 className="names">{name}</h5>
                <p className="major">{major}</p>
            </a>
        </div>
    );
}


function Homepage () {

    //const currentEvent = useSelector(state => state.event);
    //const dispatch = useDispatch();
    
    const teamSection     = useRef(null);
    const featuresSection = useRef(null);

    
        

    const events = [
        {
            key: 34,
            name: 'Lebanese Revolution',
            image: LV,
            date: 'October 17, 2019',
            link: '/LebaneseRevolution',
        },

        {
            key: 23,
            name: 'Beirut Explosion',
            image:BE,
            date: 'August 4, 2020',
            link: '/AugustExplosion'
        }   
        
    ]
    
    const people = [
        {
            key: 1,
            image: jawad,
            name: 'Hassan Jawad Bou Hadir',
            major: 'BE, Computer and Communication Engineering',
            linkedin: "https://www.linkedin.com/in/jawadbh/"
        },

        {
            key: 2,
            image: badih,
            name: 'Badih Chehab',
            major: 'BE, Computer and Communication Engineering',
            linkedin: "https://www.linkedin.com/in/badihchehab/"
        },
        
        {
            key: 3,
            image: randa,
            name: 'Randa Ramlawi',
            major: 'BE, Computer and Communication Engineering',
            linkedin: "https://www.linkedin.com/in/randa-ramlawi-b05202176/"
        },
        {
            key: 4,
            image: sarah,
            name: 'Sarah Abou Ibrahim',
            major: 'BE, Electrical and Computer Engineering',
            linkedin: "https://www.linkedin.com/in/sarah-abou-ibrahim-50b06a1a4/"
        },
        {
            key: 5,
            image: nagham,
            name: 'Nagham Osman',
            major: 'BE, Electrical and Computer Engineering',
            linkedin: "https://www.linkedin.com/in/nagham-osman-4711731a3/"
        }
        
    ];


    console.log(people.image);

    return(
        
        <div className="Homepage">
            <Fade top>
                <TB/>
            </Fade>
            <Fade bottom>
                <div className="introduction">
                    <div className="intro-text-name">
                        <h6 className="project-name">Social Media Pulse and Crowd Behavior</h6>
                    </div>

                    <div className="intro-text-slogan">
                        <h1 className="slogan">EXPLORE THE IMPACT OF SOCIAL MEDIA ON CROWD BEHAVIOR ANALYSIS</h1>
                    </div>
                    
                    <Carousel className="testimonial-carousel">
                        <Carousel.Item className="carousel-item">
                            <img className="carousel-image" src={exp} alt="exp"/>
                            <Carousel.Caption className="in-carousel-sentence">Benefit from extracted and meticulously examined Twitter data to...</Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item className="carousel-item">
                            <img className="carousel-image" src={prot} alt="prot"/>
                            <Carousel.Caption className="in-carousel-sentence">...Analyze the data analytics of preprocessed events and...</Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item className="carousel-item">
                            <img className="carousel-image" src={rev} alt="rev"/>
                            <Carousel.Caption className="in-carousel-sentence">...Navigate through dates of particular interest and receive a thorough analysis</Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </Fade>
            <div ref={featuresSection} className="features">
                <h2 className="what-who">WHAT WE OFFER</h2>
                    <div id="features" className="row features">
                    <Fade left>
                        <div className="col-lg-4 col-xs-12 col-md-4">
                            <img className="feat-img" src={sm} alt="Location Icon"/>
                            <h4 className="feature-subtitle">Semantics Analysis</h4>
                            <p className="feature-text">Understand the emotions and languages used behind the data.</p>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="col-lg-4 col-xs-12 col-md-4">
                            <img className="feat-img" src={loc} alt="Location Icon"/>
                            <h4 className="feature-subtitle">Geographical Analysis</h4>
                            <p className="feature-text">Explore how the Lebanese Revolution impacted the world of social media and how widespread it became.</p>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="col-lg-4 col-xs-12 col-md-4">
                            <img className="feat-img" src={sn} alt="Location Icon"/>
                            <h4 className="feature-subtitle">Network Analysis</h4>
                            <p className="feature-text">Explore the interactions between the most viral Twitter accounts during the revolutions and the conclusions drawn from these connections.</p>
                        </div>
                    </Fade>
                </div>
            </div>
            <div id="tool">
                <div className="row row-fe">
                    <Fade bottom>
                    <div className="right-red col-lg-12 col-sm-12 eventsContainer">
                        <p className="tool-text">Explore analytics of preprocessed events</p>  
                        <div className="eventsContainer">
                            <div className="events">
                                {events.map(event => (
                                    <div key = {event.key}>
                                    <Event name =  {event.name} image = {event.image} linkURL={event.link}/> 
                                    </div>                         
                                ))}
                            </div>  
                        </div>                          
                    </div>
                    </Fade>
                    
                    
                    
                    
                </div>                
            </div>
            
            <div ref={teamSection} id="team">
                <h2 className="what-who">WHO WE ARE</h2>
                <Fade bottom>
                    <div className="row">
                        {people.map(person => (
                            <Person
                                key = {person.key}
                                image = {person.image}
                                name = {person.name}
                                major = {person.major}
                                linkedin = {person.linkedin}
                            />
                        ))}
                    </div>
                </Fade>
                
                
            </div>
        </div>
        
    );
}

export default Homepage;
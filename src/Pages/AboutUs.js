import {React, Component} from 'react';
import {isMobile} from 'react-device-detect';
import Fade from 'react-reveal/Fade';
import TB from '../Components/TopBar.js';
import mariette from '../Graphics/peopleImages/MAriette Awad.png';
import jawad from '../Graphics/jawad.jpeg';
import randa from '../Graphics/randa.jpg';
import sarah from '../Graphics/sarah.jpeg';
import nagham from '../Graphics/nagham.jpeg'
import badih from '../Graphics/badih.jpg';
import '../css/aboutus.css';
import linkedin from '../Graphics/logos/linked.png';
import aub from '../Graphics/logos/aub.png';
import handm from '../Graphics/logos/handm.jpg';
import aubShort from '../Graphics/logos/aub-short.png';
import twitter from '../Graphics/logos/twitter.png';

function PersonDetail({index, image, name, occupation, description, linkedinLink, twitterLink, aubLink}) {
    var defaultStyle = 
        <div style={{backgroundColor: '#30475e10'}} className="row personRow">
            <div className="col-lg-3 col-sm-12 imageContainer">
                <img className="personImage" src={image} alt=""/>
            </div>
            <div className="col-lg-9 col-sm-12">
                <br/>
                <h1 className="personName">{name}</h1>
                <h4 className="occupation">{occupation}</h4>
                <hr/>
                <p className="description">{description}</p>
                <a target="blank" href={linkedinLink}><button className="socialMedia socialMedia-linkedin"><img src={linkedin} alt=""/></button></a>
                <a target="blank" href={twitterLink}><button className="socialMedia socialMedia-twitter"><img src={twitter} alt=""/></button></a>
                <a target="blank" href={aubLink}><button className="socialMedia socialMedia-aub"><img src={aubShort} alt=""/></button></a>
            </div>
        </div>

    if(isMobile || parseInt(index)%2 === 1) {
        return(defaultStyle);
    }

    else {
        return(
            <div style={{backgroundColor: '#f0545410'}} className="row personRow">
                <div className="col-lg-9 col-sm-12 inverted">
                    <br/>
                    <h1 className="personName">{name}</h1>
                    <h4 className="occupation">{occupation}</h4>
                    <hr/>
                    <p className="description">{description}</p>
                    <a target="blank" href={linkedinLink}><button className="socialMedia socialMedia-linkedin"><img src={linkedin} alt=""/></button></a>
                    <a target="blank" href={twitterLink}><button className="socialMedia socialMedia-twitter"><img src={twitter} alt=""/></button></a>
                    <a target="blank" href={aubLink}><button className="socialMedia socialMedia-aub"><img src={aubShort} alt=""/></button></a>
                </div>
                <div className="col-lg-3 col-sm-12 imageContainer">
                    <img className="personImage" src={image} alt=""/>
                </div>
            </div>
        );
    }
}

class AboutUs extends Component {
    constructor(props){
        super(props);
        this.state = {
            members: [
                {
                    key: 1,
                    image: mariette,
                    name: 'Dr. Mariette Awad',
                    occupation: 'Advisor',
                    description: "Prof. Mariette Awad is an associate professor in the Electrical and Computer Engineering Department of the American University of Beirut. Her book “Efficient Learning Machines: Theories, Concepts and Applications for Engineers and Systems”, published in 2015, is among the most open source downloaded books for Summer 2020 according to Springer Nature. She has more than 100 patents, conferences and journals articles and she is managing multimillions grants and multidisciplinary international collaborations.",
                    linkedinLink: "https://www.linkedin.com/in/mariette-awad-79471b1",
                    twitterLink: "https://twitter.com/AwadMariette",
                    aubLink: "https://www.aub.edu.lb/pages/profile.aspx?memberId=ma162",
                    direction: 'left'
                },
                {
                    key: 2,
                    image: jawad,
                    name: 'Hassan Jawad Bou Hadir',
                    occupation: 'BE, Computer and Communication Engineering',
                    description: "Prof. Mariette Awad is an associate professor in the Electrical and Computer Engineering Department of the American University of Beirut. Her book “Efficient Learning Machines: Theories, Concepts and Applications for Engineers and Systems”, published in 2015, is among the most open source downloaded books for Summer 2020 according to Springer Nature. She has more than 100 patents, conferences and journals articles and she is managing multimillions grants and multidisciplinary international collaborations.",
                    linkedinLink: "https://www.linkedin.com/in/jawadbh/",
                    twitterLink: "https://twitter.com/JawadBouHadir",
                    aubLink: "https://www.aub.edu.lb/pages/profile.aspx?memberId=ma162",
                    direction: 'right'
                },
                {
                    key: 3,
                    image: badih,
                    name: 'Badih Chehab',
                    occupation: 'BE, Computer and Communication Engineering',
                    description: "Prof. Mariette Awad is an associate professor in the Electrical and Computer Engineering Department of the American University of Beirut. Her book “Efficient Learning Machines: Theories, Concepts and Applications for Engineers and Systems”, published in 2015, is among the most open source downloaded books for Summer 2020 according to Springer Nature. She has more than 100 patents, conferences and journals articles and she is managing multimillions grants and multidisciplinary international collaborations.",
                    linkedinLink: "https://www.linkedin.com/in/badihchehab/",
                    twitterLink: "https://twitter.com/BadihChehab",
                    aubLink: "https://www.aub.edu.lb/pages/profile.aspx?memberId=ma162",
                    direction: 'left'
                },
                {
                    key: 4,
                    image: sarah,
                    name: 'Sarah Abou Ibrahim',
                    occupation: 'BE, Electrical and Computer Engineering',
                    description: "Prof. Mariette Awad is an associate professor in the Electrical and Computer Engineering Department of the American University of Beirut. Her book “Efficient Learning Machines: Theories, Concepts and Applications for Engineers and Systems”, published in 2015, is among the most open source downloaded books for Summer 2020 according to Springer Nature. She has more than 100 patents, conferences and journals articles and she is managing multimillions grants and multidisciplinary international collaborations.",
                    linkedinLink: "https://www.linkedin.com/in/sarah-abou-ibrahim-50b06a1a4/",
                    twitterLink: "",
                    aubLink: "https://www.aub.edu.lb/pages/profile.aspx?memberId=ma162",
                    direction: 'right'
                },
                {
                    key: 5,
                    image: randa,
                    name: 'Randa Ramlawi',
                    occupation: 'BE, Computer and Communication Engineering',
                    description: "Prof. Mariette Awad is an associate professor in the Electrical and Computer Engineering Department of the American University of Beirut. Her book “Efficient Learning Machines: Theories, Concepts and Applications for Engineers and Systems”, published in 2015, is among the most open source downloaded books for Summer 2020 according to Springer Nature. She has more than 100 patents, conferences and journals articles and she is managing multimillions grants and multidisciplinary international collaborations.",
                    linkedinLink: "https://www.linkedin.com/in/randa-ramlawi-b05202176/",
                    twitterLink: "",
                    aubLink: "https://www.aub.edu.lb/pages/profile.aspx?memberId=ma162",
                    direction: 'left'
                },
                {
                    key: 6,
                    image: nagham,
                    name: 'Nagham Osman',
                    occupation: 'BE, Electrical and Computer Engineering',
                    description: "Prof. Mariette Awad is an associate professor in the Electrical and Computer Engineering Department of the American University of Beirut. Her book “Efficient Learning Machines: Theories, Concepts and Applications for Engineers and Systems”, published in 2015, is among the most open source downloaded books for Summer 2020 according to Springer Nature. She has more than 100 patents, conferences and journals articles and she is managing multimillions grants and multidisciplinary international collaborations.",
                    linkedinLink: "https://www.linkedin.com/in/nagham-osman-4711731a3/",
                    twitterLink: "",
                    aubLink: "https://www.aub.edu.lb/pages/profile.aspx?memberId=ma162",
                    direction: 'right'
                },
            ]
        }
    }

    render() {

        var members = this.state.members;

        return(
            <div className="topWrapper">
                <TB/>
                <div className="row topLogos">
                    <Fade left>
                        <div className="col-lg-6 col-sm-12 logo">
                            <a href="https://www.aub.edu.lb/" target="blank"><img src={aub} alt="American University of Beirut"/></a>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="col-lg-6 col-sm-12 logo">
                            <a href="https://sites.aub.edu.lb/hmlab/" target="blank"><img src={handm} alt="Human and Machines Lab"/></a>
                        </div>
                    </Fade>
                </div>
                <div className="row">
                    {members.map(member => (
                        <Fade bottom>
                            <div className="col-lg-12">
                                <PersonDetail
                                index = {member.key}
                                image = {member.image}
                                name = {member.name}
                                occupation = {member.occupation}
                                description = {member.description}
                                linkedinLink = {member.linkedinLink}
                                aubLink = {member.aubLink}
                                />
                            </div>
                        </Fade>
                    ))}
                </div>
            </div>
        );

    }

}

export default AboutUs;
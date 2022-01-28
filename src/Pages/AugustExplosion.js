import React from 'react';
import {Tab, Tabs } from 'react-bootstrap';
import TB from '../Components/TopBar';
import Symantics from '../Components/Semantics';
import Fade from 'react-reveal/Fade';
import NetworkAnalysis from  '../Components/Analysis_AugustExplosion';
import '../css/PowerBi.css';

function AugustExplosion () {
    return(
        <div className="Analytics">
            <Fade top>
                <TB/>
            </Fade>
            <div className="Content">
                <div>
                    <Fade bottom>
                        <Tabs variant="tabs" className="Tabs" defaultActiveKey="sentimentAnalysis" id="sectionTab">
                            <Tab tabClassName="Tab" eventKey="sentimentAnalysis" title="Sentiment Analysis">
                                <div className="tabContent">
                                    <Symantics sectionID = "ReportSectiona77f6bcedceccd510d20d"/>
                                </div>
                            </Tab>
                            <Tab tabClassName="Tab" eventKey="networkAnalysis" title="Network Anlaysis">
                                <div className="tabContent">
                                    <NetworkAnalysis/>
                                </div>
                            </Tab>
                        </Tabs>
                    </Fade>
                </div>
            </div>
        </div>
    );
}


export default AugustExplosion;

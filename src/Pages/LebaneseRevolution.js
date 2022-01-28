import React from 'react';
import {Tab, Tabs } from 'react-bootstrap';
import TB from '../Components/TopBar';
import Symantics from '../Components/Semantics';
import NetworkAnalysis from '../Components/Analysis_LebneseRevolution';
import OverviewLebaneseRevolution from '../Components/Overview-LebaneseRevolution';
import '../css/PowerBi.css';


//import eventIcon from '../Graphics/event-white-18dp.svg';
//import languageIcon from '../Graphics/language-white-18dp.svg';
//import mapIcon from '../Graphics/room-white-18dp.svg';


function LebaneseRevolution () {
    return(
        <div className="Analytics">
            <TB/>
            <div className="Content">
                <div>
                    <Tabs variant="tabs" className="Tabs" defaultActiveKey="overview" id="sectionTab">
                        <Tab tabClassName="Tab" eventKey="overview" title="Overview">
                            <div className="tabContent-overview">
                                <OverviewLebaneseRevolution></OverviewLebaneseRevolution>
                            </div>
                        </Tab>
                        <Tab tabClassName="Tab" eventKey="acledLocation" title="Geographical Anlaysis">
                            <div className="tabContent">
                                <Symantics sectionID = "ReportSectiona6711fbd6c1c016e87de"/>
                            </div>
                        </Tab>
                        <Tab tabClassName="Tab" eventKey="mosts" title="Flow of Info">
                            <div className="tabContent">
                                <Symantics sectionID = "ReportSection1b589e496b1d15c9ba17"/>
                            </div>
                        </Tab>
                        <Tab tabClassName="Tab" eventKey="ToE" title="Timeline of Events">
                            <div className="tabContent">
                                <Symantics sectionID = "ReportSectionce66ee9f6cca7b1df036"/>
                            </div>
                        </Tab>
                        <Tab tabClassName="Tab" eventKey="sentimentAnalysis" title="Sentiment Analysis">
                            <div className="tabContent">
                                
                            </div>
                        </Tab>
                        <Tab tabClassName="Tab" eventKey="networkAnalysis" title="Network Anlaysis">
                            <div className="tabContent">
                                <NetworkAnalysis/>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}


export default LebaneseRevolution;

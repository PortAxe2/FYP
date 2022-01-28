import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import '../css/Semantics.css';
import {isMobile} from 'react-device-detect';
import { Component } from 'react';
import {db} from '../firebase';

class Symantics extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mobView: isMobile,
    }
  }
  
  render(){

    
    console.log("gonna fetch");
    db.collection("fyp-data")
    .doc('dataDoc')
    .get()
    .then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => doc.data());
      console.log(data);
    })
    console.log("fetched");
    
    const sectionID = this.props.sectionID;
    
    var PowerBIConfiguration = {
      type: 'report',
      id: '3704c541-efe3-44cf-a0b0-1f46deba6d52',
      embedUrl: "https://app.powerbi.com/reportEmbed?reportId=834c5757-17e7-4395-873a-623554eec256",
      accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYzdiYTViMWEtNDFiNi00M2U5LWExMjAtNmZmNjU0YWRhMTM3LyIsImlhdCI6MTYyNzExMjU1MCwibmJmIjoxNjI3MTEyNTUwLCJleHAiOjE2MjcxMTY0NTAsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBU1FBMi84VEFBQUFiVzNadmF6WW9TVkNSZFRZTU4wSlpSUTYzQW5pNE5ia1dhSnFQSkgzUkhRPSIsImFtciI6WyJwd2QiLCJyc2EiXSwiYXBwaWQiOiJlYTA2MTZiYS02MzhiLTRkZjUtOTViOS02MzY2NTlhZTUxMjEiLCJhcHBpZGFjciI6IjAiLCJkZXZpY2VpZCI6IjJmZDU2MTZmLTkxYzEtNGIxMC05Zjc0LTMwYWQ0MDAzNzVhYyIsImZhbWlseV9uYW1lIjoiQ2hlaGFiIiwiZ2l2ZW5fbmFtZSI6IkJhZGloIiwiaXBhZGRyIjoiMTQ2LjE4NS4zNC44NiIsIm5hbWUiOiJCYWRpaCBDaGVoYWIgKFN0dWRlbnQpIiwib2lkIjoiODcxOWU3Y2QtZWJhZC00OWYzLTg5MjgtZGM4ZTcwMGZhYWQ1Iiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTg1NDI0NTM5OC0xNjc3MTI4NDgzLTE5NTc5OTQ0ODgtMzc1MTQyIiwicHVpZCI6IjEwMDNCRkZEQTM5MjdGNTMiLCJyaCI6IjAuQVFVQUdsdTZ4N1pCNlVPaElHXzJWSzJoTjdvV0J1cUxZX1ZObGJsalpsbXVVU0VGQUZRLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6ImwtQ2ZJSE5qaXUxcTVuVUN1cmNocTNKbGpYeHdzY1ZzXzl6dUQ4SVlDV0EiLCJ0aWQiOiJjN2JhNWIxYS00MWI2LTQzZTktYTEyMC02ZmY2NTRhZGExMzciLCJ1bmlxdWVfbmFtZSI6ImJnYzAyQG1haWwuYXViLmVkdSIsInVwbiI6ImJnYzAyQG1haWwuYXViLmVkdSIsInV0aSI6InVCWTNscWloNDBLV3haTjFMeElsQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.Suvs_c5iZXondLA5c-v4-QD94ldhj5nBpawPyOZtLtYS2X5T1ehZY64RLbs78YR8PWIhfzcCwXyeon0kmkMFP5ZLQ70wH3oSmKtQG0WyDMFap7OXUoiBDsgYoqQgWrI09vxf6LJdBDQYQkyPcdI0F5A_o3loJwpx56ONV-GhbGPf9q1k_sjt867oUyEeuTBwTzmg75DamdLx7mW-FTvrAA--_-90EheIIWt6YqRA-m3eelI-9reiBP6iC2cw9FXujrx57K-3tZn7dr8uO4RbLGNKiFsMiwzXjSMgVRLOosyO2ucZBpeTPgOZbD7EuYN2-W32j0ie08vTM5SDP88_OQ',
      tokenType: models.TokenType.Aad,
      pageName: sectionID,
      pageView: 'fitToWidth',
      settings: {
        panes: {
          pageNavigation: {
            visible: false
          },
          filters: {
            expanded: false,
            visible: false
          }
        },
      }
    };
    
    if (this.state.mobView) {
      PowerBIConfiguration.settings.layoutType = models.LayoutType.MobilePortrait;
    } else {
      PowerBIConfiguration.settings.layoutType = models.LayoutType.Master;
    }
    
    return(
      <div className="mainDiv">
        <div className="powerBIEmbed">
          <PowerBIEmbed  embedConfig={PowerBIConfiguration}
          eventHandlers={
            new Map([
              ['loaded', function () { console.log('Report loaded'); }],
              ['rendered', function () { console.log('Report rendered'); }],
              ['error', function (event) { console.log(event.detail); }]
            ])
          }
          cssClassName={"Embed-container"} getEmbeddedComponent={(embeddedReport) => {window.report = embeddedReport;}}/>
        </div>
      </div>
    );
  }
  

}


export default Symantics;
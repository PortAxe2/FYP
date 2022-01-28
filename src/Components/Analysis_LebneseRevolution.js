import React from 'react';
import {Sigma} from 'react-sigma';
import EdgeShapes from 'react-sigma/lib/EdgeShapes';
//import Filter from 'react-sigma/lib/Filter';
import ForceAtlas2 from 'react-sigma/lib/ForceAtlas2';
import LoadGEXF from 'react-sigma/lib/LoadGEXF';
import NodeShapes from 'react-sigma/lib/NodeShapes';
import RelativeSize from 'react-sigma/lib/RelativeSize';
import October19 from '../assets/October19.gexf';
import October20 from '../assets/October20.gexf';
import October21 from '../assets/October21.gexf';
import '../css/Analysis_AugustExplosion.css';

function NetworkAnalysisOctober () {
    return(
        <div className="mainDIV">
            <div className="networkDiv row">
                <div className="network network-left col-lg-6 col-sm-12">
                    <Sigma className="sigmaContainer" renderer="canvas" style={{height: "340px"}}
                    settings = {{
                        borderColor:'#FF3333'
                    }}
                    >
                        <EdgeShapes default="curve"/>
                        <NodeShapes style={{borderColor: "FFFFFF"}} default="circle" />
                        <LoadGEXF path={October19}>
                            <ForceAtlas2 barnesHutOptimize barnesHutTheta={0.6} iterationsPerRender={10} linLogMode timeout={3000}/>
                            <RelativeSize initialSize={15}/>
                        </LoadGEXF>
                    </Sigma>
                </div>
                <div className="col-lg-1 col-sm-0"></div>
                <div className="networkText col-lg-5 col-sm-12">
                    <h2>October 19 Nework</h2>
                    <p>This is the graph representing the relationship 
                        between the keywords available in each tweet and
                         the user who posted the tweet for October 19, 2019.
                         In this graph, there are seven different clusters.
                          The users on that day were mostly tweeting about
                           different things as there are not a lot of joining
                            edges between the users. We can only see three
                             users that are connected. Two of the users are 
                             connected by the words: ‘baby’ as they are both
                              talking about the time when protesters sang ‘Baby Shark’
                               to a scared kid. Also, two other users are connected 
                               by the words: ‘لبنان’, ‘ينتفض’ since they used 
                               the hashtag that was starting to become popular.
                    </p>
                </div>
            </div>
            <div className="networkDiv row">
                <div className="networkText col-lg-5 col-sm-12">
                    <h2>October 20 Nework</h2>
                    <p>This is the graph representing the relationship between the keywords available in
                         each tweet and the user who posted the tweet for October 20, 2019. In this graph,
                          there are three different clusters indicating that there is a lot of common keywords.
                           The users on that day were mostly tweeting about: ‘Lebanon’, ‘Beirut’,
                            ‘protest’ but each one of them is talking about a different thing as
                             each one has his/her own cloud of words. 
                    </p>
                </div>
                <div className="col-lg-1 col-sm-0"></div>
                <div className="network network-right col-lg-6 col-sm-12">
                    <Sigma  renderer="canvas" style={{height: "340px"}}>
                        <EdgeShapes default="curve"/>
                        <NodeShapes style={{borderColor: "FFFFFF"}} default="circle"/>
                        <LoadGEXF path={October20}>
                            <ForceAtlas2 barnesHutOptimize barnesHutTheta={0.6} iterationsPerRender={10} linLogMode timeout={3000}/>
                            <RelativeSize initialSize={15}/>
                        </LoadGEXF>
                    </Sigma>
                </div>
            </div>
            <div className="networkDiv row">
                <div className="network network-left col-lg-6 col-sm-12">
                    <Sigma  renderer="canvas" style={{height: "340px"}}>
                        <EdgeShapes default="curve"/>
                        <NodeShapes style={{borderColor: "FFFFFF"}} default="circle"/>
                        <LoadGEXF path={October21}>
                            <ForceAtlas2 barnesHutOptimize barnesHutTheta={0.6} iterationsPerRender={10} linLogMode timeout={3000}/>
                            <RelativeSize initialSize={15}/>
                        </LoadGEXF>
                    </Sigma>
                </div>
                <div className="col-lg-1 col-sm-0"></div>
                <div className="networkText col-lg-5 col-sm-12">
                    <h2>October 21 Nework</h2>
                    <p>This is the graph representing the relationship between the keywords
                         available in each tweet and the user who posted the tweet for
                          October 21, 2019. In this graph, there are five different clusters.
                           The users on that day were mostly tweeting about different things
                            as there is not a lot of joining edges between the users.
                             We can only see four users that are connected. Two of the
                              users are connected by the words: ‘الأحزاب’. Also, two 
                              other users are connected by the word: ‘people’.
                    </p>
                </div>
            </div>
        </div>
    );

}

export default NetworkAnalysisOctober;
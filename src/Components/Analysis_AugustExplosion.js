import React from 'react';
import {Sigma} from 'react-sigma';
import EdgeShapes from 'react-sigma/lib/EdgeShapes';
//import Filter from 'react-sigma/lib/Filter';
import ForceAtlas2 from 'react-sigma/lib/ForceAtlas2';
import LoadGEXF from 'react-sigma/lib/LoadGEXF';
import NodeShapes from 'react-sigma/lib/NodeShapes';
import RelativeSize from 'react-sigma/lib/RelativeSize';
import august4 from '../assets/August4.gexf';
import august7 from '../assets/August7.gexf';
import august8 from '../assets/August8.gexf';
import august9 from '../assets/August9.gexf';
import '../css/Analysis_AugustExplosion.css';

function NetworkAnalysisAugust () {
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
                        <LoadGEXF path={august4}>
                            <ForceAtlas2 adjustSizes={true} barnesHutOptimize barnesHutTheta={0.6} iterationsPerRender={10} linLogMode timeout={3000}/>
                            <RelativeSize initialSize={15}/>
                        </LoadGEXF>
                    </Sigma>
                </div>
                <div className="col-lg-1 col-sm-0"></div>
                <div className="networkText col-lg-5 col-sm-12">
                    <h2>August 4 Nework</h2>
                    <p>This is the graph representing the relationship between the keywords available in 
                        each tweet and the user who posted the tweet for August 4, 2020, the day the Beirut
                        Blast took place. In this graph, there are two different clusters indicating that 
                        there is a lot of common keywords. The users on that day were mostly tweeting about:
                        ‘لبنان’, ‘المرفأ’, ‘الإنفجار’, ‘الجرحى’ and ‘الله’ indicating that the people 
                        were busy that day with the explosion that happened in the port and were also
                        praying and asking God for help.
                    </p>
                </div>
            </div>
            <div className="networkDiv row">
                <div className="networkText col-lg-5 col-sm-12">
                    <h2>August 7 Nework</h2>
                    <p>This is the graph representing the relationship between the keywords 
                        available in each tweet and the user who posted the tweet for August 7,
                        2020. In this graph, there are seven different clusters. The users on
                        that day were mostly tweeting about different things as there is
                        not a lot of joining edges between the users. We can only see 
                        three users that are connected. Two of the users are connected 
                        by the words: ‘Lebanon’ and ‘president’. Also, two other users 
                        are connected by the word: ‘Macron’ as everyone around the world
                        and President Macron were trying to help the Lebanese after the blast.
                    </p>
                </div>
                <div className="col-lg-1 col-sm-0"></div>
                <div className="network network-right col-lg-6 col-sm-12">
                    <Sigma  renderer="canvas" style={{height: "340px"}}>
                        <EdgeShapes default="curve"/>
                        <NodeShapes style={{borderColor: "FFFFFF"}} default="circle"/>
                        <LoadGEXF path={august7}>
                            <ForceAtlas2 adjustSizes={true} barnesHutOptimize barnesHutTheta={0.6} iterationsPerRender={10} linLogMode timeout={3000}/>
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
                        <LoadGEXF path={august8}>
                            <ForceAtlas2 adjustSizes={true} barnesHutOptimize barnesHutTheta={0.6} iterationsPerRender={10} linLogMode timeout={3000}/>
                            <RelativeSize initialSize={15}/>
                        </LoadGEXF>
                    </Sigma>
                </div>
                <div className="col-lg-1 col-sm-0"></div>
                <div className="networkText col-lg-5 col-sm-12">
                    <h2>August 8 Nework</h2>
                    <p>
                        This is the graph representing the relationship between the keywords available
                        in each tweet and the user who posted the tweet for August 8, 2020. In this
                        graph, there are four different clusters. The users on that day were mostly
                        tweeting about different things as there is not a lot of joining edges
                        between the users but there is still some kind of similarity. We can only
                        see few users that are connected. Some of the users are connected by the
                        words: ‘لبنان’ and ‘ينتفض’, indicating that after the blast the hashtag
                        ‘لبنان_ينتفض’ was revived and people are angry at the government again.
                        Also, two other users are connected by the word: ‘القتلة’ as they are 
                        talking about the people that passed away at the time of the explosion.
                    </p>
                </div>
            </div>
            <div className="networkDiv row">
                <div className="networkText col-lg-5 col-sm-12">
                    <h2>August 9 Nework</h2>
                    <p>This is the graph representing the relationship between the keywords available
                        in each tweet and the user who posted the tweet for August 9, 2020. In this
                        graph, there are six different clusters. The users on that day were mostly 
                        tweeting about different things as there is not a lot of joining edges between
                        the users. We can only see few users that are connected. Two of the users are
                        connected by the words: ‘المرفأ’ and both are TV hosts ‘DimaSadek’ and 
                        ‘joemaalouftv’ that were raising their voice and trying to dig into the 
                        truth of what happened in the port. Also, two other users are connected 
                        by the word: ‘مساعدة’ as everyone around the world were trying to help 
                        the Lebanese after the blast.
                    </p>
                </div>
                <div className="col-lg-1 col-sm-0"></div>
                <div className="network network-right col-lg-6 col-sm-12">
                    <Sigma  renderer="canvas" style={{height: "340px"}}>
                        <EdgeShapes default="curve"/>
                        <NodeShapes style={{borderColor: "FFFFFF"}} default="circle"/>
                        <LoadGEXF path={august9}>
                            <ForceAtlas2 adjustSizes={true} barnesHutOptimize barnesHutTheta={0.6} iterationsPerRender={10} linLogMode timeout={3000}/>
                            <RelativeSize initialSize={15}/>
                        </LoadGEXF>
                    </Sigma>
                </div>
            </div>
        </div>
    );

}

export default NetworkAnalysisAugust;
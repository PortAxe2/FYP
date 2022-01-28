import React from 'react';
import '../css/eventPoster.css';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setEvent} from '../actions';

function Event ({name, image, linkURL}) {

    const dispatch = useDispatch();
    
    /*
    return(        
        <Link onClick={() => dispatch(setEvent(name))} to={`/${name}/AP`}>
            <div className="eventPoster" style={{backgroundImage: `url(${image})`}}>
            </div> 
        </Link>    
    );
    */

    return(        
        <Link onClick={() => dispatch(setEvent(name))} to={linkURL}>
            <div className="eventPoster" style={{backgroundImage: `url(${image})`}}>
            </div> 
        </Link>    
    );
    
}

export default Event;
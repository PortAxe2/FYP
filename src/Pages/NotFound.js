import React from 'react';
import er404 from '../Graphics/404-error.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';



function NotFound() {

    return(
        <div>
            <img src={er404} alt="Error 4040" style={{display: 'block', margin: 'auto', marginTop: '10vh', width: '50vh'}}/>
            <Button style={{lineHeight: '5vh' ,borderColor: '#3854c8' ,backgroundColor: '#2824bc' ,letterSpacing: '1.5px' ,fontWeight: '700' ,fontFamily: 'monospace' ,fontSize: '4vh' ,borderRadius: '50px' , display: 'block', margin: 'auto' , height:'7vh', width: '35vh'}}>
                <a href="/home" style={{color: 'white'}}>GO HOME</a>
            </Button>
        </div>
    );

}

export default NotFound;
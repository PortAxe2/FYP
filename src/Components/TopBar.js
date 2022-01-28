import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavItem, Navbar, NavbarBrand } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../css/topBar.css'

function TopBar() {

    

    return(
        <Navbar sticky="top" expand="lg" variant="light" bg="light">
            <div className="container-fluid">
                <Link to="/home">
                    <NavbarBrand className="navbar-brand" >
                        <span className="smp">SMP</span>CBA
                    </NavbarBrand>
                </Link>
                
                <Navbar.Toggle className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle Navigation"/> 
                
                <Navbar.Collapse id="navbarSupportedContent">
                    <Nav className="nav-list">
                        <NavItem className="nav-item"><Nav.Link href="/home/#features">Features</Nav.Link></NavItem>
                        <NavItem className="nav-item"><Nav.Link href="/aboutus">About Us</Nav.Link></NavItem>
                    </Nav>
                    
                </Navbar.Collapse>
            </div>
        </Navbar>

    );
}

export default TopBar;
import Container from 'react-bootstrap/Container';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import LoginButton from './LogInButton';

import { NavbarBrand } from 'react-bootstrap';


function Navigation() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <NavbarBrand>
                        <Nav.Link href="/">Insert Logo Here</Nav.Link>
                    </NavbarBrand>
                    <NavbarToggle aria-controls="basicnav-bar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="">Clothes</Nav.Link>
                            <Nav.Link href="">Favorites</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <LoginButton />
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
}

export default Navigation; 
import { NavbarBrand } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';


function Navigation() {
    return (
        <Navbar bg="light" variant="light" expand="lg">
            <Container>
                <NavbarBrand>
                    <img src="cover.png" width="30" height="30" className="d-inline-block align-top" alt=""></img>
                </NavbarBrand>
                <NavbarToggle aria-controls="basicnav-bar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="">Home</Nav.Link>
                        <Nav.Link href="">Newest Items</Nav.Link>
                        <NavDropdown title="Tops" id="basic-nav-dropdown">
                            <NavDropdown.Item href="">Blouses and Shirts</NavDropdown.Item>
                            <NavDropdown.Item href="">Cardigans and Shawls</NavDropdown.Item>
                            <NavDropdown.Item href="">Coats and Jackets</NavDropdown.Item>
                            <NavDropdown.Item href="">Dresses</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Pants" id="basic-nav-dropdown">
                            <NavDropdown.Item href="">Jeans</NavDropdown.Item>
                            <NavDropdown.Item href="">Slacks</NavDropdown.Item>
                            <NavDropdown.Item href="">Skirts</NavDropdown.Item>
                            <NavDropdown.Item href="">Shorts</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Clothing" id="basic-nav-dropdown">
                            <NavDropdown.Item href="">Socks</NavDropdown.Item>
                            <NavDropdown.Item href="">Tights</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation; 
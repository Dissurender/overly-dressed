import Container from 'react-bootstrap/Container';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';


function Navigation() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <NavbarToggle aria-controls="basicnav-bar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="">Blouses and Shirts</Nav.Link>
                        <Nav.Link href="">Cardigans and Shawls</Nav.Link>
                        <Nav.Link href="">Coats and Jackets</Nav.Link>
                        <Nav.Link href="">Dresses</Nav.Link>
                        <Nav.Link href="">Jeans</Nav.Link>
                        <Nav.Link href="">Slacks</Nav.Link>
                        <Nav.Link href="">Skirts</Nav.Link>
                        <Nav.Link href="">Shorts</Nav.Link>
                        <NavDropdown title="Misc." id="basic-nav-dropdown">
                            <NavDropdown.Item href="">Socks</NavDropdown.Item>
                            <NavDropdown.Item href="">Tights</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation; 
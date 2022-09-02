import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container className="footer-copyright p-5 bg-white text-right">
            <span>© {new Date().getFullYear()} Overly-Dressed</span>
        </Container>
    );
};

export default Footer;
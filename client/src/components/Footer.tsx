import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='footer-copyright row-md-3'>
            <Container>
                <span>© {new Date().getFullYear()} Overly-Dressed</span>
            </Container>
        </div>
    );
};

export default Footer;
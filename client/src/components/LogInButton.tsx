import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function LoginButton() {
    const currPath = useLocation().pathname;
    const isLogInPage = currPath.includes('auth');

    return isLogInPage ? null :
        <Link to="/auth">
            <Button variant="dark" size="lg">
                Log In
            </Button>
        </Link>
}

export default LoginButton;


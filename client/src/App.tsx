import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/ClothingItem.scss';
import './styles/Footer.scss';
import './styles/LoginForm.scss';
import './styles/Navigation.scss';

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import StorePage from './pages/StorePage';
import Auth from './pages/Auth';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/storePage/:id" element={<StorePage />} />
            <Route path="/auth" element={<Auth />} />
        </Routes>
    );
};

export default App;
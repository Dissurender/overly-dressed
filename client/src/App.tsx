import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import StorePage from './pages/StorePage';


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/storePage" element={<StorePage />} />
        </Routes>
    );
};

export default App;
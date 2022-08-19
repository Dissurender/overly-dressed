import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/ClothingItem.scss';

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import StorePage from './pages/StorePage';



//            <Route path="*" element={<NotFound/>} /> for 404 pages.

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/storePage/:id" element={<StorePage />} />
        </Routes>
    );
};

export default App;
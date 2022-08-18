import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Navigation from './Navigation';
import SlideShowCarousel from './SlideShowCarousel';
import ClothingGrid from './ClothingGrid';

const App = () => {
    return (
        <div>
            <Navigation />
            <SlideShowCarousel />
            <ClothingGrid />
        </div>
    );
};

export default App;
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Navigation from './Navigation';
import SlideShowCarousel from './SlideShowCarousel';
import ClothingGrid from './ClothingGrid';

const App = () => {
    return (
        <div>
            <h1>Hello World!</h1>
            <Navigation />
            <ClothingGrid />
            <SlideShowCarousel />
        </div>
    );
};

export default App;
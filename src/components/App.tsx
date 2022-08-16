import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Navigation from './Navigation';
import SlideShowCarousel from './SlideShowCarousel';

const App = () => {
    return (
        <div>
            <h1>Hello World!</h1>
            <Navigation />
            <SlideShowCarousel />
        </div>
    );
};

export default App;
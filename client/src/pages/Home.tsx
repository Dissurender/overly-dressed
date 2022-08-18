import React from 'react';
import Navigation from '../components/Navigation';
import SlideShowCarousel from '../components/SlideShowCarousel';
import ClothingGrid from '../components/ClothingGrid';

const Home = () => {
    return (
        <div>
            <Navigation />
            <SlideShowCarousel />
            <ClothingGrid />
        </div>
    );
};

export default Home;
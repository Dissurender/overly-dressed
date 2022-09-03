import React from 'react';
import Navigation from '../components/Navigation';
import SlideShowCarousel from '../components/SlideShowCarousel';
import ClothingGrid from '../components/ClothingGrid';
import Footer from "../components/Footer";


const Home = () => {
    return (
        <div>
            <Navigation />
            <SlideShowCarousel />
            <ClothingGrid />
            <ClothingGrid />
            <Footer />
        </div>
    );
};

export default Home;
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import StarsCanvas from '../components/canvas/Stars';
import About from '../components/About';
import Experience from '../components/Experience';
import Works from '../components/Works';
import Tech from '../components/Tech';
import Feedbacks from "../components/Feedbacks";
import Contact from '../components/Contact';
import Footer from '../components/Footer';






const Portfolio = () => {
    return (
        <div className='relative z-0 bg-primary'>
            <Navbar />
            <div className='relative z-0'>
                <Hero />
                <StarsCanvas />
            </div>
            <About />
            <Experience />
            <Works />
            <Tech />
            <Feedbacks />
            <div className='relative z-0'>
                <Contact />
            </div>
            <Footer />
        </div>
    )
}

export default Portfolio
import React from 'react';
import WeddingWebsite from '../WeddingWebsite';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';







const WebsiteWeddingPage = (page) => {
    return (
        <div className='relative z-0 bg-primary'>
            <Navbar />
            <WeddingWebsite/>
            <Footer />
        </div>
    )
}

export default WebsiteWeddingPage;
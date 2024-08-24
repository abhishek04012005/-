import React from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WeddingTemplate from '../WeddingTemplate';

const WeddingTemplatePage = () => {
    return (
        <div className='relative z-0 bg-primary'>
            <Navbar />
            <WeddingTemplate />
            <Footer />
        </div>
    )
}

export default WeddingTemplatePage
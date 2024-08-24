import React from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BirthdayTemplate from '../BirthdayTemplate';

const BirthdayTemplatePage = () => {
    return (
        <div className='relative z-0 bg-primary'>
            <Navbar />
            <BirthdayTemplate />
            <Footer />
        </div>
    )
}

export default BirthdayTemplatePage
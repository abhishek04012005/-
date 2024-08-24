import React from 'react'
import BirthdayWebsite from '../BirthdayWebsite'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const BirthdayWebsitePage = () => {
  return (
    <div className='relative z-0 bg-primary'>
            <Navbar />
            <BirthdayWebsite/>
            <Footer />
        </div>
  )
}

export default BirthdayWebsitePage
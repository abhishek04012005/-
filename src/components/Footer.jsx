
import React from 'react';
// import { useState } from 'react'
import { Box, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, LinkedIn, YouTube, GitHub} from '@mui/icons-material';
import '../App.css';
import { SectionWrapper } from '../hoc';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import EmailIcon from '@mui/icons-material/Email';





import Stack from '@mui/material/Stack';


const Footer = () => {

  

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                bgcolor: '',
                paddingTop: 3,
            }}
        >
            <Box className="footer-link">
                <ul>
                    <li > <Link to="/" >
                        Portfolio
                    </Link> </li>
                    <li > <Link to="/wedding-website">
                        Wedding Website
                    </Link> </li>
                    {/* <li ><Link to="/birthday-website">
                        Birthday Website
                    </Link> </li>
                    <li ><Link to="/birthday-invitation">
                        Birthday Invitation
                    </Link> </li> */}
                    <li ><Link to="/wedding-invitation">
                        Wedding Invitation
                    </Link></li>
                </ul>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit">
                    <a href="https://wa.me/919264248504?text=Hello%20Abhishek,%0AI'm%20impressed%20with%20your%20profile.%0AI%20wish%20to%20connect%20with%20you." target="_blank">
                        <WhatsAppIcon />
                    </a>
                </IconButton>
                <IconButton color="inherit">
                    <a href="mailto:theabhishekchoudhary0401@gmail.com" target="_blank">
                    <EmailIcon/>
                    </a>
                </IconButton>
                <IconButton color="inherit">
                    <a href="mailto:theabhishekchoudhary0401@gmail.com?subject=Hello%20Abhishek,%20I'm%20impressed%20with%20your%20profile.%20I%20wish%20to%20connect%20with%20you." target="_blank">
                        <YouTube />
                    </a>
                </IconButton>
                <IconButton color="inherit">
                    <a href="https://facebook.com/" target="_blank">
                        <Facebook />
                    </a>
                </IconButton>

                <IconButton color="inherit">
                    <a href="https://www.instagram.com/theabhishekchoudhary0401" target="_blank">
                        <Instagram />
                    </a>
                </IconButton>
                <IconButton color="inherit">
                    <a href="https://www.linkedin.com/in/abhishek-choudhary-80b753232/" target="_blank">
                        <LinkedIn />
                    </a>
                </IconButton>
                <IconButton color="inherit">
                    <a href="https://github.com/theabhishekchoudhary0401" target="_blank">
                        <GitHub />
                    </a>
                </IconButton>

            </Box>



        </Box>
    );
};

export default SectionWrapper(Footer, "");

// export default Footer;

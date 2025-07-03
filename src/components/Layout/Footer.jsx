import React from 'react';
import { Box, Grid, Typography, IconButton } from '@mui/material';
import { Icon } from '@iconify/react';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../../assets/images/logo-skin-6.png';

const links = [
  { id: 'home', text: 'Home' },
  { id: 'tasks', text: 'Tasks' },
  { id: 'benefits', text: 'Benefits' },
  { id: 'refer-earn', text: 'Refer & Earn' },
  { id: 'testimonials', text: 'Testimonials' },
  { id: 'faq', text: 'FAQ' },
];

const supportLinks = [
  { text: 'Help Center', url: '/help-center' },
  { text: 'Contact Us', url: '/contact' },
  { text: 'Terms of Service', url: '/terms' },
  { text: 'Privacy Policy', url: '/privacy' },
];

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#060614', color: '#fff', pt: 8, pb: 4 }}>
      <Grid container spacing={18} justifyContent="center" maxWidth="lg" sx={{ mx: 'auto' }}>
        {/* Logo & Description */}
        <Grid item xs={12} md={4}>
          <Box display="flex" alignItems="center" gap={1} mb={2}>
            <ScrollLink to="home" smooth={true} duration={500}>
              <img 
                src={logo} 
                alt="EarnX Logo" 
                style={{ 
                  width: 120, 
                  height: 46,
                  cursor: 'pointer'
                }} 
              />
            </ScrollLink>
          </Box>
          <Typography variant="body2" color="gray" style={{ textAlign: 'left' }}>
            Earn real money (INR) by completing simple <br /> online tasks daily.
            <br />
            Join millions of users earning from anywhere.
          </Typography>
        </Grid>

        {/* Useful Links */}
        <Grid item xs={6} md={4}>
          <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ textAlign: 'left' }}>
            Useful Links
          </Typography>

          <Grid container spacing={2}>
            {/* Left Column */}
            <Grid item xs={6}>
              {links.slice(0, 3).map((link) => (
                <ScrollLink
                  key={link.id}
                  to={link.id}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    color: 'gray',
                    textAlign: 'left',
                    cursor: 'pointer',
                    textDecoration: 'none'
                  }}
                >
                  {link.text}
                </ScrollLink>
              ))}
            </Grid>

            {/* Right Column */}
            <Grid item xs={6}>
              {links.slice(3).map((link) => (
                <ScrollLink
                  key={link.id}
                  to={link.id}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    color: 'gray',
                    textAlign: 'left',
                    cursor: 'pointer',
                    textDecoration: 'none'
                  }}
                >
                  {link.text}
                </ScrollLink>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* Support Links */}
        <Grid item xs={6} md={4}>
          <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ textAlign: 'left' }}>
            Support
          </Typography>

          <Grid container spacing={2}>
            {/* Left Column */}
            <Grid item xs={6}>
              {supportLinks.slice(0, 2).map((link) => (
                <a
                  key={link.text}
                  href={link.url}
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    color: 'gray',
                    textAlign: 'left',
                    textDecoration: 'none'
                  }}
                >
                  {link.text}
                </a>
              ))}
            </Grid>

            {/* Right Column */}
            <Grid item xs={6}>
              {supportLinks.slice(2).map((link) => (
                <a
                  key={link.text}
                  href={link.url}
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    color: 'gray',
                    textAlign: 'left',
                    textDecoration: 'none'
                  }}
                >
                  {link.text}
                </a>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Footer Bottom Section */}
      <Box
        mt={6}
        pt={3}
        borderTop="1px solid rgba(255,255,255,0.1)"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        flexWrap="wrap"
      >
        {/* Left Text */}
        <Typography variant="body2" color="gray">
          © 2025-26 EarnX. All Rights Reserved.
        </Typography>

        {/* Right Social Icons */}
        <Box display="flex" gap={2}>
          <IconButton sx={iconStyle}>
            <Icon icon="mdi:instagram" />
          </IconButton>
          <IconButton sx={iconStyle}>
            <Icon icon="mdi:facebook" />
          </IconButton>
          <IconButton sx={iconStyle}>
            <Icon icon="ri:twitter-x-line" />
          </IconButton>
          <IconButton sx={iconStyle}>
            <Icon icon="mdi:youtube" />
          </IconButton>
          <IconButton sx={iconStyle}>
            <Icon icon="ic:baseline-whatsapp" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

const iconStyle = {
  background: 'rgba(255, 255, 255, 0.05)',
  color: '#fff',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '50%',
  p: 1.2,
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  }
};

export default Footer;



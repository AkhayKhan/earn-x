import React from 'react';
import { Box, Typography, IconButton, Link } from '@mui/material';
import { Icon } from '@iconify/react';
import { Link as RouterLink } from 'react-router-dom';

const Footer2 = () => {
  return (
    <Box sx={{ backgroundColor: '#060614', color: '#fff', pt: 8, pb: 2 }}>
      {/* Footer Bottom Section */}
      <Box
        pt={3}
        borderTop="1px solid rgba(255,255,255,0.1)"
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        px={{ xs: 2, sm: 4, md: 8, lg: 25 }}
        textAlign={{ xs: 'center', sm: 'left' }}
        gap={2}
      >
        {/* Left Links */}
        <Box
          display="flex"
          justifyContent={{ xs: 'center', sm: 'flex-start' }}
          flexWrap="wrap"
          gap={2}
        >
          {['EarnX', 'Terms of Conditions', 'Privacy Policy', 'Contact Us', 'FAQ'].map((text, index) => (
            <Link
              key={index}
              component={RouterLink}
              to={
                text === 'Contact Us'
                  ? '/ContactUs'
                  : text === 'Privacy Policy'
                    ? '/privacy-policy'
                    : '#'
              }
              underline="hover"
              color="gray"
              sx={{
                fontSize: '14px',
                cursor: 'pointer',
                '&:hover': {
                  color: '#fff',
                },
              }}
            >
              {text}
            </Link>
          ))}
        </Box>

        {/* Right Social Icons */}
        <Box
          display="flex"
          justifyContent={{ xs: 'center', sm: 'flex-end' }}
          gap={2}
          mt={{ xs: 2, sm: 0 }}
        >
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

      {/* Copyright */}
      <Typography
        variant="body2"
        color="gray"
        align="center"
        mt={3}
        px={{ xs: 2, sm: 0 }}
      >
        © 2025-26 EarnX. All Rights Reserved.
      </Typography>
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

export default Footer2;

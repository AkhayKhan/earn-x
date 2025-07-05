import React from 'react';
import {
  Box,
  Typography,
  Button,
  Link,
  Stack,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import bgimg from '../../../assets/images/1381cdc04af51adb944a9087e3089b5231590653.png';

const ContactUs = () => {
  const [subject, setSubject] = React.useState('');
  const subjectOptions = ['Support', 'Sales', 'Feedback', 'Partnership', 'Complaint'];

  return (
    <>
      <Box
        sx={{
          inset: 0,
          backgroundImage: `url(${bgimg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.7,
          zIndex: -11,
          minHeight: '100vh',
          // background: '#060614',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          px: 2,
          pt: 10,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 5,
            width: '100%',
            maxWidth: 1200,
            color: '#fff',
            zIndex: 1,
          }}
        >
          {/* Left Info Section */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" fontWeight={600} mb={1}>
              Contact Us
            </Typography>
            <Typography color="gray" mb={4}>
              Need help? We're here for you.
            </Typography>

            <Stack spacing={2}>
              {[
                {
                  title: 'FAQs',
                  desc: (
                    <Link
                      href="#"
                      underline="none"
                      sx={{
                        background: 'linear-gradient(90deg, #7C39F6 0%, #AE81FF 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 600,
                      }}
                    >
                      View
                    </Link>
                  ),
                },
                {
                  title: 'Email Support',
                  desc: (
                    <Typography
                      component="a"
                      href="mailto:support@earnx.com"
                      sx={{
                        background: 'linear-gradient(90deg, #7C39F6 0%, #AE81FF 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textDecoration: 'none',
                        fontWeight: 500,
                        display: 'inline-block',
                        '&:hover': {
                          textDecoration: 'underline',
                          opacity: 0.9,
                        },
                      }}
                    >
                      support@earnx.com
                    </Typography>
                  ),
                },
                { title: 'Live Chat', desc: 'Available Mon–Fri, 10 AM - 6 PM' },
                {
                  title: 'Office / Legal Info',
                  desc: 'EarnX\nSome Business Street, Mumbai, India – 400001',
                },
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    color: 'white',
                    textTransform: 'none',
                    fontSize: '1rem',
                    p: 4.11,
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '20px',
                    background: `linear-gradient(180deg, rgba(255,255,255,0.04), rgba(153,153,153,0.04))`,
                    boxShadow: `inset 0 2.91px 8px #FFFFFF14, inset 0 -2.91px 8px #FFFFFF14`,
                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.08)' },
                  }}
                >
                  <Typography fontWeight={600} mb={0.5}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="gray" whiteSpace="pre-line">
                    {item.desc}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>

          {/* Right Form Section */}
          <Box
            sx={{
              flex: 1,
              p: 4,
              borderRadius: 4,
              background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.05))',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0px 0px 15px rgba(255,255,255,0.05)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Background Image */}
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${bgimg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.05,
                zIndex: -1,
              }}
            />


            <Typography variant="h5" fontWeight={600} mb={3}>
              Send Us Message
            </Typography>

            <Stack spacing={2}>
              <TextField
                placeholder="Full Name"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: {
                    color: '#fff',
                    borderRadius: 30,
                    padding: '1px 20px',
                    background: 'rgba(6, 6, 20, 0.7)',
                    backdropFilter: 'blur(5px)',
                  },
                }}
                sx={{
                  input: { color: '#fff' },
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                  },
                }}
              />

              <TextField
                placeholder="Email Address"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: {
                    color: '#fff',
                    borderRadius: 30,
                    padding: '1px 20px',
                    background: 'rgba(6, 6, 20, 0.7)',
                    backdropFilter: 'blur(5px)',
                  },
                }}
                sx={{
                  input: { color: '#fff' },
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                  },
                }}
              />

              <Select
                displayEmpty
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                fullWidth
                inputProps={{ style: { color: '#fff' } }}
                sx={{
                  color: '#fff',
                  borderRadius: 30,
                  background: 'rgba(6, 6, 20, 0.7)',
                  backdropFilter: 'blur(5px)',
                  px: 2,
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                  },
                }}
              >
                <MenuItem value="">
                  <em>Subject</em>
                </MenuItem>
                {subjectOptions.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>

              <TextField
                placeholder="Write your message..."
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                InputProps={{
                  style: {
                    color: '#fff',
                    borderRadius: 20,
                    padding: '20px',
                    background: 'rgba(6, 6, 20, 0.7)',
                    backdropFilter: 'blur(5px)',
                  },
                }}
                sx={{
                  textarea: { color: '#fff' },
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                  },
                }}
              />

              <Button
                variant="contained"
                sx={{
                  width: 'fit-content',
                  alignSelf: 'flex-start',
                  backgroundColor: '#7C39F6',
                  color: 'white',
                  textTransform: 'none',
                  fontSize: '1rem',
                  padding: '10px 24px',
                  borderRadius: '30px',
                  boxShadow: `inset 0 2.91px 6px #FFFFFF61, inset 0 -2.91px 6px #FFFFFF61`,
                  '&:hover': { backgroundColor: '#8C31F1' },
                }}
              >
                Submit Message
              </Button>

            </Stack>
          </Box>
        </Box>
      </Box >
    </>
  );
};

export default ContactUs;

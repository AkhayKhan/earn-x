import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Link,
  TextField,
  Stack,
} from '@mui/material';
import bgimg from '../../assets/images/1381cdc04af51adb944a9087e3089b5231590653.png';
import { useAuth } from '../../pages/context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

const CustomInput = ({ label, type = 'text', value, onChange, name }) => (
  <Box sx={{ position: 'relative', mb: 2 }}>
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${bgimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '30px',
        zIndex: 0,
      }}
    />
    <TextField
      type={type}
      name={name}
      placeholder={label}
      variant="outlined"
      fullWidth
      value={value}
      onChange={onChange}
      InputProps={{
        style: {
          color: '#fff',
          borderRadius: 30,
          padding: '2px 20px',
          background: 'rgba(6, 6, 20, 0.5)',
          backdropFilter: 'blur(5px)',
          boxShadow: 'inset 0 2.91px 8px #FFFFFF14, inset 0 -2.91px 8px #FFFFFF14',
          position: 'relative',
          zIndex: 1,
        },
      }}
      sx={{
        '& .MuiOutlinedInput-notchedOutline': {
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        input: {
          color: '#fff',
          '&::placeholder': {
            color: 'rgba(255,255,255,0.7)',
          },
        },
      }}
    />
  </Box>
);

const Login = () => {
  const [credentials, setCredentials] = useState({
    mobile: '',
    password: ''
  });
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/tasks';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: "Demo User",
      mobile: credentials.mobile,
      avatar: "https://example.com/avatar.jpg",
      points: 1000,
      referrals: 5
    };
    login(userData);
    navigate(from, { replace: true });
  };

  return (
    <Box
      sx={{
        minHeight: 'calc(80vh - 64px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#060614',
        p: 2,
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 450,
          width: '100%',
          p: 4,
          borderRadius: '16px',
          backgroundColor: 'rgba(6, 6, 20, 0.7)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            color: '#fff',
            fontWeight: 600,
            mb: 4,
          }}
        >
          Welcome back!
        </Typography>

        <Stack spacing={2}>
          <CustomInput
            label="Mobile Number"
            name="mobile"
            value={credentials.mobile}
            onChange={handleChange}
          />
          <CustomInput
            label="Password"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />

          <Box sx={{ textAlign: 'right' }}>
            <Link
              href="#"
              underline="none"
              sx={{
                color: '#aaa',
                fontSize: '0.85rem',
                '&:hover': {
                  color: '#7C39F6',
                }
              }}
            >
              Forgot password?
            </Link>
          </Box>
        </Stack>

        <Button
          type="submit"
          fullWidth
          sx={{
            mt: 3,
            mb: 2,
            py: 1.5,
            borderRadius: '30px',
            background: 'linear-gradient(90deg, #7C39F6, #A855F7)',
            color: '#fff',
            fontWeight: 600,
            fontSize: '1rem',
            textTransform: 'none',
            '&:hover': {
              background: 'linear-gradient(90deg, #8C31F1, #B266FF)',
            },
          }}
        >
          Login
        </Button>

        <Typography
          sx={{
            textAlign: 'center',
            mt: 2,
            color: '#aaa',
            fontSize: '0.9rem',
          }}
        >
          Don't have an account? {' '}
          <Link
            href="/signup"
            underline="none"
            sx={{
              color: '#7C39F6',
              fontWeight: 500,
              '&:hover': {
                textDecoration: 'underline',
              }
            }}
          >
            Sign up
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
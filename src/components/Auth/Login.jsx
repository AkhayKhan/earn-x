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
import mainimg from '../../assets/images/ef6cc216a9281d36480774a9e6fd429864f1e22b (1).png';
import Footer from '../Layout/Footer';
import { useAuth } from '../../pages/context/AuthContext';
import { useNavigate } from 'react-router-dom';

const CustomInput = ({ label, type = 'text', value, onChange }) => (
    <Box sx={{ position: 'relative' }}>
        <Box
            sx={{
                content: '""',
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
            placeholder={label}
            variant="outlined"
            fullWidth
            value={value}
            onChange={onChange}
            InputProps={{
                style: {
                    color: '#fff',
                    borderRadius: 30,
                    padding: '1px 20px',
                    background: 'rgba(6, 6, 20, 0.5)',
                    backdropFilter: 'blur(5px)',
                    boxShadow: 'inset 0 2.91px 8px #FFFFFF14, inset 0 -2.91px 8px #FFFFFF14',
                    position: 'relative',
                    zIndex: 1,
                },
            }}
            sx={{
                input: {
                    color: '#fff',
                    '&::placeholder': {
                        color: 'rgba(255,255,255,0.7)',
                    },
                },
                '& .MuiOutlinedInput-notchedOutline': {
                    border: '1px solid rgba(255, 255, 255, 0.2)',
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
    avatar: "https://example.com/avatar.jpg"
  };
  login(userData);
  navigate('/tasks'); 
};
    return (
        <>
            <Box
                sx={{
                    minHeight: '100vh',
                    background: '#060614',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    px: 2,
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: `url(${mainimg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 0.2,
                        zIndex: 0
                    }
                }}
            >
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        maxWidth: 400,
                        width: '100%',
                        position: 'relative',
                        zIndex: 1,
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
                            textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                        }}
                    >
                        Welcome back!
                    </Typography>

                    <Stack spacing={3}>
                        <CustomInput
                            label="Enter mobile number"
                            name="mobile"
                            value={credentials.mobile}
                            onChange={handleChange}
                        />
                        <CustomInput
                            label="Enter password"
                            type="password"
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                        />

                        <Box sx={{ textAlign: 'left' }}>
                            <Link
                                href="#"
                                underline="none"
                                sx={{
                                    color: '#aaa',
                                    fontSize: '0.85rem',
                                    '&:hover': {
                                        color: '#fff',
                                        textDecoration: 'underline'
                                    }
                                }}
                            >
                                Forgot your password?
                            </Link>
                        </Box>
                    </Stack>

                    <Button
                        type="submit"
                        fullWidth
                        sx={{
                            mt: 4,
                            borderRadius: 999,
                            py: 1.5,
                            background: 'linear-gradient(90deg, #7C39F6, #A855F7)',
                            color: '#fff',
                            fontWeight: 600,
                            boxShadow: '0 4px 20px rgba(124, 57, 246, 0.5)',
                            textTransform: 'none',
                            fontSize: '1rem',
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
                            mt: 3,
                            color: '#888',
                            fontSize: '0.9rem',
                            textShadow: '0 1px 3px rgba(0,0,0,0.5)'
                        }}
                    >
                        Don't have an account? {' '}
                        <Link
                            href="/signup"
                            underline="none"
                            sx={{
                                color: '#aaa',
                                '&:hover': {
                                    color: '#fff',
                                    textDecoration: 'underline'
                                }
                            }}
                        >
                            Sign up
                        </Link>
                    </Typography>
                </Box>
            </Box>
            <Footer />
        </>
    );
};

export default Login;
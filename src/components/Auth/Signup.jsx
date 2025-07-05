import React from 'react';
import {
    Box,
    Typography,
    Button,
    Link,
    TextField,
    Stack,
} from '@mui/material';
import bgimg from '../../assets/images/1381cdc04af51adb944a9087e3089b5231590653.png';

const CustomInput = ({ label }) => (
    <Box sx={{
        position: 'relative',
        '&::before': {
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
            zIndex: -1,
        }
    }}>
        <TextField
            placeholder={label}
            variant="outlined"
            fullWidth
            InputProps={{
                style: {
                    color: '#fff',
                    borderRadius: 30,
                    padding: '1px 20px',
                    background: 'rgba(6, 6, 20, 0.7)',
                    backdropFilter: 'blur(5px)',
                    boxShadow: 'inset 0 2.91px 8px #FFFFFF14, inset 0 -2.91px 8px #FFFFFF14',
                },
            }}
            sx={{
                input: { color: '#fff' },
                '& .MuiOutlinedInput-notchedOutline': {
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                },
            }}
        />
    </Box>
);

const Signup = () => {
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
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0
                }
            }}
        >
            <Box
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
                    mt: 16
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
                    Create an account
                </Typography>

                <Stack spacing={3}>
                    <CustomInput label="Enter full name" />
                    <CustomInput label="Enter mobile number" />
                    <CustomInput label="Enter password" />
                    <CustomInput label="Confirm password" />
                    <CustomInput label="Enter Referral Code" />
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
                        '&:hover': {
                            background: 'linear-gradient(90deg, #8C31F1, #B266FF)',
                        },
                    }}
                >
                    Create Account
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
                    Already have an account?{' '}
                    <Link
                        href="/login"
                        underline="none"
                        sx={{
                            color: '#aaa',
                            '&:hover': {
                                color: '#fff',
                                textDecoration: 'underline'
                            }
                        }}
                    >
                        Sign In
                    </Link>
                </Typography>
            </Box>
        </Box>
        </>
    );
};

export default Signup;
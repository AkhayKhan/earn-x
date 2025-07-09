// src/components/Dashboard/EarningsCard.jsx
import { useNavigate } from 'react-router-dom';

import { Box, Typography, Button, Container, Stack, Paper } from '@mui/material';
import Marquee from "react-fast-marquee";

import bgimg from '../../../assets/images/1381cdc04af51adb944a9087e3089b5231590653.png';
import Task from '../Tasks/Task';
import Benefits from '../Benefits/Benefits';
import UpgradePremium from '../ReferEarn/UpgradePremium';
import Testimonials from '../Testimonials/Testimonials';
import Questions from '../FAQ/Questions';




const EarningsCard = () => {
    const navigate = useNavigate();
    return (
        <>
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    overflow: 'hidden',
                    boxShadow: 1,
                    background: '#060614',
                    pb: 12,
                }}
            >


                {/* bgimg behind content */}
                <Box
                    component="img"
                    src={bgimg}
                    alt="logo-bg"
                    sx={{
                        position: 'absolute',
                        top: '20%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '700px',
                        height: '662px',
                        zIndex: 12,
                        // opacity: 0.6
                    }}
                />

                {/* Main Content */}
                <Container
                    sx={{
                        position: 'relative',
                        zIndex: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        color: 'white',
                        mt: 10
                    }}
                >
                    {/* Heading Section */}
                    <Typography variant="h1" gutterBottom sx={{
                        fontWeight: 'bold',
                        mb: 2,
                        fontSize: '3.5rem',
                        lineHeight: 1.2
                    }}>
                        Earn Real Cash Daily<br />with Simple Online Tasks
                    </Typography>
                    <Typography variant="body1" paragraph sx={{
                        mb: 6,
                        maxWidth: '600px',
                        fontSize: '1.1rem',
                        opacity: 0.8
                    }}>
                        Complete easy tasks, get paid in real INR. No skills<br />required, start earning today!
                    </Typography>

                    {/* Buttons Section */}
                    <Box sx={{
                        display: 'flex',
                        gap: '16px',
                        mb: 8
                    }}>
                        <Button
                            onClick={() => navigate('/login')}

                            sx={{
                                backgroundColor: '#7C39F6',
                                color: 'white',
                                textTransform: 'none',
                                fontSize: '1rem',
                                px: 4,
                                py: 1.5,
                                borderRadius: '30px',
                                boxShadow: 'inset 0px 2.91px 6px 0px #FFFFFF61, inset 0px -2.91px 6px 0px #FFFFFF61',
                                '&:hover': {
                                    backgroundColor: '#8C31F1',
                                },
                            }}
                        >
                            Start Earning Free
                        </Button>
                        <Button
                            onClick={() => navigate('/login')}

                            sx={{
                                color: 'white',
                                textTransform: 'none',
                                fontSize: '1rem',
                                px: 4,
                                py: 1.5,
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                borderRadius: '30px',
                                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(153, 153, 153, 0.04) 100%)',
                                boxShadow: 'inset 0px 2.91px 8px 0px #FFFFFF14, inset 0px -2.91px 8px 0px #FFFFFF14',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                },
                            }}
                        >
                            Login
                        </Button>
                    </Box>

                    {/* Wallet Card */}
                    <Paper elevation={3} sx={{
                        width: '100%',
                        maxWidth: {
                            xs: '300px',
                            sm: '380px',
                        }, p: 3,
                        borderRadius: '16px',
                        background: 'linear-gradient(180deg, #1E1E3A 0%, #12122A 100%)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
                        textAlign: 'left',
                        color: 'white'
                    }}>

                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                            EarnX Wallet
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 3 }}>
                            Your earnings
                        </Typography>

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            mb: 2
                        }}>
                            <Typography variant="body2">Available Balance</Typography>
                            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>$1,250</Typography>
                        </Box>

                        <Stack spacing={2} sx={{ my: 3 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography variant="body2">Watch Video Task</Typography>
                                <Typography variant="body2" color="#00E676">+$15</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography variant="body2">Referral Bonus</Typography>
                                <Typography variant="body2" color="#00E676">+$10</Typography>
                            </Box>
                        </Stack>

                        <Button fullWidth variant="contained" sx={{
                            mt: 2,
                            backgroundColor: '#7C39F6',
                            color: 'white',
                            borderRadius: '8px',
                            py: 1.5,
                            textTransform: 'none',
                            '&:hover': {
                                backgroundColor: '#8C31F1'
                            }
                        }}>
                            Withdraw to UPI
                        </Button>

                        <Typography variant="caption" display="block" sx={{
                            mt: 2,
                            textAlign: 'center',
                            color: 'rgba(255,255,255,0.5)'
                        }}>
                            Daily New Tasks!
                        </Typography>
                    </Paper>

                </Container>
                {/* Earnings Marquee */}
                <Marquee
                    gradient={false}
                    speed={50}
                    direction="right"
                    style={{
                        marginTop: '40px',
                        padding: '30px 0',
                        borderStyle: 'solid',
                        borderWidth: '1px 0px',
                        borderColor: '#FFFFFF14',
                        backdropFilter: 'blur(14px)',
                        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(153, 153, 153, 0.02) 100%)',
                        color: 'white',
                        fontSize: '1rem',
                        fontWeight: 500,
                    }}
                >
                    Rahul earned ₹42 💰 &nbsp;&nbsp;&nbsp; Sneha earned ₹11 ✨ &nbsp;&nbsp;&nbsp; Amit earned ₹75 🎉 &nbsp;&nbsp;&nbsp; Priya earned ₹33 👍 &nbsp;&nbsp;&nbsp; Vijay earned ₹50 💸 &nbsp;&nbsp;&nbsp; Anjali earned ₹22 😊 &nbsp;&nbsp;&nbsp; Sandeep earned ₹88 🔥 &nbsp;&nbsp;&nbsp; Neha earned ₹15 ✅ &nbsp;&nbsp;&nbsp; Rajat earned ₹61 💥
                </Marquee>


            </Box>
            <Task />
            <Benefits />
            <UpgradePremium />
            <Testimonials />
            <Questions />
        </>
    );
};

export default EarningsCard;
import React from 'react';
import { Box, Typography, Container, Card, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

import bgimg from '../../../assets/images/1381cdc04af51adb944a9087e3089b5231590653.png';
import icon from '../../../assets/icon/Group (1).png';

const benefitData = [
    {
        title: 'Real INR Payouts',
        desc: 'Withdraw directly to your UPI/bank account.',
    },
    {
        title: 'Daily Bonus',
        desc: 'Login daily to earn bonuses & unlock streak rewards.',
    },
    {
        title: 'Simple Tasks',
        desc: 'Just install apps, follow instructions & get rewarded.',
    },
    {
        title: 'Referral Program',
        desc: 'Invite friends & earn lifetime referral commissions.',
    },
];

const Benefits = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                overflow: 'hidden',
                background: '#060614',
                pb: 12,
            }}
        >


            <Box
                component="img"
                src={bgimg}
                alt="logo-bg"
                sx={{
                    position: 'absolute',
                    top: '40%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 700,
                    height: 662,
                    zIndex: 1,
                }}
            />

            {/* Main Benefits Section */}
            <Container
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    textAlign: 'center',
                    color: 'white',
                    pt: 8,
                    maxWidth: 'lg',
                }}
            >
                <Typography variant="h1" sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', md: '3rem' }, mb: 2 }}>
                    Why Choose EarnX
                </Typography>
                <Typography
                    variant="body1"
                    sx={{ opacity: 0.8, mb: 6, maxWidth: 600, mx: 'auto', fontSize: { xs: '1rem', md: '1.125rem' } }}
                >
                    We make earning money online simple, transparent and accessible for everyone
                </Typography>

                {/* Horizontal Scroll Cards */}
                <Box
                    sx={{
                        display: 'flex',
                        gap: 3,
                        flexWrap: 'nowrap',
                        overflowX: 'auto',
                        px: 1,
                        scrollSnapType: 'x mandatory',
                        '&::-webkit-scrollbar': {
                            display: 'none',
                        },
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                    }}
                >
                    {benefitData.map((benefit, index) => (
                        <Card
                            key={index}
                            component={motion.div}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ scale: 1.03 }}
                            sx={{
                                flex: '0 0 220px',
                                scrollSnapAlign: 'start',
                                background:
                                    'linear-gradient(to bottom, rgba(255,255,255,0.02), rgba(255,255,255,0.03))',
                                border: '1px solid rgba(255,255,255,0.05)',
                                borderRadius: 4,
                                p: 3,
                                color: 'white',
                                backdropFilter: 'blur(10px)',
                                cursor: 'pointer',
                            }}
                        >
                            <CardContent sx={{ textAlign: 'left', p: 0 }}>
                                <Box
                                    sx={{
                                        width: 48,
                                        height: 48,
                                        borderRadius: 2,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mb: 3,
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                    }}
                                >
                                    <img src={icon} alt="benefit-icon" width={24} height={24} />
                                </Box>
                                <Typography variant="h6" fontWeight="bold" gutterBottom>
                                    {benefit.title}
                                </Typography>
                                <Typography variant="body2" sx={{ opacity: 0.5 }}>
                                    {benefit.desc}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Container>

            {/* Referral Section */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    background: `
                            linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(153, 153, 153, 0.02) 100%),
                            linear-gradient(360deg, rgba(124, 57, 246, 0) 0%, rgba(124, 57, 246, 0.2) 100%)
                            `,
                    backdropFilter: 'blur(20px)',
                    border: '1px solid #FFFFFF14',
                    borderRadius: 4,
                    mx: 'auto',
                    mt: 12,
                    mb: 8,
                    maxWidth: '70%',
                    px: { xs: 3, md: 6 },
                    py: { xs: 6, md: 8 },
                }}
            >

                <Container
                    disableGutters
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        color: 'white',
                    }}
                >
                    <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' }, mb: { xs: 4, md: 0 } }}>
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 'bold',
                                fontSize: { xs: '1.75rem', md: '2.5rem' },
                                mb: 3,
                                background: `linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(180deg, rgba(6, 6, 20, 0) 28.52%, rgba(6, 6, 20, 0.5) 95.96%)`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                display: 'inline-block',
                            }}
                        >
                            Invite Friends, Earn ₹10 Per Referral
                        </Typography>


                        <Typography
                            variant="body1"
                            sx={{
                                opacity: 0.8,
                                mb: 4,
                                maxWidth: { xs: '100%', md: 500 },
                                mx: { xs: 'auto', md: 0 },
                                fontSize: { xs: '1rem', md: '1.125rem' },
                            }}
                        >
                            Share your unique referral link with friends and family. When they sign up and complete their first task, you both earn ₹10!
                        </Typography>


                        <Button
                            sx={{
                                backgroundColor: '#7C39F6',
                                color: 'white',
                                textTransform: 'none',
                                fontSize: '0.8rem',
                                px: 4,
                                py: 1.5,
                                borderRadius: '30px',
                                boxShadow: 'inset 0px 2.91px 6px 0px #FFFFFF61, inset 0px -2.91px 6px 0px #FFFFFF61',
                                '&:hover': {
                                    backgroundColor: '#8C31F1',
                                },
                            }}
                        >
                            Sign Up to Get Your Referral Link
                        </Button>
                    </Box>

                    {/* Right Side: Three Mini-Cards */}
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 3,
                            alignItems: { xs: 'center', md: 'flex-end' },
                        }}
                    >
                        <Box
                            sx={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: { xs: 'center', md: 'flex-end' },
                            }}
                        >
                            {[
                                {
                                    title: 'Unlimited Referrals',
                                    desc: 'No limit on how many friends you can refer',
                                    mt: 0,
                                },
                                {
                                    title: 'Instant Rewards',
                                    desc: 'Get paid as soon as your friend completes a task',
                                },
                                {
                                    title: 'Win-Win',
                                    desc: 'Both you and your friend get ₹10 each',
                                },
                            ].map((card, idx) => (
                                <Box
                                    key={idx}
                                    sx={{
                                        width: { xs: '100%', sm: '80%', md: '320px' },
                                        textAlign: 'left',
                                        p: 3,
                                        mb: 3,
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        borderRadius: 3,
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        mt: card.mt,
                                        transition: 'transform 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.02)',
                                        },
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <img src={icon} alt="benefit-icon" width={24} height={24} />
                                    </Box>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ opacity: 0.7 }}>
                                        {card.desc}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>

                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default Benefits;

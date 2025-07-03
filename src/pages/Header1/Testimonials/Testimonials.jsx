import React from 'react';
import { Box, Typography, Container, Card, Avatar, Stack } from '@mui/material';
import { motion } from 'framer-motion';

import bgimg from '../../../assets/images/1381cdc04af51adb944a9087e3089b5231590653.png';
import mainimg from '../../../assets/images/ef6cc216a9281d36480774a9e6fd429864f1e22b (1).png';
import icon from '../../../assets/icon/Group 5.png';

const testimonials = [
    {
        quote: "EarnX helped me earn my first $500 online within a week. It's so easy to use and the rewards are real!",
        name: "Ravi Kumar",
        location: "Delhi",
    },
    {
        quote: "I got ₹75 just for signing up and completing a small task. Really surprised how smooth the process was.",
        name: "Sneha Roy",
        location: "Kolkata",
    },
    {
        quote: "I've already earned over ₹1,000. This is a great deal of work!",
        name: "Prya Sharma",
        location: "Mumbai",
    },
    {
        quote: "Premium plan = more bonuses + faster payouts. Worth it!",
        name: "Megha Singh",
        location: "Bhopal",
    },
    {
        quote: "Great platform for college students like me. I earn a little daily without spending anything.",
        name: "Kritika Jain",
        location: "Chandganh",
    },
    {
        quote: "I've been using EarnX for a month now and I've already referred over 30 people. The referral program pays instantly and my friends love it too!",
        name: "Aditya Verma",
        location: "Jaipur",
    },
    {
        quote: "I never expected to actually earn money online from tasks, but EarnX has proven to be legit. I've withdrawn twice to Paytm and it worked flawlessly.",
        name: "Farhan Ali",
        location: "Lucknow",
    }
];

const Testimonials = () => {
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
            {/* Background Images - Unchanged */}
            <Box
                component="img"
                src={mainimg}
                alt="background"
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0,
                }}
            />

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

            {/* Main Content - Unchanged Layout */}
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
                    What Our Users Say
                </Typography>
                <Typography
                    variant="body1"
                    sx={{ opacity: 0.8, mb: 6, maxWidth: 600, mx: 'auto', fontSize: { xs: '1rem', md: '1.125rem' } }}
                >
                    Join thousands of satisfied users who are earning real money with EarnX
                </Typography>

                {/* Testimonials Grid - Same Layout with Enhanced Animations */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: 'repeat(3, 1fr)',
                            lg: 'repeat(4, 1fr)'
                        },
                        gap: 1, 
                        mt: 2,
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            component={motion.div}
                            initial={{ opacity: 0, y: 50, rotate: -2 }}
                            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ 
                                y: -5,
                                transition: { duration: 0.2 }
                            }}
                            transition={{ 
                                type: "spring",
                                stiffness: 100,
                                damping: 15,
                                delay: index * 0.1
                            }}
                            sx={{
                                background: 'linear-gradient(to bottom, rgba(255,255,255,0.02), rgba(255,255,255,0.05))',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: 3,
                                p: 5,
                                backdropFilter: 'blur(10px)',
                                textAlign: 'center',
                                minHeight: '200px',
                                width: '200px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                            }}
                        >
                            {/* Quote icon with subtle animation */}
                            <Box
                                component={motion.div}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 0.6, scale: 1 }}
                                transition={{ delay: index * 0.1 + 0.2 }}
                                sx={{
                                    position: 'absolute',
                                    top: 6,
                                    left: 6,
                                    width: '55px',
                                    height: '55px',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '50%',
                                }}
                            >
                                <Box 
                                    component="img" 
                                    src={icon} 
                                    alt="quote icon"
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain'
                                    }}
                                />
                            </Box>

                            <Typography
                                variant="body1"
                                component={motion.div}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: index * 0.1 + 0.3 }}
                                sx={{
                                    mb: 1,
                                    fontStyle: 'italic',
                                    color: '#fff',
                                    pl: 1,
                                    pt: 3 
                                }}
                            >
                                "{testimonial.quote}"
                            </Typography>

                            <Box
                                component={motion.div}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: index * 0.1 + 0.4 }}
                            >
                                <Stack direction="row" alignItems="center" spacing={2} sx={{ color: '#fff' }}>
                                    <Avatar
                                        component={motion.div}
                                        whileHover={{ scale: 1.05 }}
                                        sx={{
                                            bgcolor: 'rgba(103, 58, 183, 0.8)',
                                            width: 40,
                                            height: 40
                                        }}
                                    >
                                        {testimonial.name.charAt(0)}
                                    </Avatar>
                                    <Box>
                                        <Typography fontWeight="bold">{testimonial.name}</Typography>
                                        <Typography variant="body2" sx={{ opacity: 0.7, color: '#fff' }}>
                                            {testimonial.location}
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>
                        </Card>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Testimonials;
import React from 'react';
import { Box, Typography, Container, Card, CardContent, Button, Checkbox } from '@mui/material';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

import bgimg from '../../../assets/images/1381cdc04af51adb944a9087e3089b5231590653.png';
import mainimg from '../../../assets/images/ef6cc216a9281d36480774a9e6fd429864f1e22b (1).png';
import icon from '../../../assets/icon/Group (1).png';

const UpgradePremium = () => {
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
            {/* Background Images */}
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
                    Upgrade to Premium
                </Typography>
                <Typography
                    variant="body1"
                    sx={{ opacity: 0.8, mb: 6, maxWidth: 600, mx: 'auto', fontSize: { xs: '1rem', md: '1.125rem' } }}
                >
                    Unlock exclusive tasks and earn more with our premium membership
                </Typography>

                {/* Pricing Plans Section */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: 4,
                        justifyContent: 'center',
                        alignItems: 'center',
                        mt: 6,
                    }}
                >
                    {/* Free Plan Card */}
                    <Card
                        component={motion.div}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        sx={{
                            width: { xs: '100%', md: '350px' },
                            background: 'linear-gradient(to bottom, rgba(255,255,255,0.02), rgba(255,255,255,0.03))',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: 4,
                            p: 3,
                            color: 'white',
                            backdropFilter: 'blur(10px)',
                        }}
                    >
                        <CardContent>
                            <Typography variant="h5" fontWeight="bold" gutterBottom>
                                Basic Plan
                            </Typography>
                            <Typography variant="h4" fontWeight="bold" sx={{ my: 2 }}>
                                Free /Month
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.7, mb: 3 }}>
                                Perfect for small businesses or startups, our Starter Plan gives you the essential tools to manage your finances with ease
                            </Typography>
                            <Box sx={{ mt: 3 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <Checkbox
                                        disabled
                                        checked={true}
                                        sx={{
                                            color: 'rgba(255,255,255,0.5)',
                                            '&.Mui-disabled': {
                                                color: 'rgba(255,255,255,0.3)',
                                            },
                                        }}
                                    />
                                    <Typography>5 Daily Task</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <Checkbox
                                        disabled
                                        checked={true}
                                        sx={{
                                            color: 'rgba(255,255,255,0.5)',
                                            '&.Mui-disabled': {
                                                color: 'rgba(255,255,255,0.3)',
                                            },
                                        }}
                                    />
                                    <Typography>Upto ₹1 Daily Login Bonus</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <Checkbox
                                        disabled
                                        checked={true}
                                        sx={{
                                            color: 'rgba(255,255,255,0.5)',
                                            '&.Mui-disabled': {
                                                color: 'rgba(255,255,255,0.3)',
                                            },
                                        }}
                                    />
                                    <Typography>₹10 Referral Bonus</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <Checkbox
                                        disabled
                                        checked={true}
                                        sx={{
                                            color: 'rgba(255,255,255,0.5)',
                                            '&.Mui-disabled': {
                                                color: 'rgba(255,255,255,0.3)',
                                            },
                                        }}
                                    />
                                    <Typography>₹200 Minimum Withdrawal</Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>

                    {/* Premium Plan Card */}
                    <Card
                        component={motion.div}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        sx={{
                            width: { xs: '100%', md: '350px' },
                            background: 'linear-gradient(135deg, rgba(103,58,183,0.2), rgba(81,45,168,0.3))',
                            border: '1px solid rgba(103,58,183,0.5)',
                            borderRadius: 4,
                            p: 3,
                            color: 'white',
                            backdropFilter: 'blur(10px)',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                px: 2,
                                py: 1,
                                bgcolor: '#8C31F1',
                                borderBottomLeftRadius: 12,
                                fontSize: '0.8rem',
                                fontWeight: 'bold',
                            }}
                        >
                            RECOMMENDED
                        </Box>
                        <CardContent>
                            <Typography variant="h5" fontWeight="bold" gutterBottom>
                                Premium User
                            </Typography>
                            <Typography variant="h4" fontWeight="bold" sx={{ my: 2 }}>
                                $149 /Month
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.7, mb: 3 }}>
                                Perfect for small businesses or startups, our Starter Plan gives you the essential tools to manage your finances with ease
                            </Typography>

                            <Box sx={{ mt: 3 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <Checkbox
                                        disabled
                                        checked
                                        sx={{
                                            color: 'rgba(255,255,255,0.8)',
                                            '&.Mui-checked': {
                                                color: 'rgba(255,255,255,0.8)',
                                            },
                                        }}
                                    />
                                    <Typography>Unlimited Tasks</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <Checkbox
                                        disabled
                                        checked
                                        sx={{
                                            color: 'rgba(255,255,255,0.8)',
                                            '&.Mui-checked': {
                                                color: 'rgba(255,255,255,0.8)',
                                            },
                                        }}
                                    />
                                    <Typography>Extra Daily Login Rewards</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <Checkbox
                                        disabled
                                        checked
                                        sx={{
                                            color: 'rgba(255,255,255,0.8)',
                                            '&.Mui-checked': {
                                                color: 'rgba(255,255,255,0.8)',
                                            },
                                        }}
                                    />
                                    <Typography>Exclusive Giveaways Access</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <Checkbox
                                        disabled
                                        checked
                                        sx={{
                                            color: 'rgba(255,255,255,0.8)',
                                            '&.Mui-checked': {
                                                color: 'rgba(255,255,255,0.8)',
                                            },
                                        }}
                                    />
                                    <Typography>₹100 Minimum Withdrawal</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <Checkbox
                                        disabled
                                        checked
                                        sx={{
                                            color: 'rgba(255,255,255,0.8)',
                                            '&.Mui-checked': {
                                                color: 'rgba(255,255,255,0.8)',
                                            },
                                        }}
                                    />
                                    <Typography>Priority Support</Typography>
                                </Box>
                            </Box>

                            <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                    mt: 3,
                                    py: 1.5,
                                    borderRadius: 2,
                                    background: 'linear-gradient(135deg, #673ab7, #9c27b0)',
                                    fontWeight: 'bold',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #5e35b1, #8e24aa)',
                                    },
                                }}
                            >
                                Upgrade to Premium – $149
                            </Button>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </Box>
    );
};

export default UpgradePremium;
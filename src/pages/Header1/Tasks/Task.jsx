import { Box, Typography, Button, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';

import { Icon } from '@iconify/react'
import bgimg from '../../../assets/images/1381cdc04af51adb944a9087e3089b5231590653.png';
import xbet from '../../../assets/Taskimg/1xbet.png';
import binance from '../../../assets/Taskimg/binance.png';
import dream11 from '../../../assets/Taskimg/dream11.png';
import my11circle from '../../../assets/Taskimg/my11circle.png';
import winzo from '../../../assets/Taskimg/winzo.png';
import zupee from '../../../assets/Taskimg/zupee.png';

const tasks = [
    { img: binance, title: 'Binance', desc: 'Install & Register App and get a EarnX reward!', amount: '₹100' },
    { img: dream11, title: 'Dream11', desc: 'Register + Add ₹50', amount: '₹75' },
    { img: zupee, title: 'Zupee', desc: 'Register + Add ₹10', amount: '₹100' },
    { img: xbet, title: '1xBet', desc: 'Register + Add ₹100', amount: '₹40' },
    { img: winzo, title: 'WinZO Games', desc: 'Register + Add ₹20', amount: '₹75' },
    { img: my11circle, title: 'My11Circle', desc: 'Install & Register App and get a EarnX reward!', amount: '₹120' },
];

const Task = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                overflow: 'hidden',
                background: '#060614',
                pb: 12,
                mt:5
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
                    zIndex: 1,
                    // opacity: 0.4,
                }}
            />

            <Container sx={{ position: 'relative', zIndex: 2, textAlign: 'center', color: 'white', pt: 8 }}>
                <Typography variant="h1" sx={{ fontWeight: 'bold', fontSize: '3rem', mb: 2 }}>
                    Available Tasks
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.8, mb: 6, maxWidth: 600, mx: 'auto' }}>
                    Complete these simple tasks and earn real money directly to your UPI account
                </Typography>

                {/* Cards Grid */}
                <Grid container spacing={5} justifyContent="center">
                    {tasks.map((task, index) => (
                        <Grid item xs={12} sm={7} md={2} key={index}>
                            <Card
                                component={motion.div}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                sx={{
                                    borderRadius: 4,
                                    height: 380,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    background: '#100c25',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    color: 'white',
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={task.img}
                                    alt={task.title}
                                    sx={{
                                        width: '328px',
                                        height: 160,
                                        objectFit: 'cover',
                                        borderRadius: '12px',
                                    }}
                                />
                                <CardContent
                                    sx={{
                                        flexGrow: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Box>
                                        <Typography variant="h6" fontWeight="bold">{task.title}</Typography>
                                        <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>{task.desc}</Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                        <Typography sx={{ color: '#b98eff' }}>{task.amount}</Typography>
                                        <Typography sx={{ opacity: 0.6 }}>Locked</Typography>
                                    </Box>

                                    <Button
                                        fullWidth
                                        variant="contained"
                                        sx={{
                                            backgroundColor: '#7C39F6',
                                            textTransform: 'none',
                                            fontWeight: 600,
                                            py: 1.2,
                                            borderRadius: '8px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: 1,
                                            '&:hover': { backgroundColor: '#8C31F1' },
                                        }}
                                    >
                                        <Icon icon="mdi:lock-outline" width={20} />
                                        Sign Up to Unlock
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

            </Container>
        </Box>
    );
};

export default Task;

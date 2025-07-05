import React from 'react';
import {
    Box,
    Typography,
    Container,
    Card,
    CardContent,
    Button,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Chip
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';

import bgimg from '../../../assets/images/1381cdc04af51adb944a9087e3089b5231590653.png';
import leftCircle from '../../../assets/images/right-half-circle.png';
import rightCircle from '../../../assets/images/left-half-circle.png';
import logo from '../../../assets/icon/Group.png';

// Accordion Item Component
const AccordionItem = ({ question, answer }) => (
    <Accordion
        sx={{
            background: 'transparent',
            color: 'white',
            boxShadow: 'none',
            '&::before': { display: 'none' },
        }}
    >
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
            <Typography fontWeight={500}>{question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography sx={{ fontSize: '0.9rem', opacity: 0.7 }}>{answer}</Typography>
        </AccordionDetails>
    </Accordion>
);

const Questions = () => {
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
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: 4,
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                    }}
                >
                    {/* LEFT SIDE */}
                    <Box
                        sx={{
                            position: 'relative',
                            width: { xs: '100%', md: '40%' },
                            backgroundImage: `url(${bgimg})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            textAlign: 'center',
                        }}
                    >
                        <Container sx={{ position: 'relative', zIndex: 2 }}>
                            <Typography
                                variant="h4"
                                fontWeight="bold"
                                gutterBottom
                                sx={{ color: 'white', mb: 8, textAlign: 'left' }}
                            >
                                Frequently asked questions
                            </Typography>

                            <Card
                                component={motion.div}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                sx={{
                                    background: `
                                        linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(153, 153, 153, 0.02) 100%),
                                        linear-gradient(360deg, rgba(124, 57, 246, 0) 48.08%, rgba(124, 57, 246, 0.14) 100%)
                                        `,
                                    boxShadow: `0px -3px 6px 0px #FFFFFF14 inset, 0px 3px 6px 0px #FFFFFF14 inset`,
                                    borderRadius: '20px',
                                    px: 3,
                                    py: 2.5,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    // minHeight: 120,
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h6" gutterBottom sx={{ textAlign: 'left',color:'#fff' }}>
                                        Still have a questions?
                                    </Typography>
                                    <Typography variant="body2" sx={{ opacity: 0.7, mb: 3, textAlign: 'left' ,color:'#fff'}}>
                                        We’re here to help. If you need more info about tasks, withdrawals, or anything else — just reach out!
                                    </Typography>

                                    <Box sx={{ textAlign: 'left' }}>
                                        <Button
                                            sx={{
                                                backgroundColor: '#7C39F6',
                                                color: 'white',
                                                textTransform: 'none',
                                                fontSize: '0.8rem',
                                                padding: '10px 32px',
                                                borderRadius: '30px',
                                                boxShadow: `inset 0 2.91px 6px #FFFFFF61, inset 0 -2.91px 6px #FFFFFF61`,
                                                '&:hover': { backgroundColor: '#8C31F1' },
                                            }}
                                        >
                                            Send email
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Container>
                    </Box>

                    {/* RIGHT SIDE */}
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        sx={{
                            width: { xs: '100%', md: '50%' },
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                        }}
                    >
                        {[
                            {
                                question: 'How do I earn on this platform?',
                                answer: 'Complete app tasks, refer friends, and earn daily login bonuses.',
                            },
                            {
                                question: 'When can I withdraw my earnings?',
                                answer: 'You can withdraw your earnings once you meet the minimum withdrawal amount.',
                            },
                            {
                                question: 'Is it safe to upload screenshots?',
                                answer: 'Yes, screenshots are securely stored and only used for task verification.',
                            },
                            {
                                question: 'What if my task gets rejected?',
                                answer: 'You can view the reason for rejection and resubmit if applicable.',
                            },
                        ].map((item, index) => (
                            <Card
                                key={index}
                                sx={{
                                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.04), rgba(255,255,255,0.08))',
                                    borderRadius: 3,
                                    px: 2,
                                    py: 1.5,
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    boxShadow: '0 0 10px rgba(255,255,255,0.03)',
                                }}
                            >
                                <AccordionItem {...item} />
                            </Card>
                        ))}
                    </Box>
                </Box>
            </Container>
            <Box
                sx={{
                    position: 'relative',
                    backgroundColor: '#060614',
                    mt: 12,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    px: 2,
                    textAlign: 'center',
                }}
            >
                <Box
                    component="img"
                    src={leftCircle}
                    alt="Left Circle"
                    sx={{
                        position: 'absolute',
                        left: '0px',
                        bottom: '10',
                        width: '500px',
                        zIndex: 1,
                    }}
                />
                <Box
                    component="img"
                    src={rightCircle}
                    alt="Right Circle"
                    sx={{
                        position: 'absolute',
                        right: '0px',
                        top: '10',
                        width: '500px',
                        zIndex: 1,
                    }}
                />

                <Container maxWidth="sm" sx={{ zIndex: 2 }}>
                    {/* Top Tag */}
                    <Button
                        sx={{
                            color: 'white',
                            textTransform: 'none',
                            fontSize: '1rem',
                            padding: '10px 32px',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                            borderRadius: '30px',
                            background: `linear-gradient(180deg, rgba(255,255,255,0.04), rgba(153,153,153,0.04))`,
                            boxShadow: `inset 0 2.91px 8px #FFFFFF14, inset 0 -2.91px 8px #FFFFFF14`,
                            '&:hover': { backgroundColor: 'rgba(255,255,255,0.08)' },

                        }}>
                        <Box
                            component="img"
                            src={logo}
                            alt="logo"
                            mr={1.5}
                            sx={{ width: 20, height: 20 }}
                        />
                        EanX best for Easy Real Cash
                    </Button>

                    {/* Main Text */}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Wrapper Box with relative positioning */}
                        <Box
                            sx={{
                                position: 'relative',
                                width: '100%',
                                textAlign: 'center',
                                py: 8,
                                overflow: 'hidden',
                            }}
                        >
                            {/* Background Image */}
                            <Box
                                component="img"
                                src={bgimg}
                                alt="Background"
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

                            {/* Content over background */}
                            <Box sx={{ position: 'relative', zIndex: 1 }}>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontWeight: 'bold',
                                        fontSize: { xs: '2rem', sm: '2.8rem' },
                                        color: '#fff',
                                    }}
                                >
                                    Start your free
                                </Typography>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontWeight: 'bold',
                                        fontSize: { xs: '2rem', sm: '2.8rem' },
                                        color: '#B3B3C7',
                                        mb: 2,
                                    }}
                                >
                                    earning today
                                </Typography>
                                <Typography
                                    sx={{
                                        color: '#AAA',
                                        fontSize: '1rem',
                                        mb: 4,
                                    }}
                                >
                                    Complete easy tasks, get paid in real INR. No skills <br></br>required, start earning today!
                                </Typography>

                                {/* CTA Button */}
                                <Button
                                    variant="contained"
                                    sx={{
                                        background: 'linear-gradient(90deg, #7C39F6, #A855F7)',
                                        color: '#fff',
                                        borderRadius: '999px',
                                        px: 4,
                                        py: 1.5,
                                        fontWeight: 600,
                                        boxShadow: '0 4px 20px rgba(124, 57, 246, 0.5)',
                                        '&:hover': {
                                            background: 'linear-gradient(90deg, #8C31F1, #B266FF)',
                                        },
                                    }}
                                >
                                    Claim Your ₹10 Bonus
                                </Button>
                            </Box>
                        </Box>
                    </motion.div>


                </Container>
            </Box>
        </Box>
    );
};

export default Questions;

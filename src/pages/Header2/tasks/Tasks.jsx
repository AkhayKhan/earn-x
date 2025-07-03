import React, { useRef, useEffect, useState } from 'react';
import {
    Box,
    Typography,
    Button,
    Container,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Dialog,
    DialogContent,
    IconButton,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import { Icon } from '@iconify/react';

// Note: You'll need to import your actual images
import xbet from '../../../assets/Taskimg/1xbet.png';
import binance from '../../../assets/Taskimg/binance.png';
import dream11 from '../../../assets/Taskimg/dream11.png';
import my11circle from '../../../assets/Taskimg/my11circle.png';
import winzo from '../../../assets/Taskimg/winzo.png';
import zupee from '../../../assets/Taskimg/zupee.png';
import icon from '../../../assets/icon/SVG (1).png';
import icon2 from '../../../assets/icon/SVG (2).png';

const tasks = [
    { img: binance, title: 'Binance', desc: 'Install & Register App and get a EarnX reward!', amount: '₹100' },
    { img: dream11, title: 'Dream11', desc: 'Register + Add ₹50', amount: '₹75' },
    { img: zupee, title: 'Zupee', desc: 'Register + Add ₹10', amount: '₹100' },
    { img: xbet, title: '1xBet', desc: 'Register + Add ₹100', amount: '₹40' },
    { img: winzo, title: 'WinZO Games', desc: 'Register + Add ₹20', amount: '₹75' },
    { img: my11circle, title: 'My11Circle', desc: 'Install & Register App and get a EarnX reward!', amount: '₹120' },
];

const Tasks = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const scrollRef = useRef(null);
    const dragRef = useRef(null);
    const [constraints, setConstraints] = useState({ left: 0, right: 0 });
    const [openAllModal, setOpenAllModal] = useState(false);

    useEffect(() => {
        const updateConstraints = () => {
            if (scrollRef.current && dragRef.current) {
                const containerWidth = scrollRef.current.offsetWidth;
                const contentWidth = dragRef.current.scrollWidth;
                const maxDrag = containerWidth - contentWidth;
                setConstraints({ left: maxDrag < 0 ? maxDrag : 0, right: 0 });
            }
        };
        updateConstraints();
        window.addEventListener('resize', updateConstraints);
        return () => window.removeEventListener('resize', updateConstraints);
    }, []);

    const TaskCard = ({ task, index }) => (
        <motion.div key={index} whileHover={{ scale: isMobile ? 1 : 1.03 }} whileTap={{ scale: isMobile ? 1 : 0.97 }}>
            <Card
                sx={{
                    width: isMobile ? 200 : 270,
                    height: isMobile ? 280 : 300,
                    background: '#0D0C1E',
                    borderRadius: '20px',
                    boxShadow: '0 0 0 1px #1C1B27',
                    flexShrink: 0,
                    overflow: 'hidden',
                    color: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    p: isMobile ? 1.5 : 2,
                }}
            >
                <CardMedia
                    component="img"
                    image={task.img}
                    alt={task.title}
                    sx={{
                        height: isMobile ? 100 : 140,
                        width: '100%',
                        borderRadius: '16px',
                        objectFit: 'cover',
                        mb: isMobile ? 1 : 2,
                    }}
                />
                <Typography variant={isMobile ? "subtitle1" : "h6"} fontWeight={600} sx={{ mb: 0.5 }}>
                    {task.title}
                </Typography>
                <Typography variant="body2" sx={{ 
                    color: '#B0B0C3', 
                    mb: isMobile ? 1 : 2,
                    fontSize: isMobile ? '0.75rem' : '0.875rem'
                }}>
                    {task.desc}
                </Typography>
                <Box
                    sx={{
                        background: '#1A192C',
                        border: '1px solid #2C2B3A',
                        borderRadius: '999px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        px: isMobile ? 1 : 2,
                        py: isMobile ? 0.6 : 0.8,
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#B98EFF' }}>
                        <Icon icon="mdi:plus" width={isMobile ? 16 : 18} />
                        <Typography fontSize={isMobile ? "12px" : "14px"}>{task.amount}</Typography>
                    </Box>
                    <Button
                        sx={{
                            background: 'linear-gradient(to right, #A66CFF, #7C39F6)',
                            color: '#fff',
                            borderRadius: '999px',
                            fontSize: isMobile ? '10px' : '12px',
                            textTransform: 'none',
                            px: isMobile ? 1 : 2,
                            py: isMobile ? 0.3 : 0.5,
                            minWidth: 'unset',
                            '&:hover': {
                                background: 'linear-gradient(to right, #B88FFF, #8C31F1)',
                            },
                        }}
                    >
                        Get now
                    </Button>
                </Box>
            </Card>
        </motion.div>
    );

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                overflow: 'hidden',
                background: '#060614',
                pb: isMobile ? 6 : 12,
                mt: isMobile ? 6 : 12
            }}
        >
            <Container sx={{ 
                position: 'relative', 
                zIndex: 2, 
                textAlign: 'center', 
                color: 'white', 
                pt: isMobile ? 4 : 8,
                px: isMobile ? 2 : 4
            }}>

                {/* Featured Card */}
                <Box
                    sx={{
                        margin: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mb: isMobile ? 3 : 5,
                        flexDirection: { xs: 'column', sm: 'row' },
                        color: 'white',
                        textTransform: 'none',
                        padding: isMobile ? '12px 16px' : '10px 32px',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '12px',
                        background: `linear-gradient(180deg, rgba(255,255,255,0.04), rgba(153,153,153,0.04))`,
                        boxShadow: `inset 0 2.91px 8px #FFFFFF14, inset 0 -2.91px 8px #FFFFFF14`,
                    }}
                >
                    {/* Left Side Image */}
                    <Box
                        component="img"
                        src={xbet}
                        alt="1xBet"
                        sx={{
                            width: isMobile ? '100%' : 300,
                            height: 'auto',
                            borderRadius: '12px',
                            objectFit: 'cover',
                        }}
                    />

                    {/* Right Content */}
                    <Box
                        sx={{
                            ml: { sm: 4 },
                            mt: { xs: 2, sm: 0 },
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: { xs: 'center', sm: 'flex-start' },
                            justifyContent: 'center',
                            flex: 1,
                        }}
                    >
                        <Typography variant={isMobile ? "subtitle1" : "h6"} fontWeight="bold" textAlign={{ xs: 'center', sm: 'left' }}>
                            1xBet
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ 
                                opacity: 0.7, 
                                mt: 0.5, 
                                mb: isMobile ? 1 : 2,
                                fontSize: isMobile ? '0.75rem' : '0.875rem'
                            }}
                            textAlign={{ xs: 'center', sm: 'left' }}
                        >
                            Register + Add ₹100
                        </Typography>

                        <Box sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: isMobile ? 1 : 2,
                            flexDirection: isMobile ? 'column' : 'row',
                            width: isMobile ? '100%' : 'auto'
                        }}>
                            {/* ₹40 Badge */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 0.5,
                                    px: isMobile ? 1 : 1.5,
                                    py: isMobile ? 0.3 : 0.5,
                                    fontSize: isMobile ? '12px' : '14px',
                                    borderRadius: '20px',
                                    background: `#1D1A2E`,
                                    border: '1px solid rgba(255,255,255,0.12)',
                                    color: 'white',
                                    width: isMobile ? '100%' : 'auto',
                                    justifyContent: 'center'
                                }}
                            >
                                <Icon icon="mdi:plus" width={isMobile ? 14 : 16} />
                                ₹40
                            </Box>

                            {/* Get Rewards Button */}
                            <Button
                                variant="contained"
                                sx={{
                                    background: 'linear-gradient(90deg, #A66CFF, #7C39F6)',
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    fontSize: isMobile ? '12px' : '14px',
                                    borderRadius: '30px',
                                    px: isMobile ? 2 : 3,
                                    py: isMobile ? 0.8 : 1.1,
                                    '&:hover': {
                                        background: 'linear-gradient(90deg, #B88FFF, #8C31F1)',
                                    },
                                    width: isMobile ? '100%' : 'auto'
                                }}
                            >
                                Get Your Rewards
                            </Button>
                        </Box>
                    </Box>
                </Box>

                {/* Premium Upgrade Card */}
                <Box
                    sx={{
                        margin: 'auto',
                        mt: isMobile ? 2 : 4,
                        px: isMobile ? 2 : { xs: 2, sm: 4 },
                        py: isMobile ? 2 : { xs: 3, sm: 4 },
                        borderRadius: '20px',
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(153, 153, 153, 0.02) 100%),
                     linear-gradient(360deg, rgba(255, 183, 77, 0.2) 0%, rgba(255, 183, 77, 0) 100%)`,
                        border: '1px solid #FFB74D4D',
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: isMobile ? 1 : 3,
                        color: 'white',
                    }}
                >
                    {/* Left Side Text */}
                    <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                        <Button
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 1,
                                px: isMobile ? 1 : 1.5,
                                py: isMobile ? 0.3 : 0.5,
                                color: '#FFB74D',
                                border: '1px solid #FFB74D',
                                borderRadius: '999px',
                                fontSize: isMobile ? '11px' : '13px',
                                mb: 1,
                                textTransform: 'none',
                            }}
                        >
                            <img width={isMobile ? 14 : 16} src={icon} alt="Most Popular" />
                            Most Popular
                        </Button>

                        <Typography variant={isMobile ? "subtitle1" : "h6"} fontWeight={700}>
                            Unlock Premium Earnings
                        </Typography>

                        <Typography variant="body2" sx={{ 
                            opacity: 0.7, 
                            mt: 0.5,
                            fontSize: isMobile ? '0.75rem' : '0.875rem'
                        }}>
                            Get unlimited tasks, extra bonuses, and ₹100 minimum withdrawal.
                        </Typography>
                    </Box>


                    {/* Right Side Button */}
                    <Button
                        variant="contained"
                        sx={{
                            background: 'linear-gradient(to right, #FFC657, #FB8C00)',
                            color: '#000',
                            fontWeight: 600,
                            borderRadius: '999px',
                            px: isMobile ? 2 : 4,
                            py: isMobile ? 1 : 1.5,
                            fontSize: isMobile ? '12px' : '14px',
                            whiteSpace: 'nowrap',
                            textTransform: 'none',
                            '&:hover': {
                                background: 'linear-gradient(to right, #FFD580, #FB9C20)',
                            },
                            mt: isMobile ? 1 : 0
                        }}
                    >
                        Upgrade for ₹149/month
                    </Button>
                </Box>


                {/* Cards Grid with drag-scroll */}
                <Box sx={{ width: '100%', overflow: 'hidden', background: '#060614', mt: isMobile ? 3 : 4 }}>

                    {/* See All Button Top-Right */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            mb: isMobile ? 1 : 2,
                        }}
                    >
                        {/* Left: Today's Task */}
                        <Typography
                            variant={isMobile ? "subtitle1" : "h6"}
                            fontWeight="bold"
                            textAlign={{ xs: 'left' }}
                        >
                            Today's Task
                        </Typography>

                        {/* Right: See All */}
                        <Button
                            onClick={() => setOpenAllModal(true)}
                            sx={{
                                color: '#B0B0C3',
                                textTransform: 'none',
                                fontSize: isMobile ? '12px' : '14px',
                                '&:hover': { textDecoration: 'underline' },
                                minWidth: 'unset'
                            }}
                        >
                            See All
                        </Button>
                    </Box>


                    {/* Horizontal Scroll Cards */}
                    <Box ref={scrollRef} sx={{ overflow: 'hidden', mt: 1 }}>
                        <motion.div
                            ref={dragRef}
                            drag="x"
                            dragConstraints={constraints}
                            whileTap={{ cursor: 'grabbing' }}
                            style={{
                                display: 'flex',
                                gap: isMobile ? 15 : 25,
                                cursor: 'grab',
                                paddingBottom: 10,
                                width: 'max-content',
                            }}
                        >
                            {tasks.map((task, index) => (
                                <TaskCard key={index} task={task} index={index} />
                            ))}
                        </motion.div>
                    </Box>

                    {/* All Tasks Modal */}
                    <Dialog
                        open={openAllModal}
                        onClose={() => setOpenAllModal(false)}
                        maxWidth="md"
                        fullWidth
                        PaperProps={{
                            sx: { 
                                backgroundColor: '#0D0C1E', 
                                color: 'white', 
                                borderRadius: 4, 
                                p: isMobile ? 1 : 2,
                                mx: isMobile ? 1 : 0
                            },
                        }}
                    >
                        <Box sx={{ 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: 'center', 
                            mb: isMobile ? 1 : 2,
                            px: isMobile ? 1 : 2,
                            pt: isMobile ? 1 : 0
                        }}>
                            <Typography variant={isMobile ? "subtitle1" : "h6"}>All Tasks</Typography>
                            <IconButton 
                                onClick={() => setOpenAllModal(false)} 
                                sx={{ color: 'white', p: isMobile ? 0.5 : 1 }}
                            >
                                <CloseIcon fontSize={isMobile ? "small" : "medium"} />
                            </IconButton>
                        </Box>
                        <DialogContent sx={{ px: isMobile ? 1 : 2 }}>
                            <Grid container spacing={isMobile ? 1 : 2}>
                                {tasks.map((task, index) => (
                                    <Grid item xs={6} sm={6} md={4} key={index}>
                                        <Card
                                            sx={{
                                                background: '#100c25',
                                                borderRadius: isMobile ? 2 : 3,
                                                color: '#fff',
                                                p: isMobile ? 1 : 2,
                                                height: '100%',
                                            }}
                                        >
                                            <CardMedia
                                                component="img"
                                                image={task.img}
                                                alt={task.title}
                                                sx={{ 
                                                    height: isMobile ? 90 : 140, 
                                                    borderRadius: isMobile ? 1 : 2, 
                                                    mb: isMobile ? 0.5 : 1 
                                                }}
                                            />
                                            <Typography variant={isMobile ? "body2" : "h6"}>{task.title}</Typography>
                                            <Typography variant="body2" sx={{ 
                                                opacity: 0.7, 
                                                mb: isMobile ? 0.5 : 1,
                                                fontSize: isMobile ? '0.7rem' : '0.875rem'
                                            }}>
                                                {task.desc}
                                            </Typography>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    background: '#1A192C',
                                                    borderRadius: '999px',
                                                    border: '1px solid rgba(255,255,255,0.1)',
                                                    px: isMobile ? 1 : 2,
                                                    py: isMobile ? 0.5 : 0.7,
                                                }}
                                            >
                                                <Box sx={{ 
                                                    display: 'flex', 
                                                    alignItems: 'center', 
                                                    gap: 1, 
                                                    color: '#B98EFF',
                                                    fontSize: isMobile ? '0.7rem' : '0.875rem'
                                                }}>
                                                    <Icon icon="mdi:plus" width={isMobile ? 14 : 18} />
                                                    {task.amount}
                                                </Box>
                                                <Button
                                                    sx={{
                                                        background: 'linear-gradient(to right, #A66CFF, #7C39F6)',
                                                        color: '#fff',
                                                        borderRadius: '999px',
                                                        fontSize: isMobile ? '10px' : '12px',
                                                        textTransform: 'none',
                                                        px: isMobile ? 1 : 2,
                                                        py: isMobile ? 0.3 : 0.5,
                                                        minWidth: 'unset'
                                                    }}
                                                >
                                                    Get now
                                                </Button>
                                            </Box>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </DialogContent>
                    </Dialog>
                </Box>


                {/* Premium tasks section */}
                <Box sx={{ width: '100%', overflow: 'hidden', background: '#060614', mt: isMobile ? 3 : 4 }}>

                    {/* See All Button Top-Right */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            mb: isMobile ? 1 : 2,
                        }}
                    >
                        {/* Left: Premium tasks */}
                        <Typography
                            variant={isMobile ? "subtitle1" : "h6"}
                            fontWeight="bold"
                            textAlign={{ xs: 'left' }}
                        >
                            Premium tasks
                        </Typography>

                        {/* Right: See All */}
                        <Button
                            onClick={() => setOpenAllModal(true)}
                            sx={{
                                color: '#B0B0C3',
                                textTransform: 'none',
                                fontSize: isMobile ? '12px' : '14px',
                                '&:hover': { textDecoration: 'underline' },
                                minWidth: 'unset'
                            }}
                        >
                            See All
                        </Button>
                    </Box>


                    {/* Horizontal Scroll Cards */}
                    <Box ref={scrollRef} sx={{ overflow: 'hidden', mt: 1 }}>
                        <motion.div
                            ref={dragRef}
                            drag="x"
                            dragConstraints={constraints}
                            whileTap={{ cursor: 'grabbing' }}
                            style={{
                                display: 'flex',
                                gap: isMobile ? 15 : 25,
                                cursor: 'grab',
                                paddingBottom: 10,
                                width: 'max-content',
                            }}
                        >
                            {tasks.map((task, index) => (
                                <TaskCard key={index} task={task} index={index} />
                            ))}
                        </motion.div>
                    </Box>
                </Box>


                {/* Referral Card */}
                <Box
                    sx={{
                        margin: 'auto',
                        mt: isMobile ? 3 : 4,
                        px: isMobile ? 2 : { xs: 2, sm: 4 },
                        py: isMobile ? 2 : { xs: 3, sm: 4 },
                        borderRadius: '20px',
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(153, 153, 153, 0.02) 100%),
                 linear-gradient(360deg, rgba(0, 226, 124, 0.2) 0%, rgba(0, 226, 124, 0) 100%)`,
                        border: '1px solid #00E27C4D',
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: isMobile ? 1 : 3,
                        color: 'white',
                    }}
                >
                    {/* Left Side Text */}
                    <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                        <Button
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 1,
                                px: isMobile ? 1 : 1.5,
                                py: isMobile ? 0.3 : 0.5,
                                color: '#00E27C',
                                border: '1px solid #00E27C',
                                borderRadius: '999px',
                                fontSize: isMobile ? '11px' : '13px',
                                mb: 1,
                                textTransform: 'none',
                            }}
                        >
                            <img width={isMobile ? 14 : 16} src={icon2} alt="Easy Money" />
                            Easy Money
                        </Button>

                        <Typography variant={isMobile ? "subtitle1" : "h6"} fontWeight={700}>
                            Refer & Earn Together
                        </Typography>

                        <Typography variant="body2" sx={{ 
                            opacity: 0.7, 
                            mt: 0.5,
                            fontSize: isMobile ? '0.75rem' : '0.875rem'
                        }}>
                            Invite friends & earn ₹10 on every signup. │ No limit on referrals!
                        </Typography>
                    </Box>

                    {/* Right Side Button */}
                    <Button
                        variant="contained"
                        sx={{
                            background: 'linear-gradient(90deg, #00E27C 2.5%, #007C44 98.72%)',
                            border: '1.5px solid #00E27C',
                            color: '#000',
                            fontWeight: 600,
                            borderRadius: '999px',
                            px: isMobile ? 2 : 4,
                            py: isMobile ? 1 : 1.5,
                            fontSize: isMobile ? '12px' : '14px',
                            whiteSpace: 'nowrap',
                            textTransform: 'none',
                            '&:hover': {
                                background: 'linear-gradient(90deg, #00E27C 10%, #009655 100%)',
                                borderColor: '#00E27C',
                            },
                            mt: isMobile ? 1 : 0
                        }}
                    >
                        Get Referral Link
                    </Button>
                </Box>


                {/* My started tasks section */}
                <Box sx={{ width: '100%', overflow: 'hidden', background: '#060614', mt: isMobile ? 3 : 4 }}>

                    {/* See All Button Top-Right */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            mb: isMobile ? 1 : 2,
                        }}
                    >
                        {/* Left: My started tasks */}
                        <Typography
                            variant={isMobile ? "subtitle1" : "h6"}
                            fontWeight="bold"
                            textAlign={{ xs: 'left' }}
                        >
                            My started tasks
                        </Typography>

                        {/* Right: See All */}
                        <Button
                            onClick={() => setOpenAllModal(true)}
                            sx={{
                                color: '#B0B0C3',
                                textTransform: 'none',
                                fontSize: isMobile ? '12px' : '14px',
                                '&:hover': { textDecoration: 'underline' },
                                minWidth: 'unset'
                            }}
                        >
                            See All
                        </Button>
                    </Box>


                    {/* Horizontal Scroll Cards */}
                    <Box ref={scrollRef} sx={{ overflow: 'hidden', mt: 1 }}>
                        <motion.div
                            ref={dragRef}
                            drag="x"
                            dragConstraints={constraints}
                            whileTap={{ cursor: 'grabbing' }}
                            style={{
                                display: 'flex',
                                gap: isMobile ? 15 : 25,
                                cursor: 'grab',
                                paddingBottom: 10,
                                width: 'max-content',
                            }}
                        >
                            {tasks.map((task, index) => (
                                <TaskCard key={index} task={task} index={index} />
                            ))}
                        </motion.div>
                    </Box>
                </Box>

            </Container>
        </Box>
    );
};

export default Tasks;
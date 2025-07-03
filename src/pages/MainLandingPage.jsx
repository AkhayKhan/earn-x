import { useEffect } from 'react';
import { Box } from '@mui/material';
import EarningsCard from './Header1/Dashboard/EarningsCard';
import Benefits from './Header1/Benefits/Benefits';
import Questions from './Header1/FAQ/Questions';
import UpgradePremium from './Header1/ReferEarn/UpgradePremium';
import Task from './Header1/Tasks/Task';
import Testimonials from './Header1/Testimonials/Testimonials';
import Footer from '../components/Layout/Footer';
import { useAuth } from '../pages/context/AuthContext';
import { useNavigate } from 'react-router-dom';

const MainLandingPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();


  useEffect(() => {
    if (user) {
      navigate('/tasks', { replace: true });
    }
  }, [user, navigate]);

  if (user) {
    return null; 
  }
  return (
    <>
      <Box id="home">
        <EarningsCard />
      </Box>
      <Box id="tasks">
        <Task />
      </Box>
      <Box id="benefits">
        <Benefits />
      </Box>
      <Box id="refer-earn">
        <UpgradePremium />
      </Box>
      <Box id="testimonials">
        <Testimonials />
      </Box>
      <Box id="faq">
        <Questions />
      </Box>
      <Footer/>
    </>
  );
};

export default MainLandingPage;
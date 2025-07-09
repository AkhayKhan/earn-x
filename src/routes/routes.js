import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import EarningsCard from '../pages/Header1/Dashboard/EarningsCard';
import ProfileView from '../pages/Header2/Profile/ProfileView';
import ReferralDashboard from '../pages/Header2/ReferEarn/ReferralDashboard';
import Leaderboard from '../pages/Header2/Leaderboard/Leaderboard';
import Tasks from '../pages/Header2/tasks/Tasks';
import ContactUs from '../pages/Header2/Contact/ContactUs';
import PrivacyPolicy from '../pages/Header2/PrivacyPolicy/PrivacyPolicy';
import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';
import { useAuth } from '../pages/context/AuthContext';
import MainLandingPage from '../pages/MainLandingPage';
// import EarningsCard from '../pages/Header1/Dashboard/EarningsCard';
import Benefits from '../pages/Header1/Benefits/Benefits';
import Questions from '../pages/Header1/FAQ/Questions';
import UpgradePremium from '../pages/Header1/ReferEarn/UpgradePremium';
import Task from '../pages//Header1/Tasks/Task';
import Testimonials from '../pages/Header1/Testimonials/Testimonials';

export const useAppRoutes = () => {
  const { user } = useAuth();
  const location = useLocation();


  return [
    { path: '/', element: <MainLandingPage /> },
    { path: '/login', element: <Login/>},
    { path: '/signup', element: <Signup/>},
    // { path: '/user-profile', element: protectedRoute(ProfileView) },
    // { path: '/user-refer-earn', element: protectedRoute(ReferralDashboard) },
    // { path: '/user-tasks', element: protectedRoute(Tasks) },
    // { path: '/user-leaderboard', element: protectedRoute(Leaderboard) },
    { path: '/ContactUs', element: <ContactUs /> },
    { path: '/privacy-policy', element: <PrivacyPolicy /> },
  ];
};

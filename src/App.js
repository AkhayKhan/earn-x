import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import MainLandingPage from './pages/MainLandingPage';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import { AuthProvider, useAuth } from './pages/context/AuthContext';
import ProfileView from './pages/Header2/Profile/ProfileView';
import ReferralDashboard from './pages/Header2/ReferEarn/ReferralDashboard';
import Leaderboard from './pages/Header2/Leaderboard/Leaderboard';
import Tasks from './pages/Header2/tasks/Tasks';
import ContactUs from './pages/Header2/Contact/ContactUs';
import PrivacyPolicy from './pages/Header2/PrivacyPolicy/PrivacyPolicy';
import Footer from './components/Layout/Footer';
import Footer2 from './components/Layout/Footer2';

function AppContent() {
  const { user } = useAuth();
  const location = useLocation();
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainLandingPage />} />
        <Route path="/login" element={user ? <Navigate to="/tasks" replace /> : <Login />} />
        <Route path="/signup" element={user ? <Navigate to="/tasks" replace /> : <Signup />} />
        <Route path="/profile" element={user ? <ProfileView /> : <Navigate to="/login" state={{ from: location }} replace />} />
        <Route path="/refer-earn" element={user ? <ReferralDashboard /> : <Navigate to="/login" state={{ from: location }} replace />} />
        <Route path="/tasks" element={user ? <Tasks /> : <Navigate to="/login" state={{ from: location }} replace />} />
        <Route path="/leaderboard" element={user ? <Leaderboard /> : <Navigate to="/login" state={{ from: location }} replace />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      {user ? <Footer2 /> : <Footer />}
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainLandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<ProfileView />} />
        <Route path="/refer-earn" element={<ReferralDashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
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
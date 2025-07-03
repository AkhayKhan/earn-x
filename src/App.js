import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import MainLandingPage from './pages/MainLandingPage';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import { AuthProvider } from './pages/context/AuthContext';
// import AppRoutes from './routes';
import ProfileView from './pages/Header2/Profile/ProfileView';
import ReferralDashboard from './pages/Header2/ReferEarn/ReferralDashboard';
import Leaderboard from './pages/Header2/Leaderboard/Leaderboard';
import Tasks from './pages/Header2/tasks/Tasks';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainLandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<ProfileView />} />
          <Route path="/refer-earn" element={<ReferralDashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/leaderboard" element={<Leaderboard />} />

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
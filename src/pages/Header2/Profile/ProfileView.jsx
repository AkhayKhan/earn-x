import React, { useState } from 'react';
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MyProfile from './MyProfile/MyProfile';
import MyEarnings from './MyEarnings/MyEarnings';
import MyTaskHistory from './MyTaskHistory/MyTaskHistory';
import WithdrawRequest from './WithdrawRequest/WithdrawRequest';
import Settings from './Settings/Settings';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const sidebarItems = [
  'My Profile',
  'My Earnings',
  'My Task History',
  'Withdraw Request',
  'Settings',
];

const ProfileView = () => {
  const [selectedTab, setSelectedTab] = useState('My Profile');
  const [openLogoutModal, setOpenLogoutModal] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleLogoutClick = () => {
    setOpenLogoutModal(true);
  };

  const handleCloseLogoutModal = () => {
    setOpenLogoutModal(false);
  };

  const handleConfirmLogout = () => {
    logout();
    navigate('/login');
    setOpenLogoutModal(false);
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'My Profile':
        return <MyProfile />;
      case 'My Earnings':
        return <MyEarnings />;
      case 'My Task History':
        return <MyTaskHistory />;
      case 'Withdraw Request':
        return <WithdrawRequest />;
      case 'Settings':
        return <Settings />;
      default:
        return <MyProfile />;
    }
  };

  return (
    <Box
      sx={{
        background: '#060614',
        // minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        pt: { xs: '70px', md: '80px' },
        pb: 4,
        mt: 10,
      }}
    >
      <Box
        sx={{
          width: '95%',
          maxWidth: 1300,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          // minHeight: 'calc(100vh - 120px)',
          overflow: 'hidden',
          color: 'white',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '30px',
          background: `linear-gradient(180deg, rgba(255,255,255,0.04), rgba(153,153,153,0.04))`,
        }}
      >
        {/* Sidebar */}
        <Box
          sx={{
            width: { xs: '100%', md: '250px' },
            display: 'flex',
            p:2,
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRight: { md: '1px solid #FFFFFF1A' },
            borderBottom: { xs: '1px solid #FFFFFF1A', md: 'none' },
          }}
        >
          <List sx={{ flexGrow: 1, }}>
            {sidebarItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton
                  onClick={() => setSelectedTab(item)}
                  sx={{
                    backgroundColor: selectedTab === item ? '#7C39F633' : 'transparent',
                    color: selectedTab === item ? '#7C39F6' : '#fff',
                    textTransform: 'none',
                    fontSize: '0.9rem',
                    padding: '10px 16px',
                    borderRadius: '30px',
                    mb: 1,
                    '&:hover': {
                      backgroundColor: '#7C39F633',
                    },
                  }}
                >
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Button
            variant="contained"
            sx={{
              backgroundColor: '#E7001F',
              color: 'white',
              textTransform: 'none',
              fontSize: '0.9rem',
              padding: '10px 16px',
              borderRadius: '30px',
              mt: isMobile ? 2 : 0,
              '&:hover': {
                backgroundColor: '#FF0000',
              },
            }}
            fullWidth
            onClick={handleLogoutClick}
          >
            Logout
          </Button>
        </Box>

        {/* Main Content */}
        <Box
          sx={{
            flex: 1,
            overflowY: 'auto',
            p: { xs: 1, md: 3 },
            maxHeight: 'calc(100vh - 160px)',
          }}
        >
          {renderTabContent()}
        </Box>
      </Box>

      {/* Logout Confirmation Modal */}
      <Dialog
        open={openLogoutModal}
        onClose={handleCloseLogoutModal}
        PaperProps={{
          sx: {
            backgroundColor: '#161827',
            color: '#fff',
            borderRadius: '12px',
            p: 2,
          },
        }}
      >
        <DialogTitle sx={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 600 }}>
          Log Out
        </DialogTitle>
        <DialogContent sx={{ textAlign: 'center', py: 2 }}>
          Are you sure you want to Log Out?
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', gap: 2, px: 3, pb: 3 }}>
          <Button
            onClick={handleCloseLogoutModal}
            variant="outlined"
            sx={{
              color: 'white',
              textTransform: 'none',
              borderColor: 'rgba(255, 255, 255, 0.3)',
              borderRadius: '30px',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.08)',
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleConfirmLogout}
            variant="contained"
            sx={{
              backgroundColor: '#E7001F',
              color: 'white',
              textTransform: 'none',
              borderRadius: '30px',
              '&:hover': {
                backgroundColor: '#FF0000',
              },
            }}
          >
            Yes, Logout
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProfileView;

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

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const renderContent = () => {
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
        backgroundColor: '#060614',
        pt: { xs: '70px', md: '80px' },
        pb: 4,
        mt: 5,
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100vh',
        overflow: 'hidden', 
      }}
    >
      <Box
        sx={{
          width: '95%',
          maxWidth: 1300,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          borderRadius: '30px',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.3)',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(153,153,153,0.04))',
          color: 'white',
        }}
      >
        {/* Sidebar */}
        <Box
          sx={{
            width: { xs: '90%', md: '250px' },
            borderRight: { md: '1px solid #FFFFFF1A' },
            borderBottom: { xs: '1px solid #FFFFFF1A', md: 'none' },
            p: 2,
          }}
        >
          <List>
            {sidebarItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton
                  onClick={() => setSelectedTab(item)}
                  sx={{
                    backgroundColor: selectedTab === item ? '#7C39F633' : 'transparent',
                    color: selectedTab === item ? '#7C39F6' : '#fff',
                    borderRadius: '30px',
                    mb: 1,
                    px: 2,
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
            fullWidth
            onClick={() => setOpenLogoutModal(true)}
            sx={{
              mt: 2,
              backgroundColor: '#E7001F',
              borderRadius: '30px',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#FF0000',
              },
            }}
          >
            Logout
          </Button>
        </Box>

        {/* Main Content */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 2, md: 3 },
            overflow: 'hidden',
          }}
        >
          {renderContent()}
        </Box>
      </Box>

      {/* Logout Confirmation Modal */}
      <Dialog
        open={openLogoutModal}
        onClose={() => setOpenLogoutModal(false)}
        PaperProps={{
          sx: {
            backgroundColor: '#161827',
            color: '#fff',
            borderRadius: '12px',
            p: 2,
          },
        }}
      >
        <DialogTitle sx={{ textAlign: 'center', fontWeight: 600 }}>
          Log Out
        </DialogTitle>
        <DialogContent sx={{ textAlign: 'center' }}>
          Are you sure you want to Log Out?
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', gap: 2, pb: 2 }}>
          <Button
            onClick={() => setOpenLogoutModal(false)}
            variant="outlined"
            sx={{
              borderColor: 'rgba(255,255,255,0.3)',
              color: '#fff',
              borderRadius: '30px',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleLogout}
            variant="contained"
            sx={{
              backgroundColor: '#E7001F',
              borderRadius: '30px',
              textTransform: 'none',
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

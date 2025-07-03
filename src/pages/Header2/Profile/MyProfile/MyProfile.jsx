import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Button,
  IconButton,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import crown from '../../../../assets/icon/crown.png'

const MyProfile = () => {
  const currentUser = {
    name: 'Shivani Guha',
    phone: '9876543210',
    accountId: 'e1ebcbc6-6656-46e1-b067',
    membership: 'Free',
    joined: 'May 15, 2025',
    referralCode: 'SHIVANI10',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" sx={{ color: '#fff', mb: 4 }}>
        My Profile
      </Typography>

      <Box sx={{ display: 'flex', gap: 5, alignItems: 'flex-start', flexWrap: 'wrap' }}>
        {/* Left: Profile Image */}
        <Avatar src={currentUser.image} sx={{ width: 100, height: 100 }} />

        {/* Right: User Info */}
        <Box sx={{ flex: 1, minWidth: 250 }}>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
            gap: 4,
            mb: 4 
          }}>
            {/* Left Column */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {/* User Name */}
              <Box>
                <Typography sx={{ color: '#aaa' }}>User Name</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography sx={{ color: '#fff', fontWeight: 600 }}>{currentUser.name}</Typography>
                  <Button
                    size="small"
                    sx={{
                      color: 'white',
                      fontSize: '0.75rem',
                      px: 0.5,
                      py: 0.1,
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '30px',
                      background: `linear-gradient(180deg, rgba(255,255,255,0.04), rgba(153,153,153,0.04))`,
                      boxShadow: `inset 0 2.91px 8px #FFFFFF14, inset 0 -2.91px 8px #FFFFFF14`,
                      '&:hover': { backgroundColor: 'rgba(255,255,255,0.08)' },
                    }}>
                    Edit
                  </Button>
                </Box>
              </Box>

              {/* Mobile Number */}
              <Box>
                <Typography sx={{ color: '#aaa' }}>Mobile Number</Typography>
                <Typography sx={{ color: '#fff', fontWeight: 600 }}>{currentUser.phone}</Typography>
              </Box>

              {/* Referral Code */}
              <Box>
                <Typography sx={{ color: '#aaa' }}>Referral Code</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography>{currentUser.referralCode}</Typography>
                  <ContentCopyIcon sx={{ fontSize: 16, color: '#A288F4' }} />
                </Box>
              </Box>
            </Box>

            {/* Right Column */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {/* Account ID */}
              <Box>
                <Typography sx={{ color: '#aaa' }}>Account ID</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography>{currentUser.accountId}</Typography>
                  <ContentCopyIcon sx={{ fontSize: 16, color: '#A288F4' }} />
                </Box>
              </Box>

              {/* Membership */}
              <Box>
                <Typography sx={{ color: '#aaa' }}>Membership</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography sx={{ color: '#fff' }}>{currentUser.membership}</Typography>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: '#FFB74D1A',
                      fontSize: '0.75rem',
                      color: '#FFB74D',
                      px: 2,
                      py: 0,
                      border: '1px solid #FFB74D',
                      borderRadius: '12px',
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: '#FFB74D33',
                      },
                    }}
                  >
                    <img src={crown} style={{ width: '12px', height: 'auto',marginRight:'2px' }} />
                    Upgrade
                  </Button>
                </Box>
              </Box>

              {/* Joined On */}
              <Box>
                <Typography sx={{ color: '#aaa' }}>Joined On</Typography>
                <Typography sx={{ color: '#fff' }}>{currentUser.joined}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MyProfile;
import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Referrals from './Referrals';
import BonusCodes from './BonusCodes';

const ReferralDashboard = () => {
  const [activeTab, setActiveTab] = useState('referrals');

  // Common styles for both buttons
  const tabButtonStyles = (isActive) => ({
    textTransform: 'none',
    fontSize: '1rem',
    padding: '10px 32px',
    borderRadius: '30px',
    color: '#fff',
    backgroundColor: isActive ? '#7C39F6' : 'transparent',
    border: !isActive ? '1px solid rgba(255, 255, 255, 0.3)' : 'none',
    background: !isActive
      ? 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(153,153,153,0.04))'
      : '#7C39F6',
    boxShadow: isActive
      ? 'inset 0 2.91px 6px #FFFFFF61, inset 0 -2.91px 6px #FFFFFF61'
      : 'inset 0 2.91px 8px #FFFFFF14, inset 0 -2.91px 8px #FFFFFF14',
    '&:hover': {
      backgroundColor: isActive ? '#8C31F1' : 'rgba(255,255,255,0.08)',
    },
    display: 'flex',
    alignItems: 'center',
    gap: 1,
  });

  return (
    <Box
      sx={{
        backgroundColor: '#060614',
        color: '#fff',
        p: 4,
        borderRadius: '16px',
        maxWidth: 1000,
        mx: 'auto',
        mt: 12,
      }}
    >
      {/* Button Group */}
      <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
        <Button
          onClick={() => setActiveTab('referrals')}
          sx={tabButtonStyles(activeTab === 'referrals')}
        >
          <GroupsIcon fontSize="small" />
          Referrals
        </Button>

        <Button
          onClick={() => setActiveTab('bonus')}
          sx={tabButtonStyles(activeTab === 'bonus')}
        >
          <LocalOfferIcon fontSize="small" />
          Bonus Codes
        </Button>
      </Box>
      <Box
        sx={{
          color: 'white',
          textTransform: 'none',
          fontSize: '1rem',
          padding: '45px',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '20px',
          background: `linear-gradient(180deg, rgba(255,255,255,0.04), rgba(153,153,153,0.04))`,
          boxShadow: 'inset 0px 3px 6px #FFFFFF14, inset 0px -3px 6px #FFFFFF14'

        }}
      >
        {/* Tab Content */}
        {activeTab === 'referrals' && <Referrals />}
        {activeTab === 'bonus' && <BonusCodes />}
      </Box>
    </Box>
  );
};

export default ReferralDashboard;

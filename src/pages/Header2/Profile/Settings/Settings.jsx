import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  Switch,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';
import DeleteAccountModal from './DeleteAccountModal';


const Settings = () => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const [passwords, setPasswords] = useState({ current: '', new: '', confirm: '' });
  const [preferences, setPreferences] = useState({
    taskUpdates: true,
    withdrawalStatus: true,
    weeklySummary: false,
    referralActivity: true,
  });

  const handleChangePassword = (e) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });
  };

  const togglePreference = (key) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', p: 4, color: '#fff' }}>
      <Typography variant="h5" mb={3}>Settings</Typography>

      <Typography variant="subtitle1" mb={1}>Change Password</Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          type="password"
          name="current"
          placeholder="Current Password"
          value={passwords.current}
          onChange={handleChangePassword}
          InputProps={{ sx: { borderRadius: 13, background: '#1C1C2B', color: '#fff' } }}
        />
        <TextField
          type="password"
          name="new"
          placeholder="New Password"
          value={passwords.new}
          onChange={handleChangePassword}
          InputProps={{ sx: { borderRadius: 13, background: '#1C1C2B', color: '#fff' } }}
        />
        <TextField
          type="password"
          name="confirm"
          placeholder="Confirm New Password"
          value={passwords.confirm}
          onChange={handleChangePassword}
          InputProps={{ sx: { borderRadius: 13, background: '#1C1C2B', color: '#fff' } }}
        />
        <Button sx={{
          backgroundColor: '#7C39F6',
          color: 'white',
          textTransform: 'none',
          fontSize: '1rem',
          padding: '10px 32px',
          borderRadius: '30px',
          boxShadow: `inset 0 2.91px 6px #FFFFFF61, inset 0 -2.91px 6px #FFFFFF61`,
        }}>
          Update Password
        </Button>
      </Box>

      <Divider sx={{ my: 4, borderColor: '#333' }} />

      <Typography variant="subtitle1" mb={2}>Notification Preferences</Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        {[
          { label: 'Task Updates', key: 'taskUpdates', desc: 'Get notified when new tasks are available.' },
          { label: 'Withdrawal Status', key: 'withdrawalStatus', desc: 'Updates when your withdrawal is confirmed or denied.' },
          { label: 'Weekly Earnings Summary', key: 'weeklySummary', desc: '' },
          { label: 'Referral Activity', key: 'referralActivity', desc: '' },
        ].map((item) => (
          <Box key={item.key} display="flex" justifyContent="space-between" alignItems="center">
            <Box>
              <Typography>{item.label}</Typography>
              {item.desc && <Typography variant="caption" color="#888">{item.desc}</Typography>}
            </Box>
            <Switch
              checked={preferences[item.key]}
              onChange={() => togglePreference(item.key)}
              sx={{
                '& .MuiSwitch-switchBase.Mui-checked': {
                  color: '#7C39F6',
                },
                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                  backgroundColor: '#7C39F6',
                },
              }}
            />

          </Box>
        ))}
      </Box>

      <Divider sx={{ my: 4, borderColor: '#333' }} />

      <Typography variant="subtitle1" mb={2}>Legal & About</Typography>
      <List>
        {['Terms & Conditions', 'Privacy Policy', 'About EarnX'].map((text) => (
          <ListItem button key={text} sx={{ borderBottom: '1px solid #333' }}>
            <ListItemText primary={<Typography color="#fff">{text}</Typography>} />
            <ListItemIcon>
              <ArrowForwardIos sx={{ fontSize: 16, color: '#888' }} />
            </ListItemIcon>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 4, borderColor: '#333' }} />
      <Button
        fullWidth
        onClick={() => setOpenDeleteModal(true)}
        sx={{
          backgroundColor: '#E7001F',
          color: 'white',
          textTransform: 'none',
          fontSize: '0.9rem',
          padding: '10px 16px',
          borderRadius: '30px',
          '&:hover': {
            backgroundColor: '#FF0000',
          },
        }}
      >
        Delete My Account
      </Button>
      <DeleteAccountModal
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        onConfirm={() => {
          setOpenDeleteModal(false);
        }}
      />
    </Box>
  );
};


export default Settings;
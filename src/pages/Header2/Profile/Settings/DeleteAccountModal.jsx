import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
} from '@mui/material';

const DeleteAccountModal = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          backgroundColor: '#161827',
          color: '#fff',
          borderRadius: '12px',
          p: 2,
          width: '420px',
          maxWidth: 'none',
        },
      }}
    >
      <Box display="flex" flexDirection="column" justifyContent="space-between" height="100%">
        <DialogTitle sx={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 600 }}>
          Delete My Account
        </DialogTitle>
        <DialogContent sx={{ textAlign: 'center', py: 2 }}>
          Are you sure you want to permanently delete your account?
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', gap: 2, px: 3, pb: 3 }}>
          <Button
            onClick={onClose}
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
            onClick={onConfirm}
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
            Yes, Delete
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default DeleteAccountModal;

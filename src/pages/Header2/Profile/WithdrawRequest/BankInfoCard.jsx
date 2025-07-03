// components/BankInfoCard.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Edit } from '@mui/icons-material';

const BankInfoCard = ({ data, onEdit }) => {
  return (
    <Box sx={{
      p: 3,
      bgcolor: '#1C1C2B',
      borderRadius: 3,
      color: '#fff',
      maxWidth: 500
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Box>
          <Typography variant="h6">Your Bank Details</Typography>
          <Typography variant="body2" color="#aaa">
            Used only for secure withdrawals to your verified account.
          </Typography>
        </Box>
        <Button onClick={onEdit} variant="outlined" sx={{ color: '#aaa', borderColor: '#444', borderRadius: 2 }} startIcon={<Edit />}>
          Edit
        </Button>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
        <Box>
          <Typography variant="caption" color="#B0B0C3">Account Holder</Typography>
          <Typography variant="body2">{data.holder}</Typography>
        </Box>
        <Box>
          <Typography variant="caption" color="#B0B0C3">Account Number</Typography>
          <Typography variant="body2">{data.account}</Typography>
        </Box>
        <Box>
          <Typography variant="caption" color="#B0B0C3">IFSC Code</Typography>
          <Typography variant="body2">{data.ifsc}</Typography>
        </Box>
        <Box>
          <Typography variant="caption" color="#B0B0C3">Bank Name</Typography>
          <Typography variant="body2">{data.bank}</Typography>
        </Box>
      </Box>

      <Box sx={{
        mt: 3,
        py: 1,
        px: 2,
        backgroundColor: '#1E9C6D33',
        color: '#1E9C6D',
        borderRadius: 2,
        fontSize: '0.875rem',
        display: 'inline-block',
      }}>
        ✅ Bank account verified
      </Box>
    </Box>
  );
};

export default BankInfoCard;

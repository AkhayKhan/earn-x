import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Card,
  TextField,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Select,
  MenuItem,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Boxicon from '../../../../assets/icon/SVG.png';
import AddBankAccountModal from './AddBankAccountModal'


const transactions = new Array(10).fill(null).map((_, i) => ({
  id: `TXN${i + 1}ABC${Math.floor(Math.random() * 1000)}`,
  amount: '₹300',
  status: i % 3 === 1 ? 'Denied' : 'Confirmed',
  date: 'June 10, 2025 4:32 PM',
}));

const getStatusColor = (status) => {
  switch (status) {
    case 'Confirmed':
      return '#00BB0B';
    case 'Denied':
      return '#E7001F';
    default:
      return '#aaa';
  }
};

const WithdrawRequest = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [amount, setAmount] = useState('');
const [openModal, setOpenModal] = useState(false);

  const handleChangePage = (_, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ display: 'flex', gap: 4, p: 3, color: '#fff', flexWrap: 'wrap' }}>
      {/* Left Panel (unchanged) */}
      <Box sx={{ width: 300 }}>
        <Card
          sx={{
            p: 3,
            borderRadius: '32px',
            border: '1px solid #DBFF7333',
            background:
              'radial-gradient(85% 107.37% at 100% 100%, rgba(219, 255, 115, 0.1) 0%, rgba(219, 255, 115, 0) 100%)',
          }}

        >
          <Box
            component="img"
            src={Boxicon}
            alt="icon"
            sx={{
              width: 48,
              height: 48,
              p: '10px',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '32px',
              background: `linear-gradient(180deg, rgba(255,255,255,0.04), rgba(153,153,153,0.04))`,
              boxShadow: `inset 0 2.91px 8px #FFFFFF14, inset 0 -2.91px 8px #FFFFFF14`,
              mb: 2,

            }}
          />
          <Typography variant="body2" sx={{ color: '#B0B0C3', mb: 1 }}>
            Available Balance
          </Typography>
          <Typography variant="h4" sx={{ color: '#DBFF73', mb: 2 }}>
            ₹785.00
          </Typography>
        </Card>

        <Button
          fullWidth
          onClick={() => setOpenModal(true)}
          sx={{
            my: 2,
            backgroundColor: '#DBFF731A',
            color: '#DBFF73',
            borderRadius: '32px',
            border: '1px solid #DBFF7333',
            padding: '16px 18px',
            fontWeight: 500,
          }}
        >
          + Add Bank Account
        </Button>

        <TextField
          fullWidth
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          InputProps={{
            sx: {
              px: 2,
              borderRadius: '30px',
              color: '#fff',
              fontSize: '1rem',
              background: `linear-gradient(180deg, rgba(255,255,255,0.04), rgba(153,153,153,0.04))`,
              boxShadow: `inset 0 2.91px 8px #FFFFFF14, inset 0 -2.91px 8px #FFFFFF14`,
              border: '1px solid rgba(255, 255, 255, 0.3)',
              '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
            },
          }}
          sx={{ mb: 2 }}
        />

        <Button
          fullWidth
          sx={{
            backgroundColor: '#7C39F6',
            color: 'white',
            textTransform: 'none',
            fontSize: '1rem',
            padding: '12px 32px',
            borderRadius: '30px',
            boxShadow: `inset 0 2.91px 6px #FFFFFF61, inset 0 -2.91px 6px #FFFFFF61`,
            '&:hover': { backgroundColor: '#8C31F1' },
          }}
        >
          Withdraw Now
        </Button>

        <Box sx={{ mt: 3 }}>
          <Typography variant="body2" color="#B0B0C3" sx={{ mb: 1 }}>
            Withdrawal Conditions
          </Typography>
          <Typography variant="body2" sx={{ color: '#FFFFFF', mb: 0.5 }}>
            ❌ Bank account is verified
          </Typography>
          <Typography variant="body2" sx={{ color: '#FFFFFF', mb: 0.5 }}>
            ✅ You haven't referred any user yet
          </Typography>
          <Typography variant="body2" sx={{ color: '#FFFFFF' }}>
            ✅ Deposit-based task completed
          </Typography>
        </Box>
      </Box>

      {/* Right Panel - Updated Table Design */}
      <Box sx={{ flex: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, flexWrap: 'wrap' }}>
          <Typography variant="h6">All Withdraw</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="This Month"
              slotProps={{
                textField: {
                  size: 'small',
                  sx: {
                    border: '1px solid #aaa',
                    borderRadius: 2,
                    input: { color: '#fff' },
                    label: { color: '#B0B0C3' },
                  },
                },
              }}
            />
          </LocalizationProvider>
          <Select
            value="All"
            size="small"
            sx={{
              color: '#fff',
              border: '1px solid #aaa',
              borderRadius: 2,
              '& .MuiSelect-select': {
                py: 0.8,
              }
            }}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Confirmed">Confirmed</MenuItem>
            <MenuItem value="Denied">Denied</MenuItem>
          </Select>
        </Box>

        <Box sx={{ border: '2px solid #FFFFFF14', borderRadius: '14px', overflow: 'hidden' }}>
          <Table sx={{ minWidth: '100%', tableLayout: 'fixed' }}>
            <TableHead>
              <TableRow>
                {['Transaction ID', 'Amount', 'Status', 'Requested Date'].map((head) => (
                  <TableCell
                    key={head}
                    sx={{
                      color: '#aaa',
                      borderBottom: '2px solid #FFFFFF14',
                      fontWeight: 500,
                      fontSize: '0.875rem'
                    }}
                  >
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((txn, idx) => (
                  <TableRow key={idx} sx={{ '&:hover': { backgroundColor: '#1C1C2B' } }}>
                    <TableCell sx={{ color: '#fff', border: 'none', fontSize: '0.875rem' }}>{txn.id}</TableCell>
                    <TableCell sx={{ color: '#fff', border: 'none', fontSize: '0.875rem' }}>{txn.amount}</TableCell>
                    <TableCell sx={{ border: 'none' }}>
                      <Box
                        sx={{
                          backgroundColor: getStatusColor(txn.status) + '33',
                          color: getStatusColor(txn.status),
                          px: 2,
                          py: 0.5,
                          borderRadius: 3,
                          display: 'inline-block',
                          fontSize: '0.75rem',
                          fontWeight: 500,
                        }}
                      >
                        {txn.status}
                      </Box>
                    </TableCell>
                    <TableCell sx={{ color: '#fff', border: 'none', fontSize: '0.875rem' }}>{txn.date}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>

          <TablePagination
            component="div"
            count={transactions.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[10, 25, 50]}
            sx={{
              color: '#aaa',
              borderTop: '2px solid #FFFFFF14',
              '& .MuiTablePagination-selectLabel, .MuiTablePagination-displayedRows': {
                color: '#aaa',
                fontSize: '0.875rem'
              },
              '& .MuiInputBase-root': {
                color: '#aaa',
                fontSize: '0.875rem'
              },
              '& svg': {
                fill: '#aaa'
              },
            }}
          />
        </Box>
      </Box>
      <AddBankAccountModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSubmit={(data) => {
          console.log('Bank Form Submitted:', data);
        }}
      />
    </Box>
  );
};

export default WithdrawRequest;
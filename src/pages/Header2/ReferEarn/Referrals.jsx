import {useState} from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  FormControl,
  Select,
  MenuItem,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

// Dummy data
const referralData = [
  { name: 'Rohit Sharma', status: 'Completed', reward: '₹10', date: 'Jun 21, 2025 – 3:12 PM' },
  { name: 'Anjali Mehta', status: 'Signed Up Only', reward: '₹0', date: 'Jun 21, 2025 – 3:12 PM' },
  { name: 'Manish Singh', status: 'Completed', reward: '₹10', date: 'Jun 21, 2025 – 3:12 PM' },
];

// Reusable card style
const cardStyle = {
  p: 2,
  background: `radial-gradient(85% 107.37% at 100% 100%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)`,
  border: '1px solid #FFFFFF33',
  borderRadius: '12px',
  backdropFilter: 'blur(2px)',
};

const Referrals = () => {
  const [dateRange, setDateRange] = useState({ startDate: null, endDate: null });



  const handleDateChange = (date, type) => {
    setDateRange((prev) => ({ ...prev, [type]: date }));
  };
  const referralCode = 'SHIVANI123';

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
  };

  return (
    <>
      <Typography variant="h5" fontWeight="bold" mb={1}>
        Earn ₹10 for every referral
      </Typography>

      <Typography color="#aaa" mb={3}>
        Your friend also gets ₹10 as a welcome bonus when they sign up with your code.
        <br />
        You’ll get your reward once they complete their first task.
      </Typography>

      <Grid container spacing={1} mb={4}>
        {/* Referral Code */}
        <Grid item xs={12} sm={4}>
          <Paper sx={{ ...cardStyle, display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '250px' }}>
            <Box>
              <Typography color="#aaa" variant="body2" mb={0.5}>
                Your Referral code
              </Typography>
              <Typography color="#C3FF63" fontWeight="bold" fontSize="18px">
                {referralCode}
              </Typography>
            </Box>
            <Button
              variant="contained"
              size="small"
              onClick={handleCopy}
              sx={{
                background: `radial-gradient(85% 107.37% at 100% 100%, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)`,
                color: '#C3FF63',
                border: '1px solid #FFFFFF33',
                borderRadius: '20px',
                px: 3,
                textTransform: 'none',
                fontWeight: 500,
                boxShadow: 'none',
                '&:hover': {
                  background: 'rgba(255,255,255,0.05)',
                  boxShadow: 'none',
                },
              }}
            >
              Copy
            </Button>
          </Paper>
        </Grid>

        {/* Total Referrals */}
        <Grid item xs={6} sm={4} sx={{ width: '220px' }}>
          <Paper sx={cardStyle}>
            <Typography color="#aaa" variant="body2" mb={0.5}>
              Total Referrals
            </Typography>
            <Typography color="#C3FF63" fontWeight="bold" fontSize="18px">
              ₹80
            </Typography>
          </Paper>
        </Grid>

        {/* Total Earnings */}
        <Grid item xs={6} sm={4} sx={{ width: '220px' }}>
          <Paper sx={cardStyle}>
            <Typography color="#aaa" variant="body2" mb={0.5}>
              Total Earnings
            </Typography>
            <Typography color="#C3FF63" fontWeight="bold" fontSize="18px">
              8
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Filters */}
      {/* Filters */}
      <Box display="flex" justifyContent="space-between" mb={3} flexWrap="wrap" gap={2}>
        <Typography variant="subtitle1" sx={{ color: '#fff' }}>All Withdraw</Typography>

        <Box display="flex" gap={2} flexWrap="wrap">


          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="This Month"
              value={dateRange.startDate}
              onChange={(date) => handleDateChange(date, 'startDate')}
              slotProps={{
                textField: {
                  size: 'small',
                  sx: {
                    border: '1px solid #aaa',
                    borderRadius: 2,
                    background: '#1F1F2B',
                    input: { color: '#fff' },
                    label: { color: '#B0B0C3' },
                  },
                },
              }}
            />
        
          </LocalizationProvider>

          <FormControl sx={{ minWidth: 120 }} size="small">
            <Select
              defaultValue="All"
              sx={{
                background: '#1F1F2B',
                color: '#fff',
                borderRadius: '10px',
                border: '1px solid #aaa',
              }}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
              <MenuItem value="SignedUp">Signed Up Only</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {/* Table */}
    <Box
  sx={{
    border: '2px solid #FFFFFF14',
    borderRadius: '14px',
    overflowX: 'auto',
  }}
>
  <Table sx={{ minWidth: 600, tableLayout: 'fixed' }}>
    <TableHead>
      <TableRow>
        <TableCell sx={{ color: '#888', borderBottom: '2px solid #FFFFFF14' }}>Friend Name</TableCell>
        <TableCell sx={{ color: '#888', borderBottom: '2px solid #FFFFFF14' }}>Status</TableCell>
        <TableCell sx={{ color: '#888', borderBottom: '2px solid #FFFFFF14' }}>Your Reward</TableCell>
        <TableCell sx={{ color: '#888', borderBottom: '2px solid #FFFFFF14' }}>Date</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {referralData.map((item, index) => {
        const getStatusColor = (status) => {
          if (status === 'Completed') return '#1E9C6D';
          if (status === 'Signed Up Only') return '#F29D38';
          return '#aaa';
        };

        return (
          <TableRow key={index}>
            <TableCell sx={{ color: '#fff', border: 'none' }}>{item.name}</TableCell>
            <TableCell sx={{ color: '#fff', border: 'none' }}>
              <Box
                sx={{
                  backgroundColor: getStatusColor(item.status) + '33',
                  color: getStatusColor(item.status),
                  px: 2,
                  py: 0.5,
                  borderRadius: 3,
                  display: 'inline-block',
                  fontSize: '0.75rem',
                }}
              >
                {item.status}
              </Box>
            </TableCell>
            <TableCell sx={{ color: '#fff', border: 'none' }}>{item.reward}</TableCell>
            <TableCell sx={{ color: '#aaa', border: 'none' }}>{item.date}</TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  </Table>
</Box>


    </>
  );
};

export default Referrals;

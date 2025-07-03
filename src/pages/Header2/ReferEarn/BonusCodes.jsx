import { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  Select,
  MenuItem,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const referralData = [
  { name: 'Ramesh', status: 'Task Completed', reward: '₹10', date: 'Jun 21, 2025 – 3:12 PM' },
  { name: 'Sita', status: 'Signed Up Only', reward: '₹10', date: 'Jun 22, 2025 – 1:45 PM' },
  { name: 'Rahul', status: 'Signed Up Only', reward: '₹10', date: 'Jun 23, 2025 – 10:30 AM' },
  { name: 'Anita', status: 'Task Completed', reward: '₹10', date: 'Jun 24, 2025 – 5:00 PM' },
  { name: 'Vikram', status: 'Task Completed', reward: '₹10', date: 'Jun 25, 2025 – 2:15 PM' },
  { name: 'Priya', status: 'Task Completed', reward: '₹10', date: 'Jun 26, 2025 – 12:00 PM' },
  { name: 'Rajesh', status: 'Signed Up Only', reward: '₹10', date: 'Jun 27, 2025 – 4:45 PM' },
  { name: 'Neha', status: 'Task Completed', reward: '₹10', date: 'Jun 28, 2025 – 11:00 AM' },
  { name: 'Karan', status: 'Task Completed', reward: '₹10', date: 'Jun 29, 2025 – 9:30 AM' },
  { name: 'Sonali', status: 'Task Completed', reward: '₹10', date: 'Jun 30, 2025 – 3:00 PM' },
];

const BonusCodes = () => {
  const [date, setDate] = useState(dayjs());
  const [status, setStatus] = useState('All');

  return (
    <Box sx={{ borderRadius: '20px', color: '#fff' }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Got a Bonus Code?
      </Typography>
      <Typography variant="body2" sx={{ color: '#aaa', mb: 3 }}>
        Apply your bonus code to earn extra rewards.
      </Typography>

      {/* Input & Button */}
      <Box display="flex" gap={2} alignItems="center" mb={4} flexWrap="wrap">
        <TextField
          placeholder="Enter user id here..."
          variant="outlined"
          fullWidth
          sx={{
            maxWidth: '400px',
            input: { color: '#fff' },
            '& .MuiOutlinedInput-root': {
              borderRadius: '30px',
              '& fieldset': {
                borderColor: '#2F2F3A',
              },
            },
          }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#7C39F6',
            color: 'white',
            textTransform: 'none',
            fontSize: '1rem',
            padding: '10px 32px',
            borderRadius: '30px',
            boxShadow: `inset 0 2.91px 6px #FFFFFF61, inset 0 -2.91px 6px #FFFFFF61`,
            '&:hover': { backgroundColor: '#8C31F1' },
          }}
        >
          Apply Code
        </Button>
      </Box>

      {/* Filters */}
      <Typography variant="subtitle1" mb={2}>
        All Withdraw
      </Typography>

      <Box display="flex" justifyContent="flex-end" gap={2} mb={2} flexWrap="wrap">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="This Month"
            value={date}
            onChange={(newDate) => setDate(newDate)}
            slots={{
              openPickerIcon: CalendarMonthIcon,
            }}
            slotProps={{
              textField: {
                size: 'small',
                sx: {
                  width: 150,
                  input: { color: '#fff' },
                  backgroundColor: '#1C1C24',
                  borderRadius: '10px',
                  '& fieldset': {
                    borderColor: '#2F2F3A',
                  },
                  label: { color: '#aaa' },
                },
              },
            }}
          />
        </LocalizationProvider>

        <FormControl size="small">
          <Select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            sx={{
              backgroundColor: '#1C1C24',
              borderRadius: '10px',
              width: 100,
              color: '#fff',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#2F2F3A',
              },
            }}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Task Completed">Task Completed</MenuItem>
            <MenuItem value="Signed Up Only">Signed Up Only</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Table */}
      <Box
        component={Paper}
        sx={{
          backgroundColor: '#1A1A1F',
          borderRadius: '12px',
          border: '1px solid #2A2A36',
          overflow: 'hidden',
        }}
      >
        <Table sx={{ minWidth: '100%', tableLayout: 'fixed' }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: '#888', borderBottom: '1px solid #2A2A36' }}>Friend Name</TableCell>
              <TableCell sx={{ color: '#888', borderBottom: '1px solid #2A2A36' }}>Status</TableCell>
              <TableCell sx={{ color: '#888', borderBottom: '1px solid #2A2A36' }}>Your Reward</TableCell>
              <TableCell sx={{ color: '#888', borderBottom: '1px solid #2A2A36' }}>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {referralData.map((item, index) => (
              <TableRow key={index}>
                <TableCell sx={{ color: '#fff', borderBottom: 'none' }}>{item.name}</TableCell>
                <TableCell sx={{ color: '#fff', borderBottom: 'none' }}>{item.status}</TableCell>
                <TableCell sx={{ color: '#fff', borderBottom: 'none' }}>{item.reward}</TableCell>
                <TableCell sx={{ color: '#aaa', borderBottom: 'none' }}>{item.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};

export default BonusCodes;

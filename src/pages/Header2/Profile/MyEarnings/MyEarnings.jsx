import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  Grid,
  TextField,
  MenuItem,
  Select,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Boxicon from '../../../../assets/icon/Group.png';

const earningsSummary = [
  { label: 'Total Earnings', value: '₹1,250' },
  { label: 'Tasks Completed', value: '38' },
  { label: 'Bonus Earned', value: '₹200' },
  { label: 'Withdrawn Amount', value: '₹950' },
  { label: 'Pending Earnings', value: '₹100' },
];

const earningsTable = [
  { task: 'Flipkart App Install', amount: '₹25', source: 'Task', status: 'Approved', date: 'Jun 10, 2025' },
  { task: 'Referral – Ramesh', amount: '₹10', source: 'Referral', status: 'Pending', date: 'Jun 10, 2025' },
  { task: 'Flipkart App Install', amount: '₹25', source: 'Task', status: 'Rejected', date: 'Jun 10, 2025' },
  // Add more if needed
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Approved':
      return '#1E9C6D';
    case 'Pending':
      return '#F29D38';
    case 'Rejected':
      return '#F32D2D';
    default:
      return '#aaa';
  }
};

const MyEarnings = () => {
  const [dateRange, setDateRange] = useState({ startDate: null, endDate: null });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleDateChange = (date, type) => {
    setDateRange((prev) => ({
      ...prev,
      [type]: date,
    }));
  };

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ color: '#fff', mb: 4 }}>
        My Earnings
      </Typography>

      {/* Summary Cards */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {earningsSummary.map((item, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={idx}>
            <Card
              sx={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(153, 153, 153, 0.02) 100%)',
                boxShadow: '0px -3px 6px 0px #FFFFFF14 inset, 0px 3px 6px 0px #FFFFFF14 inset',
                borderRadius: '20px',
                px: 3,
                py: 2.5,
                // minHeight: 120,
                width: '248px',
              }}
            >
              <Box sx={{ mb: 1 }}>
                <Box
                  component="img"
                  src={Boxicon}
                  alt="icon"
                  sx={{
                    width: 30,
                    height: 30,
                    padding: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '30px',
                    background: `linear-gradient(180deg, rgba(255,255,255,0.04), rgba(153,153,153,0.04))`,
                    boxShadow: `inset 0 2.91px 8px #FFFFFF14, inset 0 -2.91px 8px #FFFFFF14`,
                  }}
                />
              </Box>
              <Typography sx={{ color: '#aaa', fontSize: 14 }}>{item.label}</Typography>
              <Typography sx={{ color: '#fff', fontSize: 24, fontWeight: 600 }}>{item.value}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Filter Controls */}
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 3, flexWrap: 'wrap' }}>
        <Typography variant="h6" sx={{ color: '#fff' }}>Recent Earnings</Typography>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Start Date"
            value={dateRange.startDate}
            onChange={(date) => handleDateChange(date, 'startDate')}
            slotProps={{
              textField: {
                size: 'small',
                InputProps: {
                  sx: {
                    color: '#fff',
                    '& .MuiSvgIcon-root': {
                      color: '#B0B0C3',
                    },
                  },
                },
                InputLabelProps: {
                  sx: {
                    color: '#B0B0C3',
                  },
                },
                sx: {
                  border: '1px solid #aaa',
                  borderRadius: 2,
                },
              },
            }}
          />


          <DatePicker
            label="End Date"
            value={dateRange.endDate}
            onChange={(date) => handleDateChange(date, 'endDate')}
            minDate={dateRange.startDate}
            slotProps={{
              textField: {
                size: 'small',
                InputProps: {
                  sx: {
                    color: '#fff',
                    '& .MuiSvgIcon-root': {
                      color: '#B0B0C3',
                    },
                  },
                },
                InputLabelProps: {
                  sx: {
                    color: '#aaa',
                  },
                },
                sx: {
                  border: '1px solid #aaa',
                  borderRadius: 2,
                },
              },
            }}
          />

        </LocalizationProvider>

        <Select defaultValue="All" size="small" sx={{
          minWidth: 100, color: '#B0B0C3', borderRadius: 3, border: '1px solid #aaa',
        }}>
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Task">Task</MenuItem>
          <MenuItem value="Referral">Referral</MenuItem>
        </Select>

        <Select defaultValue="All" size="small" sx={{ minWidth: 100, color: '#B0B0C3', borderRadius: 3, border: '1px solid #aaa' }}>
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Approved">Approved</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Rejected">Rejected</MenuItem>
        </Select>
      </Box>

      {/* Table with Pagination */}
      <Box
        sx={{
          overflow: 'auto',
          border: '2px solid #FFFFFF14',
          borderRadius: '14px',
        }}
      >
        <Table sx={{ minWidth: 600 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: '#aaa', borderBottom: '2px solid #FFFFFF14' }}>Task Name</TableCell>
              <TableCell sx={{ color: '#aaa', borderBottom: '2px solid #FFFFFF14' }}>Amount</TableCell>
              <TableCell sx={{ color: '#aaa', borderBottom: '2px solid #FFFFFF14' }}>Source</TableCell>
              <TableCell sx={{ color: '#aaa', borderBottom: '2px solid #FFFFFF14' }}>Status</TableCell>
              <TableCell sx={{ color: '#aaa', borderBottom: '2px solid #FFFFFF14' }}>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {earningsTable
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, i) => (
                <TableRow key={i} sx={{ borderBottom: 'none' }}>
                  <TableCell sx={{ color: '#fff', borderBottom: 'none' }}>{row.task}</TableCell>
                  <TableCell sx={{ color: '#fff', borderBottom: 'none' }}>{row.amount}</TableCell>
                  <TableCell sx={{ color: '#fff', borderBottom: 'none' }}>{row.source}</TableCell>
                  <TableCell sx={{ borderBottom: 'none' }}>
                    <Box
                      sx={{
                        backgroundColor: getStatusColor(row.status) + '33',
                        color: getStatusColor(row.status),
                        px: 2,
                        py: 0.5,
                        borderRadius: 3,
                        display: 'inline-block',
                        fontSize: '0.75rem',
                      }}
                    >
                      {row.status}
                    </Box>
                  </TableCell>
                  <TableCell sx={{ color: '#fff', borderBottom: 'none' }}>{row.date}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>

        <TablePagination
          component="div"
          count={earningsTable.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
          sx={{
            color: '#aaa',
            '& .MuiTablePagination-selectLabel, .MuiTablePagination-displayedRows': {
              color: '#aaa',
            },
            '& .MuiInputBase-root': {
              color: '#aaa',
            },
            '& svg': { fill: '#aaa' },
          }}
        />
      </Box>

    </Box>
  );
};

export default MyEarnings;

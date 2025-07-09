import React, { useRef, useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Card,
  Button,
  Select,
  MenuItem,
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
import { motion } from 'framer-motion';

import binance from '../../../../assets/Taskimg/binance.png';
import dream11 from '../../../../assets/Taskimg/dream11.png';
import my11circle from '../../../../assets/Taskimg/my11circle.png';
import winzo from '../../../../assets/Taskimg/winzo.png';
import zupee from '../../../../assets/Taskimg/zupee.png';

const taskCards = [
  { id: 1, logo: binance, title: 'Binance', date: 'Jun 10, 2025', time: '4:32 PM', description: 'Install & Register App and get a EarnX reward!', status: 'Pending', reward: '₹75' },
  { id: 2, logo: dream11, title: 'Dream11', date: 'Jun 10, 2025', time: '4:32 PM', description: 'Install & Register App and get a EarnX reward!', status: 'Pending', reward: '₹75' },
  { id: 3, logo: my11circle, title: 'My11Circle', date: 'Jun 10, 2025', time: '4:32 PM', description: 'Install & Register App and get a EarnX reward!', status: 'Denied', reward: '₹75' },
  { id: 4, logo: winzo, title: 'Winzo', date: 'Jun 10, 2025', time: '4:32 PM', description: 'Install & Register App and get a EarnX reward!', status: 'Denied', reward: '₹75' },
  { id: 5, logo: zupee, title: 'Zupee', date: 'Jun 10, 2025', time: '4:32 PM', description: 'Install & Register App and get a EarnX reward!', status: 'Denied', reward: '₹75' },
];

const taskHistory = [
  { id: 101, name: 'Binance Registration', type: 'Install & Register', amount: '₹25', status: 'Confirmed', date: 'June 10, 2025 4:32 PM' },
  { id: 102, name: 'Dream11 Signup', type: 'Register + Add ₹50', amount: '₹10', status: 'Pending', date: 'June 10, 2025 4:32 PM' },
  { id: 103, name: 'Zupee Register', type: 'Register + Add ₹25', amount: '₹40', status: 'Denied', date: 'June 10, 2025 4:32 PM' },
];

const getStatusColor = (status) => {
  if (status === 'Confirmed') return '#1E9C6D';
  if (status === 'Pending') return '#F29D38';
  if (status === 'Denied') return '#F32D2D';
  return '#aaa';
};

export default function TodaysTask() {
  const [dateRange, setDateRange] = useState({ startDate: null, endDate: null });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const scrollRef = useRef(null);
  const dragRef = useRef(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const updateConstraints = () => {
      if (scrollRef.current && dragRef.current) {
        const containerWidth = scrollRef.current.offsetWidth;
        const contentWidth = dragRef.current.scrollWidth;
        const maxDrag = containerWidth - contentWidth;
        setConstraints({ left: maxDrag < 0 ? maxDrag : 0, right: 0 });
      }
    };
    updateConstraints();
    window.addEventListener('resize', updateConstraints);
    return () => window.removeEventListener('resize', updateConstraints);
  }, []);

  const handleDateChange = (date, type) => {
    setDateRange((prev) => ({ ...prev, [type]: date }));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ p: { xs: 1, sm: 4 } }}>
      <Typography variant="h5" sx={{ color: '#fff', mb: 4 }}>
        Today's Task
      </Typography>

      {/* Scrollable Task Cards */}
      <Box sx={{ overflow: 'hidden', width: '100%', mb: 4, }} ref={scrollRef}>
        <motion.div
          ref={dragRef}
          drag="x"
          dragConstraints={constraints}
          whileTap={{ cursor: 'grabbing' }}
          style={{
            display: 'flex',
            gap: 16,
            cursor: 'grab',
            width: 'max-content',
            paddingBottom: 10,
          }}
        >
          {taskCards.map((task) => (
            <motion.div key={task.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Card
                sx={{
                  width: { xs: '70vw', sm: 300 },
                  flexShrink: 0,
                  p: 2.5,
                  borderRadius: '16px',
                  backgroundColor: '#0B0B15',
                  border: '1px solid #1C1C28',
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={task.logo} alt="logo" width="40" height="40" style={{ borderRadius: '50%', marginRight: 12 }} />
                    <Typography sx={{ color: '#fff', fontWeight: 600 }}>{task.title}</Typography>
                  </Box>
                  <Typography sx={{ color: '#aaa', fontSize: '13px' }}>
                    {task.date}<br />{task.time}
                  </Typography>
                </Box>
                <Typography sx={{ color: '#999', fontSize: '14px', mb: 2 }}>{task.description}</Typography>
                <Box sx={{ height: '1px', backgroundColor: '#1C1C28', mb: 2 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography sx={{ color: '#999', fontSize: '13px' }}>Status</Typography>
                    <Typography sx={{ fontSize: '14px', fontWeight: 500, color: getStatusColor(task.status) }}>
                      {task.status}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#999', fontSize: '13px' }}>Submission</Typography>
                    <Typography sx={{ fontSize: '14px', fontWeight: 500, color: '#8B5CF6', cursor: 'pointer' }}>
                      View
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#999', fontSize: '13px' }}>Reward</Typography>
                    <Typography sx={{ fontSize: '14px', fontWeight: 500, color: '#fff' }}>
                      {task.reward}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Box>

      {/* Task History Filters */}
      <Typography variant="h6" sx={{ color: '#fff', mt: 5, mb: 3 }}>
        All Task History
      </Typography>

      <Box sx={{ display: 'flex', gap: 1.5, mb: 3, flexWrap: 'wrap' }}>
        <Button variant="outlined" sx={{ color: '#B0B0C3', borderColor: '#aaa', borderRadius: '12px' }}>
          This Month
        </Button>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Start Date"
            value={dateRange.startDate}
            onChange={(date) => handleDateChange(date, 'startDate')}
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
          <DatePicker
            label="End Date"
            value={dateRange.endDate}
            onChange={(date) => handleDateChange(date, 'endDate')}
            minDate={dateRange.startDate}
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
          defaultValue="All"
          size="small"
          sx={{
            minWidth: 100,
            color: '#B0B0C3',
            borderRadius: '12px',
            border: '1px solid #aaa',
            '& .MuiSelect-select': { py: 0.8 },
          }}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Confirmed">Confirmed</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Denied">Denied</MenuItem>
        </Select>
      </Box>

      {/* Task History Table */}
      <Box sx={{ border: '2px solid #FFFFFF14', borderRadius: '14px', overflowX: 'auto' }}>
        <Table sx={{ minWidth: 700, tableLayout: 'auto' }}>
          <TableHead>
            <TableRow>
              {['Task ID', 'Task Name', 'Type', 'Amount', 'Status', 'Date'].map((head) => (
                <TableCell key={head} sx={{ color: '#aaa', borderBottom: '2px solid #FFFFFF14' }}>{head}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {taskHistory.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row.id}>
                <TableCell sx={{ color: '#fff', border: 'none' }}>{row.id}</TableCell>
                <TableCell sx={{ color: '#fff', border: 'none' }}>{row.name}</TableCell>
                <TableCell sx={{ color: '#fff', border: 'none' }}>{row.type}</TableCell>
                <TableCell sx={{ color: '#fff', border: 'none' }}>{row.amount}</TableCell>
                <TableCell sx={{ color: '#fff', border: 'none' }}>
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
                <TableCell sx={{ color: '#fff', border: 'none' }}>{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <TablePagination
          component="div"
          count={taskHistory.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
          sx={{
            color: '#aaa',
            '& .MuiTablePagination-selectLabel, .MuiTablePagination-displayedRows': { color: '#aaa' },
            '& .MuiInputBase-root': { color: '#aaa' },
            '& svg': { fill: '#aaa' },
          }}
        />
      </Box>
    </Box>
  );
}

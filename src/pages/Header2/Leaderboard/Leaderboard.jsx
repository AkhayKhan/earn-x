import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@mui/material';

// Dummy leaderboard data
const leaderboardData = [
  { name: 'Saanvi Mehta', avatar: 'https://i.pravatar.cc/150?img=1', earnings: 300 },
  { name: 'Vikram Sharma', avatar: 'https://i.pravatar.cc/150?img=2', earnings: 450 },
  { name: 'Riya Kapoor', avatar: 'https://i.pravatar.cc/150?img=3', earnings: 550 },
  { name: 'Arjun Verma', avatar: 'https://i.pravatar.cc/150?img=4', earnings: 200 },
  { name: 'Nisha Joshi', avatar: 'https://i.pravatar.cc/150?img=5', earnings: 350 },
  { name: 'Rahul Chatterjee', avatar: 'https://i.pravatar.cc/150?img=6', earnings: 400 },
  { name: 'Arjun Verma', avatar: 'https://i.pravatar.cc/150?img=7', earnings: 200 },
  { name: 'Nisha Joshi', avatar: 'https://i.pravatar.cc/150?img=8', earnings: 350 },
  { name: 'Rahul Chatterjee', avatar: 'https://i.pravatar.cc/150?img=9', earnings: 400 },
  { name: 'Arjun Verma', avatar: 'https://i.pravatar.cc/150?img=10', earnings: 200 },
];

// Background colors for top 3 users
const topThreeColors = ['#FDDE69', '#DFE3E6', '#EEC195'];

const Leaderboard = () => {
  return (
    <>
    <Paper
      sx={{
        color: '#fff',
        p: 4,
        mt: 18,
        width: '70%',
        mx: 'auto',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '20px',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(153,153,153,0.04))',
        boxShadow: 'inset 0px 3px 6px #FFFFFF14, inset 0px -3px 6px #FFFFFF14',
      }}
    >
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Box>
          <Typography variant="h6" fontWeight="bold">Leaderboard</Typography>
          <Typography variant="body2" sx={{ color: '#aaa' }}>
            This month's top 50 earners
          </Typography>
        </Box>

        {/* Your earnings badge */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #7C39F6 0%, #A262F3 100%)',
            px: 3,
            py: 1,
            borderRadius: '30px',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Avatar src="https://i.pravatar.cc/150?img=11" sx={{ width: 24, height: 24 }} />
          <Typography fontSize="0.9rem">Your Earnings: ₹100</Typography>
        </Box>
      </Box>

      {/* Leaderboard Table */}
      <Table sx={{ 
        minWidth: 400,
        '& .MuiTableBody-root .MuiTableRow-root:not(:last-child)': {
          mb: 2 // This adds vertical gap between rows
        }
      }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: '#aaa', border: 'none' }}>#</TableCell>
            <TableCell sx={{ border: 'none', color: '#aaa' }}>User</TableCell>
            <TableCell sx={{ border: 'none', color: '#aaa' }}>Earnings</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leaderboardData.map((user, index) => {
            const isTopThree = index < 3;

            return (
              <TableRow key={index} sx={{ 
                '& .MuiTableCell-root': {
                  border: 'none',
                  py: isTopThree ? 2 : 1,
                  backgroundColor: isTopThree ? topThreeColors[index] : 'transparent',
                }
              }}>
                <TableCell
                  sx={{
                    fontWeight: isTopThree ? 'bold' : 400,
                    color: isTopThree ? '#000' : '#fff',
                    borderTopLeftRadius: isTopThree ? '20px' : 0,
                    borderBottomLeftRadius: isTopThree ? '20px' : 0,
                  }}
                >
                  {index + 1}
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: isTopThree ? 'bold' : 400,
                  }}
                >
                  <Box display="flex" alignItems="center" gap={1}>
                    <Avatar src={user.avatar} sx={{ width: 32, height: 32 }} />
                    <Typography sx={{ color: isTopThree ? '#000' : '#fff' }}>
                      {user.name}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: isTopThree ? 'bold' : 400,
                    color: isTopThree ? '#000' : '#fff',
                    borderTopRightRadius: isTopThree ? '20px' : 0,
                    borderBottomRightRadius: isTopThree ? '20px' : 0,
                  }}
                >
                  ₹{user.earnings}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
</>
  );
};

export default Leaderboard;
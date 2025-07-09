import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import bgimg from '../../../assets/images/1381cdc04af51adb944a9087e3089b5231590653.png';

const Section = ({ title, items }) => (
  <Box mb={4}>
    <Typography variant="h6" fontWeight={600} mb={1.5} color="#fff">
      {title}
    </Typography>
    <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
      {items.map((item, idx) => (
        <li
          key={idx}
          style={{
            marginBottom: 8,
            lineHeight: 1.6,
            color: '#8C8C9A',
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  </Box>
);

const TermsConditions = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: '#060614',
        py: 8,
        color: '#8C8C9A',
        mt: 12,
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${bgimg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.07,
          zIndex: 0,
        }}
      />

      {/* Content */}
      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h4" fontWeight={600} mb={1} color="#fff">
          Terms & Conditions
        </Typography>

        <Typography variant="body2" mb={4} color="#8C8C9A">
          April 30, 2025
        </Typography>

        <Typography variant="body1" mb={4} color="#8C8C9A">
          By using EarnX, you agree to follow these Terms & Conditions. Please read them carefully before registering, completing tasks, or withdrawing any earnings.
        </Typography>

        <Section
          title="Information We Collect"
          items={[
            'These general terms and conditions (“Terms”) apply to all use of the EarnX platform, including any services, applications, and websites operated by PodX (“we”, “us” or “our”). By using the service, you agree to be bound by these Terms.',
          ]}
        />

        <Section
          title="Eligibility"
          items={[
            'Users must be at least 18 years old.',
            'Fake or duplicate accounts are not allowed.',
            'All submitted details must be accurate.',
          ]}
        />

        <Section
          title="Account Responsibilities"
          items={[
            'You are responsible for maintaining your login credentials.',
            'Do not share your account with others.',
            'EarnX is not responsible for any unauthorized access.',
          ]}
        />

        <Section
          title="Task Completion & Earnings"
          items={[
            'You must fully and correctly finish tasks to qualify for rewards.',
            'Rewards are only credited after admin verification.',
            'Submitting fake screenshots or incomplete tasks can lead to disqualification and account suspension.',
          ]}
        />

        <Section
          title="Referral Program"
          items={[
            'Users can refer others using their referral code.',
            'Referral rewards are credited only after the referred user completes 1 task.',
            'Both the referrer and the new user receive ₹10.',
          ]}
        />

        <Section
          title="Bonus Codes"
          items={[
            'Bonus codes may offer extra earnings for limited periods.',
            'Only 1 bonus code per user is allowed.',
            'Admin reserves the right to discontinue or modify bonus campaigns at any time.',
          ]}
        />

        <Section
          title="Withdrawals"
          items={[
            'Withdrawals are only allowed after completing at least 1 deposit task, 1 referral, and task verification.',
            'The minimum withdrawal amount is ₹5.',
            'Withdrawals are processed within 2–7 business days.',
            'Withdrawals will only be processed to verified bank accounts linked to your profile.',
          ]}
        />

        <Section
          title="Prohibited Activities"
          items={[
            'Using VPNs, emulators, or fake details to complete tasks.',
            'Creating multiple accounts from the same device.',
            'Sharing referral codes on spam platforms.',
            'Promoting fake bonus codes or misleading others for personal gain.',
            'Completing tasks through bots, automation tools, or scripts.',
            'Violating any of these may result in permanent ban and forfeiture of earnings.',
          ]}
        />

        <Section
          title="Account Suspension"
          items={[
            'Accounts may be suspended for suspicious behavior or fraud.',
            'Suspended users will not be able to withdraw earnings.',
            'Users may contact support to appeal decisions.',
          ]}
        />

        <Section
          title="Changes to Terms"
          items={[
            'These terms may be updated at any time.',
            'We will notify users through the platform or email.',
          ]}
        />

        <Section
          title="Contact Us"
          items={['Have questions? Email us at: support@earnx.com']}
        />
      </Container>
    </Box>
  );
};

export default TermsConditions;

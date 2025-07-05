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

const PrivacyPolicy = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        // minHeight: '100vh',
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
          Privacy Policy
        </Typography>

        <Typography variant="body2" mb={4} color="#8C8C9A">
          April 30, 2025
        </Typography>

        <Typography variant="body1" mb={4} color="#8C8C9A">
          By using EarnX, you agree to this Privacy Policy. This policy explains how
          we collect, use, and protect your personal information when you interact
          with our platform.
        </Typography>

        <Section
          title="Information We Collect"
          items={[
            'Personal Info: Name, email, phone number, bank account details for withdrawals.',
            'Usage Data: Task activity, referral history, bonus usage.',
            'Device Info: IP address, browser type, device model.',
          ]}
        />

        <Section
          title="How We Use Your Information"
          items={[
            'To process earnings and withdrawals.',
            'To improve user experience and platform performance.',
            'To send notifications and important updates.',
            'For fraud detection and security monitoring.',
          ]}
        />

        <Section
          title="Data Sharing & Disclosure"
          items={[
            'We do not sell your data.',
            'Data may be shared with payment processors or legal authorities, only if required.',
            'All third-party services used are compliant with relevant data protection laws.',
          ]}
        />

        <Section
          title="Data Security"
          items={[
            'All data is encrypted and stored securely.',
            'Bank account and sensitive info are protected with industry-grade security.',
          ]}
        />

        <Section
          title="User Rights"
          items={[
            'You can request to view, edit, or delete your personal data anytime.',
            'You may opt out of marketing messages from settings.',
          ]}
        />

        <Section
          title="Cookies & Tracking"
          items={[
            'We use basic cookies to keep you logged in and track task progress.',
            'No third-party ad tracking is used.',
          ]}
        />

        <Section
          title="Data Retention"
          items={[
            'We retain your information as long as your account is active or as required by law.',
          ]}
        />

        <Section
          title="Children’s Privacy"
          items={[
            'EarnX is only for users 18 years and older. We do not knowingly collect data from children.',
          ]}
        />

        <Section
          title="Changes to this Policy"
          items={[
            'We may update this policy from time to time. Users will be notified via platform or email.',
          ]}
        />

        <Section
          title="Contact Us"
          items={[
            'For any questions regarding this policy: support@earnx.com',
          ]}
        />
      </Container>

    </Box>
  );
};

export default PrivacyPolicy;

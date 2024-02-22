import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Layout from '../components/Layout';
import {
  Container,
  CssBaseline,
  Avatar,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  Link,
} from '@mui/material';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const TwoFactorAuth = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const handleVerification = (e) => {
    e.preventDefault();

    // Add your logic to verify the verification code and captcha
    if (isCaptchaVerified && verificationCode.trim() !== '') {
      // Successful verification logic
      console.log('Verification successful');
    } else {
      // Display error or prompt user to complete verification
      console.log('Verification failed. Please complete all fields.');
    }
  };

  const handleCaptchaChange = (value) => {
    // Handle the captcha verification result
    setIsCaptchaVerified(true);
    console.log('Captcha Verified');
  };

  return (
    <Layout>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div
          style={{
            marginTop: '8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar
            style={{
              margin: '8px',
              backgroundColor: 'secondary',
            }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Two-Factor Authentication
          </Typography>
          <form
            style={{
              width: '100%',
              marginTop: '8px',
            }}
            onSubmit={handleVerification}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="verificationCode"
              label="Verification Code"
              name="verificationCode"
              autoComplete="off"
              autoFocus
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
            <ReCAPTCHA sitekey="YOUR_RECAPTCHA_API_KEY" onChange={handleCaptchaChange} />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ margin: '24px 0 16px' }}
            >
              Verify
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Back to Login
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          {/* Add your footer or other content here */}
        </Box>
      </Container>
    </Layout>
  );
};

export default TwoFactorAuth;

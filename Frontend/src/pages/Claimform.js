import React, { useState } from 'react';
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
} from '@mui/material';

import AssignmentIcon from '@mui/icons-material/Assignment';

const ClaimForm = () => {
  const [claimDetails, setClaimDetails] = useState({
    serviceName: '',
    dateOfService: '',
    providerName: '',
    amount: '',
    additionalNotes: '',
  });

  const handleClaimSubmission = (e) => {
    e.preventDefault();

    // Add your logic for claim submission
    console.log('Claim submitted:', claimDetails);
  };

  const handleChange = (field, value) => {
    setClaimDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
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
            <AssignmentIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Submit Claim Form
          </Typography>
          <form
            style={{
              width: '100%',
              marginTop: '8px',
            }}
            onSubmit={handleClaimSubmission}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="serviceName"
              label="Service Name"
              name="serviceName"
              autoComplete="off"
              value={claimDetails.serviceName}
              onChange={(e) => handleChange('serviceName', e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="dateOfService"
              label="Date of Service"
              name="dateOfService"
              type="date"
              autoComplete="off"
              value={claimDetails.dateOfService}
              onChange={(e) => handleChange('dateOfService', e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="providerName"
              label="Healthcare Provider Name"
              name="providerName"
              autoComplete="off"
              value={claimDetails.providerName}
              onChange={(e) => handleChange('providerName', e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="amount"
              label="Amount"
              name="amount"
              type="number"
              autoComplete="off"
              value={claimDetails.amount}
              onChange={(e) => handleChange('amount', e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="additionalNotes"
              label="Additional Notes"
              name="additionalNotes"
              multiline
              rows={4}
              autoComplete="off"
              value={claimDetails.additionalNotes}
              onChange={(e) => handleChange('additionalNotes', e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ margin: '24px 0 16px' }}
            >
              Submit Claim
            </Button>
          </form>
        </div>
        <Box mt={8}>
          {/* Add your footer or other content here */}
        </Box>
      </Container>
    </Layout>
  );
};

export default ClaimForm;

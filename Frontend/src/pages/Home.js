// Home.js

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Grid, Paper, Box, Link } from '@mui/material';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ width: '100%' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6">Reliance Hospital</Typography>
          <Box>
            <Link href="/" color="inherit" style={{ margin: '0 8px' }}>
              Home
            </Link>
            <Link href="#" color="inherit" style={{ margin: '0 8px' }}>
              About
            </Link>
            <Link href="#" color="inherit" style={{ margin: '0 8px' }}>
              Services
            </Link>
            <Link href="#" color="inherit" style={{ margin: '0 8px' }}>
              Departments
            </Link>
            <Link href="#" color="inherit" style={{ margin: '0 8px' }}>
              Doctors
            </Link>
            <Link href="#" color="inherit" style={{ margin: '0 8px' }}>
              Contact
            </Link>            
            <Button variant="outlined" color="inherit" component={Link} to="/login" style={{ marginLeft: '16px' }}>
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Grid container justifyContent="center" style={{ marginTop: '150px', marginBottom: '240px' }}>
        <Grid item xs={12} sm={8} md={6}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h4">Welcome to Reliance Hospital</Typography>
            <Typography variant="h6">Your Trusted Partner in Healthcare.</Typography>
            <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
              Get Started
            </Button>
          </Paper>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};

export default Home;

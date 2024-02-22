// Home.js

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Grid, Paper, Box, Link } from '@mui/material';
import Footer from '../components/Footer';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  
  const navigate = useNavigate();

  const handleLoginButtonClick = () => {
    navigate('/login');
  };

  const handleHomeButtonClick = () => {
    navigate('/');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed" sx={{ width: '100%' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <HomeIcon onClick={handleHomeButtonClick} style={{ cursor: 'pointer', marginRight: '8px' }} />
          <Typography variant="h6">Reliance Hospital</Typography>
        </Box>
          <Box>
            <Link href="/" color="inherit" style={{ margin: '0 8px' }}>
              Home
            </Link>
            <Link href="/about" color="inherit" style={{ margin: '0 8px' }}>
              About
            </Link>
            <Link href="/claim" color="inherit" style={{ margin: '0 8px' }}>
              Patient
            </Link>            
            <Link href="/contact" color="inherit" style={{ margin: '0 8px' }}>
              Contact
            </Link> 
            <Button  variant="outlined"  color="inherit" onClick={handleLoginButtonClick}  style={{ marginLeft: '16px' }}  >
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

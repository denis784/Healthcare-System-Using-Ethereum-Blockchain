// Layout.js

import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import Footer from './Footer';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

const Layout = ({ children }) => {
    const navigate = useNavigate();
  
  const handleHomeButtonClick = () => {
    navigate('/');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ width: '100%' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <HomeIcon onClick={handleHomeButtonClick} style={{ cursor: 'pointer', marginRight: '8px' }} />
            <Typography variant="h6">Reliance Hospital</Typography>
          {/* Add your navigation links or buttons here */}
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ marginTop: '80px' }}>
        {children}
      </Box>

      <Footer />
    </Box>
  );
};

export default Layout;

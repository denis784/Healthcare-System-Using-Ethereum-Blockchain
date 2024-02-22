// Footer.js

import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box, Link } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="static" color="primary" sx={{ width: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
      <Container>
        <Toolbar>
          <Box flexGrow={1}>
            <Typography variant="body1" color="inherit">
              &copy; 2024 Reliance Hospital. All rights reserved.
            </Typography>
          </Box>
          <Box>
            <Link href="#" color="inherit" style={{ marginRight: '20px' }}>
              Privacy Policy
            </Link>
            <Link href="#" color="inherit">
              Terms of Service
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;

import React from 'react';
import Layout from '../components/Layout';
import { Container, Typography, Paper, Box } from '@mui/material';

const About = () => {
  return (
    <Layout>
      <Container component="main" maxWidth="md">
        <Box sx={{ marginTop: '8px' }}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom>
              About Reliance Hospital
            </Typography>
            <Typography variant="body1" paragraph>
            Reliance Hospital is a leading healthcare provider that has been serving the community
             over 20 years. We offer a wide range of medical services.
              Our commitment to cutting-edge technology, research and patient- centric care
               sets us aaprt in the healthcare industry


            </Typography>
            <Typography variant="h4" gutterBottom>
            Mission
            </Typography>
            <Typography variant="body1" paragraph>
            
            Our mission is to improve the health and well-being of individuals and families by offering comprehensive,
            compassionate, and patient-centered healthcare services

            
            <Typography variant="h4" gutterBottom>
            Values
            </Typography>
            We value open and honest communication, quality time spent with atients, mutual support,
            trust and respect. We believe in cultivating meaningful relationships with our patients and their families,
            ensuring that they receive the best possible care in a compassionate and supportive environment
            </Typography>
            </Paper>
        </Box>
      </Container>
    </Layout>
  );
};

export default About;

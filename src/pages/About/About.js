import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import './About.scss';

const About = () => {
  return (
    <Container maxWidth="lg" className="about-container">
      <Box className="about-header">
        <Typography variant="h3" component="h1" gutterBottom>
          About Our BookStore
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Your trusted destination for quality books and exceptional reading experiences
        </Typography>
      </Box>

      <Grid container spacing={4} className="about-content">
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="about-section">
            <Typography variant="h5" gutterBottom>
              Our Story
            </Typography>
            <Typography paragraph>
              Founded in 2024, BookStore has grown from a small local shop to a beloved online destination for book lovers worldwide. 
              Our mission is to connect readers with their next favorite book and create a community of passionate readers.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="about-section">
            <Typography variant="h5" gutterBottom>
              Our Collection
            </Typography>
            <Typography paragraph>
              We carefully curate our collection to include both timeless classics and contemporary bestsellers. 
              From fiction to non-fiction, children's books to academic texts, we strive to offer something for every reader.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} className="about-section">
            <Typography variant="h5" gutterBottom>
              Our Promise
            </Typography>
            <Typography paragraph>
              We are committed to providing:
            </Typography>
            <ul>
              <li>Quality books at competitive prices</li>
              <li>Fast and reliable shipping</li>
              <li>Excellent customer service</li>
              <li>A diverse selection of titles</li>
              <li>Secure and easy shopping experience</li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About; 
import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  Paper,
  Card,
  CardContent,
  IconButton,
} from '@mui/material';
import {
  LocationOn,
  Phone,
  Email,
  AccessTime,
  Facebook,
  Twitter,
  Instagram,
} from '@mui/icons-material';
import { ABOUT_IMAGES } from '../../constants/images';
import './About.scss';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div 
        className="hero-section"
        style={{ 
          backgroundImage: `url(${ABOUT_IMAGES.hero})`
        }}
      >
        <Container>
          <Box className="hero-content">
            <Typography variant="h2" className="hero-title">
              Our Story
            </Typography>
            <Typography variant="h5" className="hero-subtitle">
              A Journey Through Literature
            </Typography>
          </Box>
        </Container>
      </div>

      {/* Story Section */}
      <div className="story-section">
        <Container>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box className="story-content">
                <Typography variant="h4" className="section-title">
                  Our Story
                </Typography>
                <Typography variant="body1" paragraph>
                  Founded in 2020, BookStore has grown from a small local shop to a beloved destination for book lovers. Our journey began with a simple mission: to create a space where literature thrives and readers find their next favorite book.
                </Typography>
                <Typography variant="body1">
                  Today, we're proud to offer a carefully curated selection of books across all genres, from timeless classics to contemporary bestsellers. Our knowledgeable staff is always ready to help you discover your next great read.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="story-image">
                <img src={ABOUT_IMAGES.store} alt="Our Store" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Box className="contact-info">
                <Typography variant="h4" className="section-title">
                  Visit Us
                </Typography>
                <Box className="info-item">
                  <LocationOn className="icon" />
                  <Box>
                    <Typography variant="h6">Store Location</Typography>
                    <Typography variant="body1">
                      123 Book Street<br />
                      Reading City, RC 12345<br />
                      United States
                    </Typography>
                  </Box>
                </Box>
                <Box className="info-item">
                  <Phone className="icon" />
                  <Box>
                    <Typography variant="h6">Phone</Typography>
                    <Typography variant="body1">(123) 456-7890</Typography>
                  </Box>
                </Box>
                <Box className="info-item">
                  <Email className="icon" />
                  <Box>
                    <Typography variant="h6">Email</Typography>
                    <Typography variant="body1">info@bookstore.com</Typography>
                  </Box>
                </Box>
                <Box className="info-item">
                  <AccessTime className="icon" />
                  <Box>
                    <Typography variant="h6">Hours</Typography>
                    <Typography variant="body1">
                      Mon-Sat 9AM-9PM<br />
                      Sun 10AM-6PM
                    </Typography>
                  </Box>
                </Box>
                <Box className="social-links">
                  <IconButton color="primary">
                    <Facebook />
                  </IconButton>
                  <IconButton color="primary">
                    <Twitter />
                  </IconButton>
                  <IconButton color="primary">
                    <Instagram />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="map-container">
                <img src={ABOUT_IMAGES.location} alt="Store Location" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default About; 
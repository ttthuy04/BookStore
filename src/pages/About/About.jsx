import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box
} from '@mui/material';
import {
  LocalLibrary,
  LocalShipping,
  Security,
  Support
} from '@mui/icons-material';
import './About.scss';

const About = () => {
  const features = [
    {
      icon: <LocalLibrary fontSize="large" />,
      title: 'Wide Selection',
      description: 'Browse through thousands of books across various genres and categories.'
    },
    {
      icon: <LocalShipping fontSize="large" />,
      title: 'Fast Delivery',
      description: 'Quick and reliable shipping to your doorstep.'
    },
    {
      icon: <Security fontSize="large" />,
      title: 'Secure Shopping',
      description: 'Your transactions are protected with the latest security measures.'
    },
    {
      icon: <Support fontSize="large" />,
      title: '24/7 Support',
      description: 'Our customer service team is always ready to help you.'
    }
  ];

  return (
    <Container className="about-page">
      <Box className="hero-section">
        <Typography variant="h3" component="h1" gutterBottom>
          About BookStore
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Your trusted destination for quality books and excellent service
        </Typography>
      </Box>

      <Box className="mission-section">
        <Typography variant="h4" component="h2" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" paragraph>
          At BookStore, we believe in the power of knowledge and the joy of reading. Our mission is to make quality books accessible to everyone while providing an exceptional shopping experience. We carefully curate our collection to ensure that every book we offer meets our high standards of quality and value.
        </Typography>
      </Box>

      <Box className="features-section">
        <Typography variant="h4" component="h2" gutterBottom>
          Why Choose Us
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card className="feature-card">
                <CardContent>
                  <Box className="feature-icon">
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box className="story-section">
        <Typography variant="h4" component="h2" gutterBottom>
          Our Story
        </Typography>
        <Typography variant="body1" paragraph>
          Founded in 2024, BookStore began with a simple idea: to create a welcoming space where book lovers could find their next great read. What started as a small online bookstore has grown into a beloved destination for readers worldwide, thanks to our commitment to quality, service, and community.
        </Typography>
        <Typography variant="body1" paragraph>
          Today, we continue to expand our collection and improve our services, always staying true to our core values of accessibility, quality, and customer satisfaction. We're proud to serve readers of all ages and interests, and we look forward to being part of your reading journey.
        </Typography>
      </Box>
    </Container>
  );
};

export default About; 
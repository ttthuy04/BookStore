import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <Box component="footer" className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              BookStore
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Your one-stop destination for all your reading needs. Discover new worlds through our carefully curated collection of books.
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link component={RouterLink} to="/" color="inherit" display="block" className="footer-link">
              Home
            </Link>
            <Link component={RouterLink} to="/books" color="inherit" display="block" className="footer-link">
              Books
            </Link>
            <Link component={RouterLink} to="/about" color="inherit" display="block" className="footer-link">
              About
            </Link>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@bookstore.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: (123) 456-7890
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Address: 123 Book Street, Reading City
            </Typography>
          </Grid>
        </Grid>
        
        <Box mt={5} className="footer-bottom">
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} BookStore. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 
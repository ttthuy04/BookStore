import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import './Footer.scss';

const Footer = () => {
  return (
    <Box component="footer" className="footer">
      <Container maxWidth="lg">
        <Box className="footer-content">
          <Box className="footer-section">
            <Typography variant="h6">About Us</Typography>
            <Typography variant="body2">
              Your trusted online bookstore for quality books and excellent service.
            </Typography>
          </Box>
          
          <Box className="footer-section">
            <Typography variant="h6">Contact</Typography>
            <Typography variant="body2">
              Email: info@bookstore.com
            </Typography>
            <Typography variant="body2">
              Phone: (123) 456-7890
            </Typography>
          </Box>
          
          <Box className="footer-section">
            <Typography variant="h6">Follow Us</Typography>
            <Box className="social-links">
              <Link href="#" color="inherit">Facebook</Link>
              <Link href="#" color="inherit">Twitter</Link>
              <Link href="#" color="inherit">Instagram</Link>
            </Box>
          </Box>
        </Box>
        
        <Typography variant="body2" align="center" className="copyright">
          © {new Date().getFullYear()} BookStore. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 
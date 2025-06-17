import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  Divider,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import {
  Book,
  LocalLibrary,
  People,
  EmojiEvents,
  Support,
  Security
} from '@mui/icons-material';
import './About.scss';

const About = () => {
  const features = [
    {
      icon: <Book />,
      title: 'Vast Collection',
      description: 'Over 100,000 titles across all genres and categories'
    },
    {
      icon: <LocalLibrary />,
      title: 'Expert Curation',
      description: 'Carefully selected books by our experienced team'
    },
    {
      icon: <People />,
      title: 'Community Events',
      description: 'Regular book clubs, author meetups, and reading sessions'
    },
    {
      icon: <EmojiEvents />,
      title: 'Awards & Recognition',
      description: 'Multiple industry awards for excellence in service'
    },
    {
      icon: <Support />,
      title: '24/7 Support',
      description: 'Round-the-clock customer service and assistance'
    },
    {
      icon: <Security />,
      title: 'Secure Shopping',
      description: 'Safe and protected online shopping experience'
    }
  ];

  const teamMembers = [
    {
      name: 'John Smith',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Collections',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDB8fDB8fHww'
    },
    {
      name: 'Michael Chen',
      role: 'Customer Experience',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D'
    }
  ];

  return (
    <Container className="about-page">
      {/* Hero Section */}
      <Box className="hero-section">
        <Typography variant="h1" component="h1" className="hero-title">
          Welcome to BookStore
        </Typography>
        <Typography variant="h5" className="hero-subtitle">
          Your Gateway to Literary Excellence
        </Typography>
      </Box>

      {/* Story Section */}
      <Paper elevation={3} className="story-section">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box className="story-content">
              <Typography variant="h3" gutterBottom>
                Our Story
              </Typography>
              <Typography paragraph>
                Founded in 2024, BookStore began with a simple yet powerful vision: to create a space where literature thrives and readers connect. What started as a small local bookstore has blossomed into a beloved destination for book enthusiasts worldwide.
              </Typography>
              <Typography paragraph>
                Our journey has been marked by a deep commitment to quality, community, and the transformative power of books. We believe that every book has the potential to change a life, and we're dedicated to making that magic accessible to everyone.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className="story-image">
              <img
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Bookstore interior"
                className="image"
              />
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Features Section */}
      <Box className="features-section">
        <Typography variant="h3" gutterBottom className="section-title">
          Why Choose Us
        </Typography>
        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper elevation={2} className="feature-card">
                <Box className="feature-icon">
                  {feature.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body1">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Team Section */}
      <Box className="team-section">
        <Typography variant="h3" gutterBottom className="section-title">
          Meet Our Team
        </Typography>
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card className="team-card">
                <CardMedia
                  component="img"
                  height="300"
                  image={member.image}
                  alt={member.name}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {member.role}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Values Section */}
      <Paper elevation={3} className="values-section">
        <Typography variant="h3" gutterBottom className="section-title">
          Our Values
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box className="value-item">
              <Typography variant="h5" gutterBottom>
                Quality
              </Typography>
              <Typography>
                We carefully select each book in our collection, ensuring the highest standards of quality and value for our customers.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box className="value-item">
              <Typography variant="h5" gutterBottom>
                Community
              </Typography>
              <Typography>
                We foster a vibrant reading community through events, book clubs, and meaningful connections between readers and authors.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box className="value-item">
              <Typography variant="h5" gutterBottom>
                Innovation
              </Typography>
              <Typography>
                We continuously evolve and adapt to bring you the best reading experience, combining traditional values with modern technology.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Contact Section */}
      <Box className="contact-section">
        <Typography variant="h3" gutterBottom className="section-title">
          Get in Touch
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={2} className="contact-card">
              <Typography variant="h6" gutterBottom>
                Visit Us
              </Typography>
              <Typography paragraph>
                123 Book Street<br />
                Reading City, RC 12345<br />
                United States
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={2} className="contact-card">
              <Typography variant="h6" gutterBottom>
                Contact Information
              </Typography>
              <Typography paragraph>
                Email: info@bookstore.com<br />
                Phone: (123) 456-7890<br />
                Hours: Mon-Sat 9AM-8PM
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About; 
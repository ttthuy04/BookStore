import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import './Home.scss';
import '../../styles/common.scss';

const featuredBooks = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 19.99,
    image: 'https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg'
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    price: 15.99,
    image: 'https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg'
  },
  {
    id: 3,
    title: '1984',
    author: 'George Orwell',
    price: 14.99,
    image: 'https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg'
  },
  {
    id: 4,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    price: 12.99,
    image: 'https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg'
  },
  {
    id: 5,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    price: 13.99,
    image: 'https://th.bing.com/th/id/OIP.C2C-0iV23uADwfN9D4tJVwAAAA?rs=1&pid=ImgDetMain'
  },
  {
    id: 6,
    title: 'Lord of the Flies',
    author: 'William Golding',
    price: 11.99,
    image: 'https://m.media-amazon.com/images/I/81WUE0pbSaL._AC_UF1000,1000_QL80_.jpg'
  },
  {
    id: 7,
    title: 'Moby Dick',
    author: 'Herman Melville',
    price: 16.99,
    image: 'https://m.media-amazon.com/images/I/81r+LNw1uPL._AC_UF1000,1000_QL80_.jpg'
  },
  {
    id: 8,
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    price: 18.99,
    image: 'https://m.media-amazon.com/images/I/81dQwQlmAXL._AC_UF1000,1000_QL80_.jpg'
  }
];

const Home = () => {
  return (
    <Box className="home">
      <Box className="hero">
        <Typography variant="h2" component="h1">
          Welcome to BookStore
        </Typography>
        <Typography variant="h5">
          Discover your next favorite book
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          to="/books"
          className="cta-button"
        >
          Browse Books
        </Button>
      </Box>

      <Box className="featured-section">
        <Typography variant="h4" component="h2" gutterBottom>
          Featured Books
        </Typography>
        <Grid container spacing={4} className="books-grid">
          {featuredBooks.map((book) => (
            <Grid item xs={12} sm={6} md={3} key={book.id}>
              <Card className="book-card">
                <Link to={`/books/${book.id}`} className="book-image-link">
                  <CardMedia
                    component="img"
                    image={book.image}
                    alt={book.title}
                  />
                </Link>
                <CardContent>
                  <Typography className="book-title">
                    {book.title}
                  </Typography>
                  <Typography className="book-author">
                    by {book.author}
                  </Typography>
                  <Typography className="book-price">
                    ${book.price}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to={`/books/${book.id}`}
                    fullWidth
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home; 
import React, { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Container
} from '@mui/material';
import { Search } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './Books.scss';

const Books = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data - sẽ được thay thế bằng API call sau
  const books = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      price: 19.99,
      image: 'https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg',
      description: 'A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.'
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      price: 15.99,
      image: 'https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg',
      description: 'The story of racial injustice and the loss of innocence in the American South.'
    },
    {
      id: 3,
      title: '1984',
      author: 'George Orwell',
      price: 14.99,
      image: 'https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg',
      description: 'A dystopian novel set in a totalitarian society.'
    },
    {
      id: 4,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      price: 12.99,
      image: 'https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg',
      description: 'A romantic novel of manners.'
    },
    {
      id: 5,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      price: 13.99,
      image: 'https://th.bing.com/th/id/OIP.C2C-0iV23uADwfN9D4tJVwAAAA?rs=1&pid=ImgDetMain',
      description: 'A classic coming-of-age story.'
    },
    {
      id: 6,
      title: 'Lord of the Flies',
      author: 'William Golding',
      price: 11.99,
      image: 'https://th.bing.com/th/id/OIP.oz6kam1lH4GMMMS9A782dgHaLX?w=1522&h=2337&rs=1&pid=ImgDetMain',
      description: 'A novel about the dark side of human nature.'
    }
  ];

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="books-page">
      <Box className="search-section">
        <Typography variant="h4" component="h1" gutterBottom>
          Our Books Collection
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search by title or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Grid container spacing={4} className="books-grid">
        {filteredBooks.map((book) => (
          <Grid item xs={12} sm={6} md={4} key={book.id}>
            <Card className="book-card">
              <CardMedia
                component="img"
                height="300"
                image={book.image}
                alt={book.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {book.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  by {book.author}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="description">
                  {book.description}
                </Typography>
                <Typography variant="h6" color="primary" className="price">
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
    </Container>
  );
};

export default Books; 
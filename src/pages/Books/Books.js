import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Snackbar,
  Alert
} from '@mui/material';
import { Search, AddShoppingCart } from '@mui/icons-material';
import { useCart } from '../../context/CartContext';
import './Books.scss';

const Books = () => {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });

  const books = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      price: 12.99,
      image: 'https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      price: 9.99,
      image: 'https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 3,
      title: '1984',
      author: 'George Orwell',
      price: 10.99,
      image: 'https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 4,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      price: 13.99,
      image: 'https://m.media-amazon.com/images/I/61fgOuZNWYL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 5,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      price: 9.99,
      image: 'https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 6,
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      price: 15.99,
      image: 'https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 7,
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      price: 24.99,
      image: 'https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 8,
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      price: 11.99,
      image: 'https://m.media-amazon.com/images/I/71ZvnK+4JPL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 9,
      title: 'The Little Prince',
      author: 'Antoine de Saint-Exupéry',
      price: 8.99,
      image: 'https://m.media-amazon.com/images/I/71OZY035QKL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 10,
      title: 'The Da Vinci Code',
      author: 'Dan Brown',
      price: 14.99,
      image: 'https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 11,
      title: 'The Kite Runner',
      author: 'Khaled Hosseini',
      price: 12.99,
      image: 'https://m.media-amazon.com/images/I/71X6YzwV0gL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 12,
      title: 'The Book Thief',
      author: 'Markus Zusak',
      price: 13.99,
      image: 'https://m.media-amazon.com/images/I/71LhLZGHrlL._AC_UF1000,1000_QL80_.jpg'
    }
  ];

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (book) => {
    addToCart(book);
    setSnackbar({
      open: true,
      message: `${book.title} added to cart!`
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Container className="books-page">
      <Typography variant="h3" component="h1" gutterBottom>
        Our Books
      </Typography>

      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search by title or author..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-field"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />

      <Grid container spacing={4} className="books-grid">
        {filteredBooks.map((book) => (
          <Grid item xs={12} sm={6} md={4} key={book.id}>
            <Card className="book-card">
              <Link to={`/books/${book.id}`} className="book-image-link">
                <CardMedia
                  component="img"
                  height="300"
                  image={book.image}
                  alt={book.title}
                />
              </Link>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  {book.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  by {book.author}
                </Typography>
                <Typography variant="h6" color="primary" gutterBottom>
                  ${book.price}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<AddShoppingCart />}
                  onClick={() => handleAddToCart(book)}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Books; 
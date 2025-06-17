import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Snackbar,
  Alert,
  IconButton,
  Rating,
  Chip,
  CircularProgress
} from '@mui/material';
import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder,
  ArrowForward,
  LocalShipping,
  Bookmark,
  BookmarkBorder
} from '@mui/icons-material';
import { useCart } from '../../context/CartContext';
import { useBooks } from '../../context/BookContext';
import './Home.scss';

const Home = () => {
  const { addToCart } = useCart();
  const { featuredBooks, loading, error } = useBooks();
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });
  const [favorites, setFavorites] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);

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

  const toggleFavorite = (bookId) => {
    setFavorites(prev => 
      prev.includes(bookId)
        ? prev.filter(id => id !== bookId)
        : [...prev, bookId]
    );
  };

  const toggleBookmark = (bookId) => {
    setBookmarks(prev => 
      prev.includes(bookId)
        ? prev.filter(id => id !== bookId)
        : [...prev, bookId]
    );
  };

  if (loading) {
    return (
      <Box className="loading-container">
        <CircularProgress />
        <Typography variant="h6" className="loading-text">
          Loading books...
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box className="error-container">
        <Typography variant="h6" color="error" className="error-text">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <div className="home">
      {/* Hero Section */}
      <Box className="hero-section">
        <Container maxWidth="lg">
          <Box className="hero-content">
            <Typography variant="h1" component="h1" className="hero-title">
              Welcome to BookStore
            </Typography>
            <Typography variant="h4" className="hero-subtitle">
              Discover your next favorite book
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              component={Link}
              to="/books"
              className="hero-button"
              endIcon={<ArrowForward />}
            >
              Explore Books
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Featured Books Section */}
      <Container maxWidth="lg" className="featured-section">
        <Box className="section-header">
          <Typography variant="h2" component="h2" className="section-title">
            Featured Books
          </Typography>
          <Typography variant="subtitle1" className="section-subtitle">
            Handpicked selections from our collection
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {featuredBooks.map((book) => (
            <Grid item xs={12} sm={6} md={4} key={book.id}>
              <Card className="book-card">
                <Box className="book-image-container">
                  <Link to={`/books/${book.id}`} className="book-image-link">
                    <CardMedia
                      component="img"
                      height="400"
                      image={book.image}
                      alt={book.title}
                      className="book-image"
                    />
                  </Link>
                  <Box className="book-actions">
                    <IconButton
                      className="action-button favorite-button"
                      onClick={() => toggleFavorite(book.id)}
                    >
                      {favorites.includes(book.id) ? (
                        <Favorite color="error" />
                      ) : (
                        <FavoriteBorder />
                      )}
                    </IconButton>
                    <IconButton
                      className="action-button bookmark-button"
                      onClick={() => toggleBookmark(book.id)}
                    >
                      {bookmarks.includes(book.id) ? (
                        <Bookmark color="primary" />
                      ) : (
                        <BookmarkBorder />
                      )}
                    </IconButton>
                  </Box>
                  {book.bestseller && (
                    <Chip
                      label="Bestseller"
                      color="primary"
                      className="bestseller-chip"
                    />
                  )}
                  {book.discount > 0 && (
                    <Chip
                      label={`${book.discount}% OFF`}
                      color="secondary"
                      className="discount-chip"
                    />
                  )}
                </Box>
                <CardContent className="book-content">
                  <Typography variant="h5" component="h3" className="book-title">
                    {book.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" className="book-author">
                    by {book.author}
                  </Typography>
                  <Box className="book-rating">
                    <Rating value={book.rating} precision={0.5} readOnly />
                    <Typography variant="body2" color="text.secondary">
                      ({book.reviews} reviews)
                    </Typography>
                  </Box>
                  <Typography variant="body2" className="book-description">
                    {book.description}
                  </Typography>
                  <Box className="book-footer">
                    <Box className="price-container">
                      {book.discount > 0 && (
                        <Typography variant="body2" className="original-price">
                          ${(book.price * (1 + book.discount / 100)).toFixed(2)}
                        </Typography>
                      )}
                      <Typography variant="h6" color="primary" className="book-price">
                        ${book.price}
                      </Typography>
                    </Box>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<AddShoppingCart />}
                      onClick={() => handleAddToCart(book)}
                      className="add-to-cart-button"
                    >
                      Add to Cart
                    </Button>
                  </Box>
                  <Box className="shipping-info">
                    <LocalShipping className="shipping-icon" />
                    <Typography variant="body2">
                      Free shipping on orders over $50
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box className="view-all-container">
          <Button
            variant="outlined"
            color="primary"
            size="large"
            component={Link}
            to="/books"
            endIcon={<ArrowForward />}
          >
            View All Books
          </Button>
        </Box>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Home; 
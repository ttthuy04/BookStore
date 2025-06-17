import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Rating,
  Chip,
  Divider,
  TextField,
  Snackbar,
  Alert,
  IconButton,
  Paper
} from '@mui/material';
import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder,
  Bookmark,
  BookmarkBorder,
  LocalShipping,
  Share,
  Add,
  Remove
} from '@mui/icons-material';
import { useCart } from '../../context/CartContext';
import { useBooks } from '../../context/BookContext';
import './BookDetail.scss';

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getBookById } = useBooks();
  const { addToCart } = useCart();
  const [book, setBook] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });
  const [favorite, setFavorite] = useState(false);
  const [bookmark, setBookmark] = useState(false);

  useEffect(() => {
    const bookData = getBookById(parseInt(id));
    if (bookData) {
      setBook(bookData);
    } else {
      navigate('/');
    }
  }, [id, getBookById, navigate]);

  if (!book) {
    return null;
  }

  const handleAddToCart = () => {
    addToCart(book, quantity);
    setSnackbar({
      open: true,
      message: `${quantity} ${quantity === 1 ? 'copy' : 'copies'} of ${book.title} added to cart!`
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleQuantityChange = (value) => {
    const newQuantity = quantity + value;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  const toggleBookmark = () => {
    setBookmark(!bookmark);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: book.title,
        text: `Check out ${book.title} by ${book.author}`,
        url: window.location.href,
      });
    }
  };

  return (
    <div className="book-detail">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Book Image */}
          <Grid item xs={12} md={5}>
            <Paper className="book-image-container">
              <img src={book.image} alt={book.title} className="book-image" />
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
            </Paper>
          </Grid>

          {/* Book Info */}
          <Grid item xs={12} md={7}>
            <Box className="book-info">
              <Typography variant="h3" component="h1" className="book-title">
                {book.title}
              </Typography>
              <Typography variant="h5" color="text.secondary" className="book-author">
                by {book.author}
              </Typography>

              <Box className="book-rating">
                <Rating value={book.rating} precision={0.5} readOnly size="large" />
                <Typography variant="body1" color="text.secondary">
                  ({book.reviews} reviews)
                </Typography>
              </Box>

              <Box className="book-actions">
                <IconButton onClick={toggleFavorite} color="primary">
                  {favorite ? <Favorite color="error" /> : <FavoriteBorder />}
                </IconButton>
                <IconButton onClick={toggleBookmark} color="primary">
                  {bookmark ? <Bookmark color="primary" /> : <BookmarkBorder />}
                </IconButton>
                <IconButton onClick={handleShare} color="primary">
                  <Share />
                </IconButton>
              </Box>

              <Divider className="divider" />

              <Box className="book-price-section">
                <Box className="price-container">
                  {book.discount > 0 && (
                    <Typography variant="h6" className="original-price">
                      ${(book.price * (1 + book.discount / 100)).toFixed(2)}
                    </Typography>
                  )}
                  <Typography variant="h4" color="primary" className="book-price">
                    ${book.price}
                  </Typography>
                </Box>

                <Box className="quantity-container">
                  <IconButton onClick={() => handleQuantityChange(-1)}>
                    <Remove />
                  </IconButton>
                  <Typography variant="h6">{quantity}</Typography>
                  <IconButton onClick={() => handleQuantityChange(1)}>
                    <Add />
                  </IconButton>
                </Box>
              </Box>

              <Box className="shipping-info">
                <LocalShipping className="shipping-icon" />
                <Typography variant="body1">
                  Free shipping on orders over $50
                </Typography>
              </Box>

              <Divider className="divider" />

              <Box className="book-description">
                <Typography variant="h5" gutterBottom>
                  Description
                </Typography>
                <Typography variant="body1" paragraph>
                  {book.description}
                </Typography>
              </Box>

              <Box className="book-details">
                <Typography variant="h5" gutterBottom>
                  Details
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">
                      Category
                    </Typography>
                    <Typography variant="body1">
                      {book.category}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">
                      Language
                    </Typography>
                    <Typography variant="body1">
                      English
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">
                      Pages
                    </Typography>
                    <Typography variant="body1">
                      {book.pages || 'N/A'}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">
                      ISBN
                    </Typography>
                    <Typography variant="body1">
                      {book.isbn || 'N/A'}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
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

export default BookDetail; 
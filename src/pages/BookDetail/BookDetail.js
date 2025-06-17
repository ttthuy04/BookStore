import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Paper,
  Divider
} from '@mui/material';
import { useCart } from '../../context/CartContext';
import './BookDetail.scss';

const BookDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Mock data - in a real app, this would come from an API
  const book = {
    id: parseInt(id),
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 12.99,
    image: 'https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg',
    description: 'The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway\'s interactions with mysterious millionaire Jay Gatsby and Gatsby\'s obsession to reunite with his former lover, Daisy Buchanan.',
    publishedYear: 1925,
    pages: 180,
    language: 'English',
    isbn: '978-0743273565'
  };

  const handleAddToCart = () => {
    addToCart(book);
  };

  return (
    <Container maxWidth="lg" className="book-detail-container">
      <Paper elevation={3} className="book-detail-paper">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box className="book-image-container">
              <img
                src={book.image}
                alt={book.title}
                className="book-image"
              />
            </Box>
          </Grid>
          
          <Grid item xs={12} md={8}>
            <Box className="book-info">
              <Typography variant="h3" component="h1" gutterBottom>
                {book.title}
              </Typography>
              
              <Typography variant="h5" color="text.secondary" gutterBottom>
                by {book.author}
              </Typography>
              
              <Typography variant="h4" color="primary" gutterBottom>
                ${book.price}
              </Typography>
              
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleAddToCart}
                className="add-to-cart-button"
              >
                Add to Cart
              </Button>
              
              <Divider sx={{ my: 3 }} />
              
              <Typography variant="h6" gutterBottom>
                Description
              </Typography>
              <Typography paragraph>
                {book.description}
              </Typography>
              
              <Grid container spacing={2} className="book-details">
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    Published Year
                  </Typography>
                  <Typography variant="body1">
                    {book.publishedYear}
                  </Typography>
                </Grid>
                
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    Pages
                  </Typography>
                  <Typography variant="body1">
                    {book.pages}
                  </Typography>
                </Grid>
                
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    Language
                  </Typography>
                  <Typography variant="body1">
                    {book.language}
                  </Typography>
                </Grid>
                
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    ISBN
                  </Typography>
                  <Typography variant="body1">
                    {book.isbn}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default BookDetail; 
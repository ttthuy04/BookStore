import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
  Box,
  Divider
} from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './Cart.scss';

const Cart = () => {
  // Mock data - sẽ được thay thế bằng Redux state sau
  const cartItems = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      price: 19.99,
      image: 'https://source.unsplash.com/random/300x400?book',
      quantity: 1
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      price: 15.99,
      image: 'https://source.unsplash.com/random/300x400?book',
      quantity: 2
    }
  ];

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 5.99;
  const total = subtotal + shipping;

  return (
    <Container className="cart-page">
      <Typography variant="h4" component="h1" gutterBottom>
        Shopping Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Box className="empty-cart">
          <Typography variant="h6" gutterBottom>
            Your cart is empty
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/books"
          >
            Continue Shopping
          </Button>
        </Box>
      ) : (
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            {cartItems.map((item) => (
              <Card key={item.id} className="cart-item">
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                      <CardMedia
                        component="img"
                        image={item.image}
                        alt={item.title}
                        className="item-image"
                      />
                    </Grid>
                    <Grid item xs={12} sm={9}>
                      <Box className="item-details">
                        <Typography variant="h6" component="h2">
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          by {item.author}
                        </Typography>
                        <Typography variant="h6" color="primary" className="price">
                          ${item.price}
                        </Typography>
                        <Box className="quantity-controls">
                          <IconButton size="small">
                            <Remove />
                          </IconButton>
                          <Typography variant="body1" className="quantity">
                            {item.quantity}
                          </Typography>
                          <IconButton size="small">
                            <Add />
                          </IconButton>
                          <IconButton color="error" className="delete-btn">
                            <Delete />
                          </IconButton>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))}
          </Grid>

          <Grid item xs={12} md={4}>
            <Card className="order-summary">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Order Summary
                </Typography>
                <Box className="summary-item">
                  <Typography>Subtotal</Typography>
                  <Typography>${subtotal.toFixed(2)}</Typography>
                </Box>
                <Box className="summary-item">
                  <Typography>Shipping</Typography>
                  <Typography>${shipping.toFixed(2)}</Typography>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box className="summary-item total">
                  <Typography variant="h6">Total</Typography>
                  <Typography variant="h6">${total.toFixed(2)}</Typography>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  className="checkout-btn"
                >
                  Proceed to Checkout
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Cart; 
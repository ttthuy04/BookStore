import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Badge, IconButton } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { useCart } from '../../context/CartContext';
import './Navbar.scss';

const Navbar = () => {
  const { getTotalItems } = useCart();

  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" className="logo">
          BookStore
        </Typography>
        
        <div className="nav-links">
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/books">
            Books
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
        </div>

        <IconButton
          color="inherit"
          component={Link}
          to="/cart"
          className="cart-icon"
        >
          <Badge badgeContent={getTotalItems()} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 
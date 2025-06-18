import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Badge } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <AppBar position="static" className="header">
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
        <IconButton color="inherit" component={Link} to="/cart">
          <Badge badgeContent={0} color="error">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 
import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, CardMedia, IconButton, Snackbar } from '@mui/material';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCart } from '../../context/CartContext';
import './Home.scss';
import '../../styles/common.scss';

const Home = () => {
  const { addToCart } = useCart();
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleAddToCart = (book) => {
    addToCart(book);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const featuredBooks = [
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
      price: 14.99,
      image: 'https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 3,
      title: '1984',
      author: 'George Orwell',
      price: 11.99,
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
    }
  ];

  return (
    <Box className="home-container">
      <Box className="hero">
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Our Bookstore
        </Typography>
        <Typography variant="h5" gutterBottom>
          Discover your next favorite book
        </Typography>
        <Button variant="contained" color="primary" size="large" component={Link} to="/books">
          Browse Books
        </Button>
      </Box>

      <Box className="featured-section">
        <Typography variant="h3" component="h2" gutterBottom>
          Featured Books
        </Typography>
        <Grid container spacing={4}>
          {featuredBooks.map((book) => (
            <Grid item xs={12} sm={6} md={4} key={book.id}>
              <Card className="book-card">
                <Link to={`/books/${book.id}`} className="book-image-link">
                  <CardMedia
                    component="img"
                    height="300"
                    image={book.image}
                    alt={book.title}
                    className="book-image"
                  />
                </Link>
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {book.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    by {book.author}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                    <Typography variant="h6" color="primary">
                      ${book.price}
                    </Typography>
                    <IconButton 
                      color="primary" 
                      onClick={() => handleAddToCart(book)}
                      aria-label="add to cart"
                    >
                      <AddShoppingCartIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Book added to cart"
      />
    </Box>
  );
};

export default Home; 
import React, { useState } from 'react';
import { Container, Typography, Grid, Box, Button } from '@mui/material';
import { useBooks } from '../../context/BookContext';
import BookCard from '../../components/BookCard/BookCard';
import { HOME_IMAGES } from '../../constants/images';
import './Home.scss';

const Home = () => {
  const { featuredBooks, loading, error } = useBooks();
  const [favorites, setFavorites] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);

  const handleToggleFavorite = (bookId) => {
    setFavorites(prev => 
      prev.includes(bookId)
        ? prev.filter(id => id !== bookId)
        : [...prev, bookId]
    );
  };

  const handleToggleBookmark = (bookId) => {
    setBookmarks(prev => 
      prev.includes(bookId)
        ? prev.filter(id => id !== bookId)
        : [...prev, bookId]
    );
  };

  const handleAddToCart = (book) => {
    // Implement cart functionality here
    console.log('Adding to cart:', book);
  };

  if (loading) {
    return (
      <Box className="loading-container">
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box className="error-container">
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div 
        className="hero-section" 
        style={{ 
          backgroundImage: `url(${HOME_IMAGES.hero})`
        }}
      >
        <Container>
          <Box className="hero-content">
            <Typography variant="h1" className="hero-title">
              Discover Your Next Favorite Book
            </Typography>
            <Typography variant="h5" className="hero-subtitle">
              Explore our curated collection of bestsellers and hidden gems
            </Typography>
            <Button variant="contained" color="primary" size="large" className="hero-button">
              Shop Now
            </Button>
          </Box>
        </Container>
      </div>

      {/* Featured Books Section */}
      <div className="featured-section">
        <Container>
          <Typography variant="h4" className="section-title">
            Featured Books
          </Typography>
          <Grid container spacing={4}>
            {featuredBooks.map((book) => (
              <Grid item xs={12} sm={6} md={4} key={book.id}>
                <BookCard 
                  book={book}
                  onAddToCart={handleAddToCart}
                  onToggleFavorite={handleToggleFavorite}
                  onToggleBookmark={handleToggleBookmark}
                  isFavorite={favorites.includes(book.id)}
                  isBookmarked={bookmarks.includes(book.id)}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Home; 
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Chip,
  Rating,
  Box,
} from '@mui/material';
import {
  Favorite,
  FavoriteBorder,
  Bookmark,
  BookmarkBorder,
  ShoppingCart,
} from '@mui/icons-material';
import './BookCard.scss';

const BookCard = ({
  book,
  onAddToCart,
  onToggleFavorite,
  onToggleBookmark,
  isFavorite,
  isBookmarked,
}) => {
  const [showActions, setShowActions] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = (e) => {
    // Chỉ chuyển hướng nếu click vào card, không phải vào các nút
    if (!e.target.closest('.action-button')) {
      navigate(`/book/${book.id}`);
    }
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    onAddToCart(book);
  };

  const handleToggleFavorite = (e) => {
    e.stopPropagation();
    onToggleFavorite(book.id);
  };

  const handleToggleBookmark = (e) => {
    e.stopPropagation();
    onToggleBookmark(book.id);
  };

  return (
    <Card 
      className="book-card"
      onClick={handleCardClick}
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="book-image-container">
        <CardMedia
          component="img"
          height="300"
          image={book.image}
          alt={book.title}
        />
        {book.isBestseller && (
          <Chip
            label="Bestseller"
            color="primary"
            size="small"
            className="bestseller-chip"
          />
        )}
        {book.discount && (
          <Chip
            label={`${book.discount}% OFF`}
            color="secondary"
            size="small"
            className="discount-chip"
          />
        )}
        <div className={`book-actions ${showActions ? 'show' : ''}`}>
          <IconButton
            className="action-button"
            onClick={handleAddToCart}
            size="small"
          >
            <ShoppingCart />
          </IconButton>
          <IconButton
            className="action-button"
            onClick={handleToggleFavorite}
            size="small"
          >
            {isFavorite ? <Favorite color="error" /> : <FavoriteBorder />}
          </IconButton>
          <IconButton
            className="action-button"
            onClick={handleToggleBookmark}
            size="small"
          >
            {isBookmarked ? <Bookmark color="primary" /> : <BookmarkBorder />}
          </IconButton>
        </div>
      </div>
      <CardContent>
        <Typography className="book-title" variant="h6" component="div">
          {book.title}
        </Typography>
        <Typography className="book-author" variant="body2" color="text.secondary">
          {book.author}
        </Typography>
        <Box className="book-rating">
          <Rating value={book.rating} readOnly precision={0.5} />
          <Typography variant="body2" color="text.secondary">
            ({book.reviews})
          </Typography>
        </Box>
        <Box className="book-price">
          {book.discount ? (
            <>
              <Typography
                className="original-price"
                variant="body2"
                color="text.secondary"
              >
                ${book.price.toFixed(2)}
              </Typography>
              <Typography
                className="discounted-price"
                variant="h6"
                color="primary"
              >
                ${(book.price * (1 - book.discount / 100)).toFixed(2)}
              </Typography>
            </>
          ) : (
            <Typography className="price" variant="h6" color="primary">
              ${book.price.toFixed(2)}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default BookCard; 
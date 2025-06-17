import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Button,
  Paper,
  Box,
  Rating
} from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import './BookDetail.scss';

const books = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 19.99,
    image: 'https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg',
    description: 'A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.',
    rating: 4.5,
    reviews: 128,
    publishedYear: 1925,
    publisher: 'Scribner',
    isbn: '978-0743273565',
    pages: 180,
    language: 'English',
    category: 'Fiction',
    longDescription: `The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.

    The novel was inspired by a youthful romance Fitzgerald had with socialite Ginevra King, and the riotous parties he attended on Long Island's North Shore in 1922. Following a move to the French Riviera, Fitzgerald completed a rough draft of the novel in 1924. He submitted it to editor Maxwell Perkins, who persuaded Fitzgerald to revise the work over the following winter. After making revisions, Fitzgerald was satisfied with the text, but remained ambivalent about the book's title and considered several alternatives. Painter Francis Cugat's cover art greatly impressed Fitzgerald, and he incorporated its imagery into the novel.`
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    price: 15.99,
    image: 'https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg',
    description: 'The story of racial injustice and the loss of innocence in the American South.',
    rating: 4.8,
    reviews: 200,
    publishedYear: 1960,
    publisher: 'J.B. Lippincott & Co.',
    isbn: '978-0061120084',
    pages: 281,
    language: 'English',
    category: 'Classic',
    longDescription: `To Kill a Mockingbird is a novel by Harper Lee published in 1960. Instantly successful, widely read in high schools and middle schools in the United States, it has become a classic of modern American literature.`
  },
  {
    id: 3,
    title: '1984',
    author: 'George Orwell',
    price: 14.99,
    image: 'https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg',
    description: 'A dystopian novel set in a totalitarian society.',
    rating: 4.7,
    reviews: 175,
    publishedYear: 1949,
    publisher: 'Secker & Warburg',
    isbn: '978-0451524935',
    pages: 328,
    language: 'English',
    category: 'Dystopian',
    longDescription: `1984, a novel by George Orwell, offers an unsettling picture of a future totalitarian society dominated by surveillance and mind control.`
  },
  {
    id: 4,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    price: 12.99,
    image: 'https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg',
    description: 'A romantic novel of manners.',
    rating: 4.6,
    reviews: 150,
    publishedYear: 1813,
    publisher: 'T. Egerton',
    isbn: '978-1503290563',
    pages: 279,
    language: 'English',
    category: 'Romance',
    longDescription: `Pride and Prejudice is a romantic novel of manners written by Jane Austen in 1813. The novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book.`
  },
  {
    id: 5,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    price: 13.99,
    image: 'https://th.bing.com/th/id/OIP.C2C-0iV23uADwfN9D4tJVwAAAA?rs=1&pid=ImgDetMain',
    description: 'A classic coming-of-age story.',
    rating: 4.2,
    reviews: 110,
    publishedYear: 1951,
    publisher: 'Little, Brown and Company',
    isbn: '978-0316769488',
    pages: 214,
    language: 'English',
    category: 'Classic',
    longDescription: `The Catcher in the Rye is a novel by J. D. Salinger, partially published in serial form in 1945–1946 and as a novel in 1951. It is widely considered one of the greatest American novels.`
  },
  {
    id: 6,
    title: 'Lord of the Flies',
    author: 'William Golding',
    price: 11.99,
    image: 'https://th.bing.com/th/id/OIP.oz6kam1lH4GMMMS9A782dgHaLX?w=1522&h=2337&rs=1&pid=ImgDetMain',
    description: 'A novel about the dark side of human nature.',
    rating: 4.3,
    reviews: 90,
    publishedYear: 1954,
    publisher: 'Faber and Faber',
    isbn: '978-0399501487',
    pages: 224,
    language: 'English',
    category: 'Allegory',
    longDescription: `Lord of the Flies is a 1954 novel by Nobel Prize–winning British author William Golding. The book focuses on a group of British boys stranded on an uninhabited island and their disastrous attempt to govern themselves.`
  }
];

const BookDetail = () => {
  const { id } = useParams();
  const book = books.find(b => b.id === parseInt(id));
  if (!book) return <Container><Typography variant="h5">Book not found</Typography></Container>;

  return (
    <Container className="book-detail">
      <Paper elevation={3} className="book-content">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <img
              src={book.image}
              alt={book.title}
              className="book-image"
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Box className="book-info">
              <Typography variant="h4" component="h1" gutterBottom>
                {book.title}
              </Typography>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                by {book.author}
              </Typography>
              <Box className="rating-section" sx={{ my: 2 }}>
                <Rating value={book.rating} precision={0.5} readOnly />
                <Typography variant="body2" color="text.secondary">
                  ({book.reviews} reviews)
                </Typography>
              </Box>
              <Typography variant="h5" color="primary" className="price" gutterBottom>
                ${book.price}
              </Typography>
              <Typography variant="body1" paragraph>
                {book.description}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<ShoppingCart />}
                className="add-to-cart-btn"
              >
                Add to Cart
              </Button>
              <Box className="book-details" sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom>
                  Book Details
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">
                      Publisher
                    </Typography>
                    <Typography variant="body1">{book.publisher}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">
                      Published Year
                    </Typography>
                    <Typography variant="body1">{book.publishedYear}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">
                      ISBN
                    </Typography>
                    <Typography variant="body1">{book.isbn}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">
                      Pages
                    </Typography>
                    <Typography variant="body1">{book.pages}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">
                      Language
                    </Typography>
                    <Typography variant="body1">{book.language}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">
                      Category
                    </Typography>
                    <Typography variant="body1">{book.category}</Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box className="long-description" sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom>
                  Description
                </Typography>
                <Typography variant="body1" paragraph>
                  {book.longDescription}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default BookDetail; 
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { CartProvider } from './context/CartContext';
import { BookProvider } from './context/BookContext';
import theme from './theme';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Books from './pages/Books/Books';
import BookDetail from './pages/BookDetail/BookDetail';
import Cart from './pages/Cart/Cart';
import About from './pages/About/About';
import './App.scss';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CartProvider>
        <BookProvider>
          <div className="app">
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<Books />} />
                <Route path="/books/:id" element={<BookDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BookProvider>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App; 
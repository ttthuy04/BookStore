import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';

// Pages
import Home from './pages/Home/Home';
import Books from './pages/Books/Books';
import BookDetail from './pages/BookDetail/BookDetail';
import Cart from './pages/Cart/Cart';
import About from './pages/About/About';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Container component="main" className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/:id" element={<BookDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

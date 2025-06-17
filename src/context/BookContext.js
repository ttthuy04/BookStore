import React, { createContext, useContext, useState, useEffect } from 'react';
import bookService from '../services/bookService';
import { books } from '../data/books';

const BookContext = createContext();

export const useBooks = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error('useBooks must be used within a BookProvider');
  }
  return context;
};

export const BookProvider = ({ children }) => {
  const [booksList, setBooksList] = useState([]);
  const [featuredBooks, setFeaturedBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load dữ liệu ban đầu
  useEffect(() => {
    const loadInitialData = async () => {
      try {
        setLoading(true);
        const [allBooks, featured, allCategories] = await Promise.all([
          bookService.getAllBooks(),
          bookService.getFeaturedBooks(),
          bookService.getAllCategories()
        ]);
        setBooksList(allBooks);
        setFeaturedBooks(featured);
        setCategories(allCategories);
        setError(null);
      } catch (err) {
        setError('Failed to load books data');
        console.error('Error loading books:', err);
      } finally {
        setLoading(false);
      }
    };

    loadInitialData();
  }, []);

  // Thêm sách mới
  const addBook = async (bookData) => {
    try {
      const newBook = bookService.addBook(bookData);
      setBooksList(prevBooks => [...prevBooks, newBook]);
      return newBook;
    } catch (err) {
      setError('Failed to add book');
      throw err;
    }
  };

  // Cập nhật sách
  const updateBook = async (id, bookData) => {
    try {
      const updatedBook = bookService.updateBook(id, bookData);
      if (updatedBook) {
        setBooksList(prevBooks =>
          prevBooks.map(book =>
            book.id === id ? updatedBook : book
          )
        );
        // Cập nhật featured books nếu cần
        if (updatedBook.bestseller) {
          setFeaturedBooks(prevFeatured =>
            prevFeatured.some(book => book.id === id)
              ? prevFeatured.map(book =>
                  book.id === id ? updatedBook : book
                )
              : [...prevFeatured, updatedBook]
          );
        } else {
          setFeaturedBooks(prevFeatured =>
            prevFeatured.filter(book => book.id !== id)
          );
        }
      }
      return updatedBook;
    } catch (err) {
      setError('Failed to update book');
      throw err;
    }
  };

  // Xóa sách
  const deleteBook = async (id) => {
    try {
      const success = bookService.deleteBook(id);
      if (success) {
        setBooksList(prevBooks => prevBooks.filter(book => book.id !== id));
        setFeaturedBooks(prevFeatured =>
          prevFeatured.filter(book => book.id !== id)
        );
      }
      return success;
    } catch (err) {
      setError('Failed to delete book');
      throw err;
    }
  };

  // Tìm kiếm sách
  const searchBooks = (query) => {
    const searchTerm = query.toLowerCase();
    return booksList.filter(
      book =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm) ||
        book.description.toLowerCase().includes(searchTerm)
    );
  };

  // Lấy sách theo danh mục
  const getBooksByCategory = (category) => {
    return booksList.filter(book => book.category === category);
  };

  // Lấy sách theo giá
  const getBooksByPriceRange = (min, max) => {
    return booksList.filter(book => book.price >= min && book.price <= max);
  };

  // Lấy sách theo đánh giá
  const getBooksByRating = (rating) => {
    return booksList.filter(book => book.rating >= rating);
  };

  // Lấy sách đang giảm giá
  const getDiscountedBooks = () => {
    return bookService.getDiscountedBooks();
  };

  // Lấy sách mới nhất
  const getLatestBooks = (limit) => {
    return bookService.getLatestBooks(limit);
  };

  // Lấy sách bán chạy nhất
  const getBestSellingBooks = (limit) => {
    return bookService.getBestSellingBooks(limit);
  };

  const getBookById = (id) => {
    return booksList.find(book => book.id === id);
  };

  const value = {
    books: booksList,
    featuredBooks,
    categories,
    loading,
    error,
    getBookById,
    getBooksByCategory,
    getBooksByPriceRange,
    getBooksByRating,
    searchBooks,
    addBook,
    updateBook,
    deleteBook,
    getDiscountedBooks,
    getLatestBooks,
    getBestSellingBooks
  };

  return (
    <BookContext.Provider value={value}>
      {children}
    </BookContext.Provider>
  );
}; 
import React, { createContext, useContext, useState, useEffect } from 'react';
import bookService from '../services/bookService';

const BookContext = createContext();

export const useBooks = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error('useBooks must be used within a BookProvider');
  }
  return context;
};

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
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
        setBooks(allBooks);
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
      setBooks(prevBooks => [...prevBooks, newBook]);
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
        setBooks(prevBooks =>
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
        setBooks(prevBooks => prevBooks.filter(book => book.id !== id));
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
    return bookService.searchBooks(query);
  };

  // Lấy sách theo danh mục
  const getBooksByCategory = (category) => {
    return bookService.getBooksByCategory(category);
  };

  // Lấy sách theo giá
  const getBooksByPriceRange = (min, max) => {
    return bookService.getBooksByPriceRange(min, max);
  };

  // Lấy sách theo đánh giá
  const getBooksByRating = (minRating) => {
    return bookService.getBooksByRating(minRating);
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

  const value = {
    books,
    featuredBooks,
    categories,
    loading,
    error,
    addBook,
    updateBook,
    deleteBook,
    searchBooks,
    getBooksByCategory,
    getBooksByPriceRange,
    getBooksByRating,
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
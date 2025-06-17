import { books, categories, getFeaturedBooks, getBooksByCategory, getBookById, searchBooks } from '../data/books';

class BookService {
  // Lấy tất cả sách
  getAllBooks() {
    return books;
  }

  // Lấy sách nổi bật
  getFeaturedBooks() {
    return getFeaturedBooks();
  }

  // Lấy sách theo danh mục
  getBooksByCategory(category) {
    return getBooksByCategory(category);
  }

  // Lấy sách theo ID
  getBookById(id) {
    return getBookById(id);
  }

  // Tìm kiếm sách
  searchBooks(query) {
    return searchBooks(query);
  }

  // Lấy tất cả danh mục
  getAllCategories() {
    return categories;
  }

  // Thêm sách mới
  addBook(book) {
    const newBook = {
      ...book,
      id: books.length + 1,
      rating: 0,
      reviews: 0,
      bestseller: false,
      discount: 0,
      stock: 0
    };
    books.push(newBook);
    return newBook;
  }

  // Cập nhật thông tin sách
  updateBook(id, updatedBook) {
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
      books[index] = { ...books[index], ...updatedBook };
      return books[index];
    }
    return null;
  }

  // Xóa sách
  deleteBook(id) {
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
      books.splice(index, 1);
      return true;
    }
    return false;
  }

  // Lấy sách theo giá
  getBooksByPriceRange(min, max) {
    return books.filter(book => book.price >= min && book.price <= max);
  }

  // Lấy sách theo đánh giá
  getBooksByRating(minRating) {
    return books.filter(book => book.rating >= minRating);
  }

  // Lấy sách đang giảm giá
  getDiscountedBooks() {
    return books.filter(book => book.discount > 0);
  }

  // Lấy sách mới nhất
  getLatestBooks(limit = 5) {
    return [...books]
      .sort((a, b) => b.publishedYear - a.publishedYear)
      .slice(0, limit);
  }

  // Lấy sách bán chạy nhất
  getBestSellingBooks(limit = 5) {
    return [...books]
      .sort((a, b) => b.reviews - a.reviews)
      .slice(0, limit);
  }
}

export default new BookService(); 
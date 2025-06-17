import books, { categories } from '../data/books';

class BookService {
  // Lấy tất cả sách
  getAllBooks() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(books);
      }, 500);
    });
  }

  // Lấy sách nổi bật
  getFeaturedBooks() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const featuredBooks = books.filter(book => book.bestseller);
        resolve(featuredBooks);
      }, 500);
    });
  }

  // Lấy sách theo danh mục
  getBooksByCategory(category) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredBooks = books.filter(book => book.category === category);
        resolve(filteredBooks);
      }, 500);
    });
  }

  // Lấy sách theo ID
  getBookById(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const book = books.find(book => book.id === id);
        if (book) {
          resolve(book);
        } else {
          reject(new Error('Book not found'));
        }
      }, 500);
    });
  }

  // Tìm kiếm sách
  searchBooks(query) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const searchResults = books.filter(book => 
          book.title.toLowerCase().includes(query.toLowerCase()) ||
          book.author.toLowerCase().includes(query.toLowerCase())
        );
        resolve(searchResults);
      }, 500);
    });
  }

  // Lấy tất cả danh mục
  getAllCategories() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(categories);
      }, 500);
    });
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
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredBooks = books.filter(book => 
          book.price >= min && book.price <= max
        );
        resolve(filteredBooks);
      }, 500);
    });
  }

  // Lấy sách theo đánh giá
  getBooksByRating(minRating) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredBooks = books.filter(book => book.rating >= minRating);
        resolve(filteredBooks);
      }, 500);
    });
  }

  // Lấy sách đang giảm giá
  getDiscountedBooks() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const saleBooks = books.filter(book => book.discount > 0);
        resolve(saleBooks);
      }, 500);
    });
  }

  // Lấy sách mới nhất
  getLatestBooks(limit = 5) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const sortedBooks = [...books]
          .sort((a, b) => b.publishedYear - a.publishedYear);
        resolve(sortedBooks.slice(0, limit));
      }, 500);
    });
  }

  // Lấy sách bán chạy nhất
  getBestSellingBooks(limit = 5) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const sortedBooks = [...books]
          .sort((a, b) => b.reviews - a.reviews);
        resolve(sortedBooks.slice(0, limit));
      }, 500);
    });
  }
}

export default new BookService(); 
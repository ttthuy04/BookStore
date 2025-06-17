export const books = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 12.99,
    image: 'https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg',
    description: 'A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.',
    rating: 4.5,
    reviews: 128,
    category: 'Fiction',
    bestseller: true,
    discount: 15,
    stock: 50,
    publishedYear: 1925,
    language: 'English',
    pages: 240,
    isbn: '978-0743273565'
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    price: 9.99,
    image: 'https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg',
    description: 'The story of racial injustice and the loss of innocence in the American South.',
    rating: 4.8,
    reviews: 256,
    category: 'Fiction',
    bestseller: true,
    discount: 0,
    stock: 75,
    publishedYear: 1960,
    language: 'English',
    pages: 281,
    isbn: '978-0446310789'
  },
  {
    id: 3,
    title: '1984',
    author: 'George Orwell',
    price: 10.99,
    image: 'https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg',
    description: 'A dystopian novel set in a totalitarian society where critical thought is suppressed.',
    rating: 4.6,
    reviews: 189,
    category: 'Science Fiction',
    bestseller: false,
    discount: 10,
    stock: 60,
    publishedYear: 1949,
    language: 'English',
    pages: 328,
    isbn: '978-0451524935'
  }
];

export const categories = [
  'Fiction',
  'Non-Fiction',
  'Science Fiction',
  'Mystery',
  'Romance',
  'Biography',
  'History',
  'Science',
  'Technology',
  'Children'
];

export const getFeaturedBooks = () => {
  return books.filter(book => book.bestseller);
};

export const getBooksByCategory = (category) => {
  return books.filter(book => book.category === category);
};

export const getBookById = (id) => {
  return books.find(book => book.id === id);
};

export const searchBooks = (query) => {
  const searchTerm = query.toLowerCase();
  return books.filter(book => 
    book.title.toLowerCase().includes(searchTerm) ||
    book.author.toLowerCase().includes(searchTerm) ||
    book.description.toLowerCase().includes(searchTerm)
  );
}; 
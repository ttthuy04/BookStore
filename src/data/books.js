import { BOOK_IMAGES } from '../constants/images';

const books = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D',
    description: 'A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.',
    rating: 4.5,
    reviews: 128,
    category: 'Fiction',
    bestseller: true,
    discount: 0,
    stock: 50,
    publishedYear: 1925,
    language: 'English',
    pages: 180,
    isbn: '978-0743273565',
    publisher: 'Scribner',
    publicationDate: '2004-09-30'
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D',
    description: 'The story of racial injustice and the loss of innocence in the American South.',
    rating: 4.8,
    reviews: 256,
    category: 'Fiction',
    bestseller: true,
    discount: 10,
    stock: 75,
    publishedYear: 1960,
    language: 'English',
    pages: 281,
    isbn: '978-0446310789',
    publisher: 'Grand Central Publishing',
    publicationDate: '1988-10-11'
  },
  {
    id: 3,
    title: '1984',
    author: 'George Orwell',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D',
    description: 'A dystopian social science fiction novel and cautionary tale.',
    rating: 4.6,
    reviews: 189,
    category: 'Fiction',
    bestseller: false,
    discount: 0,
    stock: 60,
    publishedYear: 1949,
    language: 'English',
    pages: 328,
    isbn: '978-0451524935',
    publisher: 'Signet Classic',
    publicationDate: '1961-01-01'
  },
  {
    id: 4,
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2t8ZW58MHx8MHx8fDA%3D',
    description: 'An epic high-fantasy novel and one of the best-selling books ever written.',
    rating: 4.9,
    reviews: 512,
    category: 'Fantasy',
    bestseller: true,
    discount: 15,
    stock: 50,
    publishedYear: 1954,
    language: 'English',
    pages: 1178,
    isbn: '978-0544003415',
    publisher: 'Mariner Books',
    publicationDate: '2012-09-18'
  },
  {
    id: 5,
    title: 'The Kite Runner',
    author: 'Khaled Hosseini',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2t8ZW58MHx8MHx8fDA%3D',
    description: 'A story of friendship, betrayal, and the price of loyalty.',
    rating: 4.7,
    reviews: 324,
    category: 'Fiction',
    bestseller: true,
    discount: 0,
    stock: 50,
    publishedYear: 2003,
    language: 'English',
    pages: 371,
    isbn: '978-1594631931',
    publisher: 'Riverhead Books',
    publicationDate: '2013-03-05'
  },
  {
    id: 6,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    price: 13.99,
    image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJvb2t8ZW58MHx8MHx8fDA%3D',
    description: 'A philosophical novel about a young shepherd\'s journey to find his personal legend.',
    rating: 4.4,
    reviews: 167,
    category: 'Fiction',
    bestseller: false,
    discount: 0,
    stock: 50,
    publishedYear: 1988,
    language: 'Portuguese',
    pages: 208,
    isbn: '978-0062315007',
    publisher: 'HarperOne',
    publicationDate: '2014-04-15'
  },
  {
    id: 7,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D',
    description: 'A romantic novel of manners set in early 19th century England.',
    rating: 4.6,
    reviews: 289,
    category: 'Romance',
    bestseller: true,
    discount: 0,
    stock: 50,
    publishedYear: 1813,
    language: 'English',
    pages: 432,
    isbn: '978-0141439518',
    publisher: 'Penguin Classics',
    publicationDate: '2002-12-31'
  },
  {
    id: 8,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D',
    description: 'A classic coming-of-age story about teenage alienation and loss of innocence.',
    rating: 4.3,
    reviews: 156,
    category: 'Fiction',
    bestseller: false,
    discount: 0,
    stock: 50,
    publishedYear: 1951,
    language: 'English',
    pages: 277,
    isbn: '978-0316769488',
    publisher: 'Little, Brown and Company',
    publicationDate: '1991-05-01'
  },
  {
    id: 9,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D',
    description: 'A fantasy novel about the adventures of Bilbo Baggins.',
    rating: 4.8,
    reviews: 423,
    category: 'Fantasy',
    bestseller: true,
    discount: 0,
    stock: 50,
    publishedYear: 1937,
    language: 'English',
    pages: 300,
    isbn: '978-0547928227',
    publisher: 'Mariner Books',
    publicationDate: '2012-09-18'
  },
  {
    id: 10,
    title: 'The Little Prince',
    author: 'Antoine de Saint-Exupéry',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2t8ZW58MHx8MHx8fDA%3D',
    description: 'A poetic tale about a young prince who visits various planets in space.',
    rating: 4.7,
    reviews: 198,
    category: 'Fiction',
    bestseller: false,
    discount: 0,
    stock: 50,
    publishedYear: 1943,
    language: 'French',
    pages: 111,
    isbn: '978-0156013987',
    publisher: 'Mariner Books',
    publicationDate: '2000-05-15'
  },
  {
    id: 11,
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2t8ZW58MHx8MHx8fDA%3D',
    description: 'A mystery thriller novel about a murder in the Louvre Museum.',
    rating: 4.2,
    reviews: 245,
    category: 'Thriller',
    bestseller: true,
    discount: 0,
    stock: 50,
    publishedYear: 2003,
    language: 'English',
    pages: 489,
    isbn: '978-0307474278',
    publisher: 'Anchor',
    publicationDate: '2009-03-31'
  },
  {
    id: 12,
    title: 'The Book Thief',
    author: 'Markus Zusak',
    price: 13.99,
    image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJvb2t8ZW58MHx8MHx8fDA%3D',
    description: 'A story about a young girl living in Nazi Germany during World War II.',
    rating: 4.6,
    reviews: 312,
    category: 'Historical Fiction',
    bestseller: false,
    discount: 0,
    stock: 50,
    publishedYear: 2005,
    language: 'English',
    pages: 552,
    isbn: '978-0375842207',
    publisher: 'Knopf Books for Young Readers',
    publicationDate: '2007-09-11'
  }
];

export default books;

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
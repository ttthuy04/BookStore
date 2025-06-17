# BookStore - React E-commerce Website

A modern e-commerce website for selling books, built with React and Material-UI.

## Features

- 🛍️ Browse and search books
- 📚 View detailed book information
- 🛒 Shopping cart functionality
- 💳 Checkout process
- 📱 Responsive design for all devices
- 🎨 Modern and clean UI with Material-UI

## Tech Stack

- React 18
- React Router v6
- Material-UI (MUI)
- SCSS for styling
- Context API for state management

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/bookstore.git
cd bookstore
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
src/
├── components/         # Reusable components
│   ├── Navbar/        # Navigation bar
│   └── Footer/        # Footer component
├── pages/             # Page components
│   ├── Home/         # Home page
│   ├── Books/        # Books listing page
│   ├── BookDetail/   # Book details page
│   ├── Cart/         # Shopping cart page
│   └── About/        # About page
├── context/          # Context providers
│   └── CartContext/  # Shopping cart context
├── styles/           # Global styles
│   └── common.scss   # Common styles
└── App.js           # Main application component
```

## Features in Detail

### Home Page
- Hero section with featured books
- Quick access to categories
- Special offers section

### Books Page
- Grid view of all books
- Search functionality
- Filter by categories
- Sort by price, popularity, etc.

### Book Detail Page
- Large book image
- Detailed information
- Add to cart functionality
- Related books suggestions

### Shopping Cart
- List of selected books
- Quantity adjustment
- Price calculation
- Checkout process

### About Page
- Company information
- Mission statement
- Contact details

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Material-UI for the component library
- React team for the amazing framework
- All contributors who have helped shape this project

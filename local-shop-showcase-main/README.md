# Keki Treats - Kenyan Bakery Website

**Project done by Irene Tipei**

## About This Project

This is a mini e-commerce website for Keki Treats, an authentic Kenyan bakery based in Nairobi. The website showcases our fresh pastries, artisan breads, and delicious baked goods.

## Features

### HTML Structure
- **Products Page (index.html)** - Showcases bakery items with images, descriptions, and prices in KES
- **About Page (about.html)** - Describes the bakery's history, values, and team
- **Contact Page (contact.html)** - Contact form to collect user details (name, email, message)
- Semantic HTML tags used throughout (header, nav, main, section, article, aside, footer)

### CSS Styling
- Consistent warm color scheme reflecting Kenyan bakery identity
- Custom typography using Cormorant Garamond (serif) and Lato (sans-serif)
- Hover effects and smooth transitions for visual engagement
- CSS Grid and Flexbox for responsive product layouts
- Light and dark mode support

### JavaScript Interactivity
- **Form Validation** - Checks that email contains "@" symbol
- **Shopping Cart** - Click "Add to Cart" to update the cart count (persists in localStorage)
- **Dynamic Greeting** - Displays "Good morning/afternoon/evening" based on time with today's date
- **Theme Toggle** - Switch between light mode and dark mode (preference saved)

## Technologies Used

- HTML5
- CSS3 (with CSS Variables, Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- Google Fonts

## How to Run

### Using VS Code with Live Server
1. Open the project folder in VS Code
2. Install the "Live Server" extension if not already installed
3. Right-click on `index.html` and select "Open with Live Server"
4. The website will open in your default browser

### Direct Browser
1. Simply double-click on `index.html` to open in your browser
2. Navigate between pages using the navigation menu

### GitHub Pages
1. Push the project to a GitHub repository
2. Go to Settings > Pages
3. Select the main branch as the source
4. Your site will be available at `https://yourusername.github.io/repository-name`

## Project Structure

```
keki-treats/
├── index.html          # Products/Home page
├── about.html          # About page
├── contact.html        # Contact page
├── css/
│   └── styles.css      # All styles
├── js/
│   ├── products.js     # Product data and rendering
│   ├── cart.js         # Shopping cart functionality
│   ├── theme.js        # Light/dark mode toggle
│   ├── main.js         # Main functionality (greeting, menu)
│   └── form-validation.js  # Contact form validation
├── src/
│   └── assets/         # Product and bakery images
└── README.md           # This file
```

## Contact

**Keki Treats Bakery**
- Address: Kenyatta Avenue, CBD, Nairobi, Kenya
- Phone: +254 722 123 456
- Email: hello@kekitreats.co.ke

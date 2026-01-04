/**
 * Products Data
 * Contains all bakery products with Kenyan pricing (KES)
 */

const products = [
    {
        id: 1,
        name: 'Butter Croissant',
        description: 'Flaky, buttery layers of perfection. Made fresh each morning with premium butter.',
        price: 250,
        image: 'src/assets/croissant.jpg',
        category: 'Pastries'
    },
    {
        id: 2,
        name: 'Artisan Bread',
        description: 'Crispy crust, soft interior. Traditional bread baked to golden perfection.',
        price: 300,
        image: 'src/assets/baguette.jpg',
        category: 'Breads'
    },
    {
        id: 3,
        name: 'Chocolate Éclair',
        description: 'Silky chocolate ganache on choux pastry filled with rich vanilla cream.',
        price: 350,
        image: 'src/assets/eclair.jpg',
        category: 'Pastries'
    },
    {
        id: 4,
        name: 'Pain au Chocolat',
        description: 'Buttery croissant dough wrapped around premium dark chocolate batons.',
        price: 280,
        image: 'src/assets/pain-chocolat.jpg',
        category: 'Pastries'
    },
    {
        id: 5,
        name: 'Fresh Fruit Tart',
        description: 'Buttery tart shell with vanilla pastry cream topped with seasonal fresh fruits.',
        price: 450,
        image: 'src/assets/fruit-tart.jpg',
        category: 'Desserts'
    },
    {
        id: 6,
        name: 'Cinnamon Roll',
        description: 'Soft, swirled pastry with cinnamon sugar, topped with cream cheese frosting.',
        price: 320,
        image: 'src/assets/cinnamon-roll.jpg',
        category: 'Pastries'
    }
];

/**
 * Format price in Kenyan Shillings
 * @param {number} price - Price in KES
 * @returns {string} Formatted price string
 */
function formatPrice(price) {
    return `KES ${price.toLocaleString()}`;
}

/**
 * Render all products to the grid
 */
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    grid.innerHTML = products.map((product, index) => `
        <article class="product-card" style="animation-delay: ${index * 0.1}s">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                <span class="product-category">${product.category}</span>
            </div>
            <div class="product-content">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">${formatPrice(product.price)}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        </article>
    `).join('');
}

/**
 * Get product by ID
 * @param {number} id - Product ID
 * @returns {object|undefined} Product object or undefined
 */
function getProductById(id) {
    return products.find(p => p.id === id);
}

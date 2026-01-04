/**
 * Shopping Cart Module
 * Handles cart functionality with localStorage persistence
 */

// Initialize cart from localStorage or empty array
let cart = JSON.parse(localStorage.getItem('kekiTreatsCart')) || [];

/**
 * Save cart to localStorage
 */
function saveCart() {
    localStorage.setItem('kekiTreatsCart', JSON.stringify(cart));
}

/**
 * Update cart count display
 */
function updateCartCount() {
    const countElements = document.querySelectorAll('#cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    countElements.forEach(el => {
        el.textContent = totalItems;
        
        // Add animation effect
        el.style.transform = 'scale(1.3)';
        setTimeout(() => {
            el.style.transform = 'scale(1)';
        }, 200);
    });
}

/**
 * Add product to cart
 * @param {number} productId - Product ID to add
 */
function addToCart(productId) {
    const product = getProductById(productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartCount();
    showToast(`${product.name} added to cart!`);
}

/**
 * Remove product from cart
 * @param {number} productId - Product ID to remove
 */
function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    
    if (index > -1) {
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
        } else {
            cart.splice(index, 1);
        }
        
        saveCart();
        updateCartCount();
    }
}

/**
 * Get cart total
 * @returns {number} Total price of all items in cart
 */
function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

/**
 * Clear entire cart
 */
function clearCart() {
    cart = [];
    saveCart();
    updateCartCount();
}

/**
 * Show toast notification
 * @param {string} message - Message to display
 */
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    if (!toast || !toastMessage) return;
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});

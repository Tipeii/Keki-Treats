/**
 * Form Validation Module
 * Handles contact form validation
 */

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email format
 */
function isValidEmail(email) {
    return email.includes('@') && email.includes('.');
}

/**
 * Show error message for a field
 * @param {string} fieldId - Field ID
 * @param {string} message - Error message
 */
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(fieldId + 'Error');
    
    if (field && errorEl) {
        field.classList.add('error');
        errorEl.textContent = message;
    }
}

/**
 * Clear error for a field
 * @param {string} fieldId - Field ID
 */
function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(fieldId + 'Error');
    
    if (field && errorEl) {
        field.classList.remove('error');
        errorEl.textContent = '';
    }
}

/**
 * Validate the contact form
 * @returns {boolean} True if form is valid
 */
function validateForm() {
    let isValid = true;
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Clear previous errors
    clearError('name');
    clearError('email');
    clearError('message');
    
    // Validate name
    if (name === '') {
        showError('name', 'Please enter your name');
        isValid = false;
    } else if (name.length < 2) {
        showError('name', 'Name must be at least 2 characters');
        isValid = false;
    }
    
    // Validate email
    if (email === '') {
        showError('email', 'Please enter your email address');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('email', 'Please enter a valid email address (must contain @)');
        isValid = false;
    }
    
    // Validate message
    if (message === '') {
        showError('message', 'Please enter your message');
        isValid = false;
    } else if (message.length < 10) {
        showError('message', 'Message must be at least 10 characters');
        isValid = false;
    }
    
    return isValid;
}

/**
 * Set up form validation
 */
function setupFormValidation() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm()) {
                // Form is valid - show success message
                showToast('Message sent successfully! We\'ll get back to you soon.');
                
                // Reset form
                form.reset();
                
                // Clear any remaining error states
                clearError('name');
                clearError('email');
                clearError('message');
            }
        });
        
        // Real-time validation on blur
        ['name', 'email', 'message'].forEach(fieldId => {
            const field = document.getElementById(fieldId);
            
            if (field) {
                field.addEventListener('blur', () => {
                    validateField(fieldId);
                });
                
                field.addEventListener('input', () => {
                    clearError(fieldId);
                });
            }
        });
    }
}

/**
 * Validate a single field
 * @param {string} fieldId - Field ID to validate
 */
function validateField(fieldId) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    
    const value = field.value.trim();
    
    switch (fieldId) {
        case 'name':
            if (value === '') {
                showError('name', 'Please enter your name');
            } else if (value.length < 2) {
                showError('name', 'Name must be at least 2 characters');
            } else {
                clearError('name');
            }
            break;
            
        case 'email':
            if (value === '') {
                showError('email', 'Please enter your email address');
            } else if (!isValidEmail(value)) {
                showError('email', 'Please enter a valid email address (must contain @)');
            } else {
                clearError('email');
            }
            break;
            
        case 'message':
            if (value === '') {
                showError('message', 'Please enter your message');
            } else if (value.length < 10) {
                showError('message', 'Message must be at least 10 characters');
            } else {
                clearError('message');
            }
            break;
    }
}

// Initialize form validation when DOM is ready
document.addEventListener('DOMContentLoaded', setupFormValidation);

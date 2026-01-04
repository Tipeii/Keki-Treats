/**
 * Theme Toggle Module
 * Handles light/dark mode switching with localStorage persistence
 */

/**
 * Initialize theme based on localStorage or system preference
 */
function initTheme() {
    const savedTheme = localStorage.getItem('kekiTreatsTheme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-mode');
    }
}

/**
 * Toggle between light and dark mode
 */
function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('kekiTreatsTheme', isDark ? 'dark' : 'light');
}

/**
 * Set up theme toggle button event listener
 */
function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
}

// Initialize theme immediately to prevent flash
initTheme();

// Set up event listener when DOM is ready
document.addEventListener('DOMContentLoaded', setupThemeToggle);

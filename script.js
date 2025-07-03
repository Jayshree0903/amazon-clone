// Search bar functionality
document.addEventListener('DOMContentLoaded', () => {

    const searchIcon = document.querySelector('.search-icon');
    const searchInput = document.querySelector('.search-input');
    const signInButton = document.querySelector('.sign-in button');
    const backToTop = document.querySelector('.foot-panel1');

    if (searchIcon && searchInput) {
        searchIcon.addEventListener('click', () => {
            const inputValue = searchInput.value.trim();
            if (inputValue) {
                alert(`You searched for: "${inputValue}"`);
            } else {
                alert('Please enter something to search.');
            }
        });
    }

    if (signInButton) {
        signInButton.addEventListener('click', () => {
            alert('Welcome! Please sign in to access your account.');
        });
    }

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

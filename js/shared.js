// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target) && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
            }
        });
    }
});

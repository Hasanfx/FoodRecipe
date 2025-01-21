const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

// Function to check if the screen is smaller than medium size
function isSmallScreen() {
    return window.matchMedia("(max-width: 767px)").matches;
}

// Initialize the menu to be hidden on small screens
if (isSmallScreen()) {
    menu.classList.add('hidden');
} else {
    menu.classList.remove('hidden');  // Ensure it's visible on larger screens
}

// Event listener for the burger button
burger.addEventListener('click', () => {
    if (isSmallScreen()) {
        // Only toggle 'hidden' on small screens
        menu.classList.toggle('hidden');
    }
});

// Optional: Ensure the menu stays visible when resizing the window
window.addEventListener('resize', () => {
    if (isSmallScreen()) {
        menu.classList.add('hidden');
    } else {
        menu.classList.remove('hidden');
    }
});

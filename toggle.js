function toggleMenu() {
    const navMenu = document.querySelector("header nav ul");
    navMenu.classList.toggle("active");
}

// Add an event listener to the menu toggle button
document.querySelector(".menu-toggle").addEventListener("click", toggleMenu);
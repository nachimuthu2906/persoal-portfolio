function toggleMenu() {
    const navMenu = document.querySelector("header nav ul");
    navMenu.classList.toggle("active");
}

// Add an event listener to the menu toggle button
document.querySelector(".menu-toggle").addEventListener("click", toggleMenu);

// Close the menu when a link is clicked
document.querySelectorAll("header nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
        const navMenu = document.querySelector("header nav ul");
        navMenu.classList.remove("active");
    });
});
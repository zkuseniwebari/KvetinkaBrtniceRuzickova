// --- 1. Mobilní menu (Burger) ---
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li a'); 

// Kliknutí na burger
burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Zavření menu po kliknutí na odkaz
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav-active'); 
        burger.classList.remove('toggle');  
    });
});

// --- 2. Změna navigace při scrollování ---
window.addEventListener('scroll', () => {
    const header = document.querySelector('.navbar');
    // Pokud odscrolujeme více než 50px, přidáme třídu .scrolled
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// --- 3. Reveal Animace (postupné zobrazování prvků) ---
const revealElements = document.querySelectorAll('.reveal');

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Volitelné: přestat sledovat po zobrazení, aby se animace neopakovala
            // observer.unobserve(entry.target); 
        }
    });
};

// Intersection Observer nastavíme trochu citlivěji pro plynulejší efekt
const observer = new IntersectionObserver(revealCallback, {
    threshold: 0.1, 
    rootMargin: "0px 0px -50px 0px" // Spustí se, když je prvek 50px od spodu viewportu
});

revealElements.forEach(el => observer.observe(el));
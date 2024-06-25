
document.addEventListener("DOMContentLoaded", () => {
    const desc = document.querySelector('.desc2');

    function animate() {
        desc.style.right = '63%'; // Final position
        desc.style.transform = 'translateX(50%)'; // Center the div
    }

    // Delay the animation to allow the page to load fully
    setTimeout(animate, 100); // Adjust delay as needed
});


document.addEventListener("DOMContentLoaded", () => {
    const desc = document.querySelector('.desc1');

    function animate() {
        desc.style.left = '63%'; // Final position
        desc.style.transform = 'translateX(-50%)'; // Center the div
    }

    // Delay the animation to allow the page to load fully
    setTimeout(animate, 100); // Adjust delay as needed
});

document.addEventListener("DOMContentLoaded", () => {
    const desc = document.querySelector('.desc3');

    function animate() {
        desc.style.left = '63%'; // Final position
        desc.style.transform = 'translateX(-50%)'; // Center the div
    }

    // Delay the animation to allow the page to load fully
    setTimeout(animate, 100); // Adjust delay as needed
});

document.addEventListener("DOMContentLoaded", () => {
    const typingElement = document.querySelector('.tonglha');
    const text = typingElement.textContent.trim();
    typingElement.textContent = '';

    let charIndex = 0;

    function type() {
        if (charIndex < text.length) {
            typingElement.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(type, 100); // Ajustez la vitesse de frappe ici (en millisecondes)
        }
    }

    type();
});

document.addEventListener("DOMContentLoaded", () => {
    const typingElement = document.querySelector('.par');
    const lines = typingElement.getAttribute('data-lines');
    const lineHeight = parseFloat(window.getComputedStyle(typingElement).lineHeight);

    let currentLine = 0;
    let delay = 2000; // Délai initial avant de commencer

    function animateLines() {
        if (currentLine < lines) {
            const lineOffset = -(currentLine * lineHeight);
            typingElement.style.transform = `translateY(${lineOffset}px)`;
            currentLine++;
            setTimeout(animateLines, delay);
        }
    }

    setTimeout(animateLines, delay); // Commencer l'animation après un délai initial
});

// Sélection du bouton
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Écouter le défilement de la fenêtre
window.addEventListener("scroll", () => {
    // Afficher le bouton quand on défile jusqu'à une certaine position
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

// Écouter le clic sur le bouton pour remonter en haut
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Pour un défilement fluide
    });
});



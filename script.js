// Import des constantes
const menu = document.querySelector("#menu");
const navlinks = document.querySelector("#navlinks");

// Déclaration et Exécution  des fonctions

menu.addEventListener("click", () => {
    navlinks.classList.toggle("small");
})


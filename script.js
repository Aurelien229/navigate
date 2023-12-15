/*
*/
// Sélectionner la balise <ol>
let olElement = document.querySelector('ol');

// Sélectionner le dernier enfant de <ol>
let lastChild = olElement.lastElementChild;

// Déplacer le dernier enfant au début de la liste
olElement.insertBefore(lastChild, olElement.firstChild);

// Sélectionner tous les éléments <section>
let sections = document.querySelectorAll('main section');

// Vérifier s'il y a au moins 3 sections
if (sections.length >= 3) {
// Récupérer les <h2> des sections 2 et 3
let h2Section2 = sections[1].querySelector('h2');
let h2Section3 = sections[2].querySelector('h2');

// Échanger les textes des h2 pour échanger leur contenu
let temp = h2Section2.textContent;
h2Section2.textContent = h2Section3.textContent;
h2Section3.textContent = temp;
}

let lastSection = document.querySelector('section:last-child');
lastSection.parentNode.removeChild(lastSection);

/*
*/
// Sélectionner la balise <ol>
let olElement = document.querySelector('ol');

// Sélectionner le dernier enfant de <ol>
let lastChild = olElement.lastElementChild;

// Déplacer le dernier enfant au début de la liste
olElement.insertBefore(lastChild, olElement.firstChild);


// Sélectionner les balises <h2> des troisième et deuxième sections
let h2ThirdSection = document.querySelector('section:nth-child(3) h2');
let h2SecondSection = document.querySelector('section:nth-child(2) h2');

// Déplacer les <h2> entre les sections
h2ThirdSection.parentNode.insertBefore(h2ThirdSection, document.querySelector('section:nth-child(2)'));
h2SecondSection.parentNode.insertBefore(h2SecondSection, document.querySelector('section:nth-child(3)'));


// Sélectionner la dernière section
let lastSection = document.querySelector('section:last-child');

// Supprimer la dernière section
lastSection.parentNode.removeChild(lastSection);

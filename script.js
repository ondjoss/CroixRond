const statut = document.querySelector("h2");

let jeuActif = true;
let joueurActif = "X";
let etatjeu = ["", "", "", "", "", "", "", "", ""];

const conditionVictoire = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const gagne = () => `Le joueur ${joueurActif} a gagné`;
const egalite = () => "Egalité";
const tourjoueur = () => `C'est au tour du joueur ${joueurActif}`;

statut.innerHTML = tourjoueur();
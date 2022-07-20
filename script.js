
const statut = document.querySelector("h2");

let jeuActif = true;
let joueurActif = "X";
let etatJeu = ["", "", "", "", "", "", "", "", ""];

const conditionsVictoires = [
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
const tourJoueur = () => `C'est au tour du joueur ${joueurActif}`;

statut.innerHTML = tourJoueur();


document.querySelectorAll(".casse").forEach(casse => casse.addEventListener("click", gestionClicCasse));
document.querySelector("#recommencer").addEventListener("click", recommencer);


function gestionClicCasse () {
    const indexCasse = parseInt(this.dataset.index);
    
    if(etatJeu[indexCasse] !== "" || !jeuActif) {
        return;
    }

    etatJeu[indexCasse] = joueurActif;
    this.innerHTML = joueurActif;

    verificationVictoire();
}

function verificationVictoire(){

    let tourGagnant = false;

    for(let conditionVictoire of conditionsVictoires){
        let val1 = etatJeu[conditionVictoire[0]];
        let val2 = etatJeu[conditionVictoire[1]];
        let val3 = etatJeu[conditionVictoire[2]];

        if(val1 === "" || val2 === "" || val3 === ""){
            continue;
        }
        if(val1 === val2 && val2 === val3){
            tourGagnant = true;
            break;
        }
    }

    if(tourGagnant){
        statut.innerHTML = gagne();
        jeuActif = false;
        return;
    }

    if(!etatJeu.includes("")){
        statut.innerHTML = egalite();
        jeuActif = false;
        return;
    }

    joueurActif = joueurActif === "X" ? "O" : "X";
    statut.innerHTML = tourJoueur();
}

function recommencer(){
    etatJeu = ["", "", "", "", "", "", "", "", ""];
    jeuActif = true;
    joueurActif = "X";
    statut.innerHTML = tourJoueur();
    document.querySelectorAll(".casse").forEach(casse => casse.innerHTML = "");
}
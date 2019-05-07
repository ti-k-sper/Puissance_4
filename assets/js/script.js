var numeroJoueur = 1;
var nbColonne = 5;
var nbLigne = 5;
var jeu = true;
var texte = "";
var plateauJeu = [];

for (i = 0; i < nbLigne; i++) {
	plateauJeu[i] = [];
}
//console.log(plateauJeu);

function newGame(){
	for (i = 0; i < nbLigne; i++) {
		for (j = 0; j < nbColonne; j++) {
			plateauJeu[0][0];
			}
		}
	numeroJoueur = 1;
	afficheTexteAnnonce("Le jeu commence! C'est au tour du joueur");
	jeu = true;
	creerTableau();
}

function afficheTexteAnnonce(texte){
	var texte = innerHtml(document.getElementById('texteAnnonce'));
}

function nomDujoueur(numeroJoueur){
	if(numeroJoueur == 1){
		print('rouge');
	}else{
		print('bleu');
	}
}

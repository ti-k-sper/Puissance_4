var numeroJoueur = 1;
var nbColonne = 5;
var nbLigne = 5;
var jeu = true;
var texte = "";
var plateauJeu = [];

for (i = 0; i < nbLigne; i++) {
	plateauJeu[i] = new Array();
}
//console.log(plateauJeu);

function newGame(){
	for (i = 0; i < nbLigne; i++) {
		for (j = 0; j < nbColonne; j++) {
			plateauJeu[i][j] = 0;
			}
		}
	numeroJoueur = 1;
	afficheTexteAnnonce("Le jeu commence! C'est au tour du joueur");
	jeu = true;
	//creerTableau();
	//console.log('fin');
}

function afficheTexteAnnonce(texte){
	var eleDiv = document.getElementById('texteAnnonce');
	eleDiv.innerHTML = texte;
}

function nomDujoueur(numeroJoueur){
	if(numeroJoueur == 1){
		print('rouge');
	}else{
		print('bleu');
	}
}

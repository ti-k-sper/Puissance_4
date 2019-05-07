var joueur = 1;
var nbColonne = 5;
var nbLigne = 5;
var jeu = true;
var texte = "";
var plateauJeu = [];

for (i = 0; i < nbLigne; i++) {
	plateauJeu[i] = new Array();
}

function newGame(){
	for (i = 0; i < nbLigne; i++) {
		for (j = 0; j < nbColonne; j++) {
			plateauJeu[i][j] = 0;
			}
		}
	joueur = 1;
	afficheTexteAnnonce("Le jeu commence! C'est au tour du joueur " + nomDujoueur(joueur));
	jeu = true;
	creerTableau();
}

function afficheTexteAnnonce(pTexte){
	var eleDiv = document.getElementById('texteAnnonce');
	eleDiv.innerHTML = pTexte;
}

function nomDujoueur(pNumeroJoueur){
	if(pNumeroJoueur == 1){
		return('rouge');
	}else{
		return('bleu');
	}
}

function creerTableau(){
	<table> = texte;
	for (i = 0; i < nbLigne; i++) {
		texte = texte + <tr>;
		for (j = 0; j < nbColonne; j++) {
			texte = texte + <td onclick="detecteClick(j)" id="i-j">;
			if(plateauJeu[i][j] == 1){
				texte = texte + <div class="joueur1">;
			}
			if(plateauJeu[i][j] == 2){
				texte = texte + <div class="joueur2">;
			}
			texte = texte + </td>;
		}
		texte = texte + </tr>;
	texte = texte + </table>;
	texte.innerHTML = document.getElementById('puissanceQuatre');
	}
}
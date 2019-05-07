var joueur = 1;
var nbColonne = 5;
var nbLigne = 5;
var jeu = true;
var texte = "";
var plateauJeu = [];

for (i = 0; i < nbLigne; i++) {
	plateauJeu[i] = [];
}

newGame();

function newGame(){
	for (var i = 0; i < nbLigne; i++) {
		for (var j = 0; j < nbColonne; j++) {
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
	texte = '<table>';
	for (i = 0; i < nbLigne; i++) {
		texte += '<tr>';
		for (j = 0; j < nbColonne; j++) {
			texte += '<td onclick="detecteClick('+j+')" id="'+i+'-'+j+'">';
			if(plateauJeu[i][j] == 1){
				texte += '<div class="joueur1">';
			}else if(plateauJeu[i][j] == 2){
				texte += '<div class="joueur2">';
			}
			texte += '</td>';
		}
		texte += '</tr>';
	}
	texte += '</table>';
	tableau = document.getElementById('puissanceQuatre');
	tableau.innerHTML = texte;
}

function detecteClick(j){
	if(verifPosition(j) == true && jeu == true){
		var ligneEnCours = poseJeton(j);//numéro de la ligne en cours
		var verifEnd = puissance4(ligneEnCours, j, 0, 0);
		if(verifEnd == true){
			jeu = false;
			afficheTexteAnnonce("Le joueur " + nomDujoueur(joueur) + " à gagner la partie!!!");
		}else if(joueur == 1){
			joueur = 2;
		}else{
			joueur = 1;
		}
		afficheTexteAnnonce("C'est au tour du joueur " + nomDujoueur(joueur));
	}
}

function verifPosition(j){
	if(plateauJeu[0][j] == 0){
		return true;
	}else{
		return false;
	}
}

function poseJeton(j){
	for (var i = nbLigne - 1; i >= 0; i--){
		if(plateauJeu[i][j] == 0){
			plateauJeu[i][j] = joueur;
			rafraicheTableau(i, j, joueur);
			return i;
		}
	}
}

function rafraicheTableau(x, y, i){
	document.getElementById(x+'-'+y).innerHTML = '<div class="joueur'+i+'"></div>';
}

function puissance4(ligne, colonne, l, c){
	console.log('valeur : '+ligne+' '+colonne+' / increment '+l+' '+c);
	return false;
}


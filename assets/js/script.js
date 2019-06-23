var joueur = 1;
var nbColonne = 5;
var nbLigne = 5;
var jeu = true;
var texte = "";
var plateauJeu = [];
var score = 5;

/*for (i = 0; i < nbLigne; i++) {
	plateauJeu[i] = [];
}*/

newGame();

function newGame(){
	this.nbLigne = this.nbColonne = prompt("Entrez la taille du plateau (nb de lignes et de colonnes) ?");
	if (parseInt(this.nbLigne) <= 0){
		this.nbLigne = this.nbColonne = 5;
	}
	if (parseInt(this.nbLigne) > 100){
		this.nbLigne = this.nbColonne = 100;
	}
	

	for (var i = 0; i < this.nbLigne; i++) {
		this.plateauJeu[i] = [];
	}
	// this : "celui du fichier", cad du contexte courant
	for (var i = 0; i < this.nbLigne; i++) {
		for (var j = 0; j < this.nbColonne; j++) {
			this.plateauJeu[i][j] = 0;
		}
	}
	this.joueur = 1;
	afficheTexteAnnonce("Le jeu commence ! c'est au tour du joueur " + nomDuJoueur(this.joueur));
	this.jeu = true;
	creerTableau();
}

function afficheTexteAnnonce(pTexte){
	document.getElementById('texteAnnonce').innerHTML = pTexte;
}

function nomDuJoueur(pNumeroJoueur){
	if(pNumeroJoueur == 1){
		return('rouge');
	}else{
		return('bleu');
	}
}

function creerTableau(){
	this.texte = '<table>';
	for (i = 0; i < this.nbLigne; i++) {
		this.texte += '<tr>';
		for (j = 0; j < this.nbColonne; j++) {
			this.texte += '<td onclick="detecteClick('+j+')" id="'+i+'-'+j+'">';
			if(this.plateauJeu[i][j] == 1){
				this.texte += '<div class="joueur1">';
			}else if(this.plateauJeu[i][j] == 2){
				this.texte += '<div class="joueur2">';
			}
			this.texte += '</td>';
		}
		this.texte += '</tr>';
	}
	this.texte += '</table>';
	document.getElementById('puissanceQuatre').innerHTML = this.texte ;
}

function detecteClick(j){
	if(verifPosition(j) == true && this.jeu == true){
		var ligneEnCours = poseJeton(j);//numéro de la ligne en cours
		var verifEnd = puissance4(ligneEnCours, j, 0, 0);
		if(verifEnd == true){
			this.jeu = false;
			//console.log("gagné");
			afficheTexteAnnonce("Le joueur " + nomDuJoueur(this.joueur) + " a gagné la partie!!!");
		}else{
			if(this.joueur == 1){
				this.joueur = 2;
			}else{
				this.joueur = 1;
			}
		afficheTexteAnnonce("C'est au tour du joueur " + nomDuJoueur(this.joueur));
		}
	}
}

function verifPosition(j){
	if(this.plateauJeu[0][j] == 0){
		return true;
	}else{
		return false;
	}
}

function poseJeton(j){
	for (var i = this.nbLigne - 1; i >= 0; i--){
		if(this.plateauJeu[i][j] == 0){
			this.plateauJeu[i][j] = this.joueur;
			rafraicheTableau(i, j, this.joueur);
			return i;
		}
	}
}

function rafraicheTableau(x, y, i){
	document.getElementById(x+'-'+y).innerHTML = '<div class="joueur'+i+'"></div>';
}

function puissance4(pLigne, pColonne, pL, pC){
	// condition primaire de la récursivité
	if (pL ==0 && pC == 0) {
		//console.log('initiale valeur : '+pLigne+' '+pColonne+' / increment '+pL+' '+pC);
		// ce 1er appel lance les appels récursifs
		// -1 pour decaler d'une colonne à gauche ou en haut (et ne pas revenir dans cette condition 0 0) 
		// 1 pour decaler d'une colonne à droite ou en bas (et ne pas revenir dans cette condition 0 0) 
		//horizontal
		var va = 1 + puissance4(pLigne, pColonne-1, 0, -1) + puissance4(pLigne, pColonne+1, 0, 1);
		//vertical
		var vb = 1 + puissance4(pLigne-1, pColonne, -1, 0) + puissance4(pLigne+1, pColonne, 1, 0);
		//diag gauche
		var vc = 1 + puissance4(pLigne-1, pColonne-1, -1, -1) + puissance4(pLigne+1, pColonne+1, 1, 1);
		//diag droite
		var vd = 1 + puissance4(pLigne-1, pColonne+1, -1, 1) + puissance4(pLigne+1, pColonne-1, 1, -1);
		//console.log(va,vb,vc,vd);
		if (va >= 4 || vb >= 4 || vc >= 4 || vd >= 4 ) {
			return true;
		} else {
			return false;
		}
	}
	// condition terminale
	if (pLigne < this.nbLigne && pLigne >= 0 && pColonne < this.nbColonne && pColonne >= 0){
		//console.log('recu valeur : '+pLigne+' '+pColonne+' / increment '+pL+' '+pC);
		if (this.plateauJeu[pLigne][pColonne] == this.joueur) {
			//console.log("ok");
			// boucle récursive avec le décalage d'entrée (-1 ou +1) pour voir les cases suivantes
			return 1 + puissance4(pLigne + pL, pColonne + pC, pL, pC);
		} else {
			//console.log("pas ok");
			return 0
		}
	}
	return 0;
}


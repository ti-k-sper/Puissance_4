var joueur=1,nbColonne=5,nbLigne=5,jeu=!0,texte="",plateauJeu=[],score=5;function newGame(){this.nbLigne=this.nbColonne=prompt("Entrez la taille du plateau (nb de lignes et de colonnes) ?"),this.score=prompt("Quel score faut-il atteindre pour gagner ?"),console.log(score),parseInt(this.nbLigne)<=0&&(this.nbLigne=this.nbColonne=5),parseInt(this.nbLigne)>100&&(this.nbLigne=this.nbColonne=100),parseInt(this.score)<=0&&(this.score=4),parseInt(this.score)>parseInt(this.nbLigne)&&(this.score=this.nbLigne),document.getElementById("score").innerHTML="Score à atteindre : "+this.score;for(var e=0;e<this.nbLigne;e++)this.plateauJeu[e]=[];for(e=0;e<this.nbLigne;e++)for(var t=0;t<this.nbColonne;t++)this.plateauJeu[e][t]=0;this.joueur=1,afficheTexteAnnonce("Le jeu commence ! c'est au tour du joueur "+nomDuJoueur(this.joueur)),this.jeu=!0,creerTableau()}function afficheTexteAnnonce(e){document.getElementById("texteAnnonce").innerHTML=e}function nomDuJoueur(e){return 1==e?"rouge":"bleu"}function creerTableau(){for(this.texte="<table>",i=0;i<this.nbLigne;i++){for(this.texte+="<tr>",j=0;j<this.nbColonne;j++)this.texte+='<td onclick="detecteClick('+j+')" id="'+i+"-"+j+'">',1==this.plateauJeu[i][j]?this.texte+='<div class="joueur1">':2==this.plateauJeu[i][j]&&(this.texte+='<div class="joueur2">'),this.texte+="</td>";this.texte+="</tr>"}this.texte+="</table>",document.getElementById("puissanceQuatre").innerHTML=this.texte}function detecteClick(e){1==verifPosition(e)&&1==this.jeu&&(1==puissance4(poseJeton(e),e,0,0)?(this.jeu=!1,afficheTexteAnnonce("Le joueur "+nomDuJoueur(this.joueur)+" a gagné la partie!!!")):(1==this.joueur?this.joueur=2:this.joueur=1,afficheTexteAnnonce("C'est au tour du joueur "+nomDuJoueur(this.joueur))))}function verifPosition(e){return 0==this.plateauJeu[0][e]}function poseJeton(e){for(var t=this.nbLigne-1;t>=0;t--)if(0==this.plateauJeu[t][e])return this.plateauJeu[t][e]=this.joueur,rafraicheTableau(t,e,this.joueur),t}function rafraicheTableau(e,t,n){document.getElementById(e+"-"+t).innerHTML='<div class="joueur'+n+'"></div>'}function puissance4(e,t,n,i){if(0==n&&0==i){var u=1+puissance4(e,t-1,0,-1)+puissance4(e,t+1,0,1),s=1+puissance4(e-1,t,-1,0)+puissance4(e+1,t,1,0),o=1+puissance4(e-1,t-1,-1,-1)+puissance4(e+1,t+1,1,1),r=1+puissance4(e-1,t+1,-1,1)+puissance4(e+1,t-1,1,-1);return u>=4||s>=4||o>=4||r>=4}return e<this.nbLigne&&e>=0&&t<this.nbColonne&&t>=0&&this.plateauJeu[e][t]==this.joueur?1+puissance4(e+n,t+i,n,i):0}newGame();
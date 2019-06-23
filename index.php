<?php
define('_ENV_', 'dev');
//putenv('mod_dev' = true);


/**
* retourne le nom du dossier
*
* @return string
*/
function uri($cible="")//:string
{
	$cibles = explode('.', $cible);
	if (count($cibles) == 2) {
		$ext = ['css', 'js'];
		if (in_array($cibles[1], $ext)) {
			if (_ENV_ != dev) {
				$mini = ".mini.";
			}else{
				$mini = ".";
			}
			$cible = $cibles[0].$mini.$cibles[1];
		}else{
			$cible = $cibles[0].".".$cibles[1];
		}
	}else{
		$cible = $cibles[0];
	}
	$uri = "http://".$_SERVER['HTTP_HOST']; 
	$folder = basename(dirname(__FILE__));
	return $uri.'/'.$folder.$cible;
}

?>
<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="utf-8">
	<title>Puissance 4 by yannick</title>
	<link rel="stylesheet" type="text/css" href=<?= uri("styles.css") ?> >
</head>
<body>
	<div id="score"></div>
	<div id="texteAnnonce"></div>
	<div id="puissanceQuatre"></div>
	<div id="chantBouton">
		<input type="button" name="reset" value="newGame" onclick="newGame()">
	</div>
	<script type="text/javascript" src=<?= uri("script.css") ?> ></script>
</body>
</html>
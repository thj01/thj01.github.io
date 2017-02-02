<!-- anden side i tabel - gange.php  -->

<meta charset="UTF-8" lang="da"/>

<?php

	$tabel = $_GET["tabel"]; // Få tabellen fra første side
					
	$faktor = mt_rand(2,10); // Vælg et tilfældigt tal mellem 2 og 10

	$resultat = $tabel*$faktor;	//resultat fra tabel * factor

?>

<h1>Hvad er <?php echo $tabel ?> &middot; <?php echo $faktor ?></h1> 

<form method="get" action="tabel03.php">

	<input type="number" name="svar" placeholder="Dit svar" autofocus required />
	<input type="hidden" name="tabel" value="<?php echo $tabel ?>" />
	<input type="hidden" name="resultat" value="<?php echo $resultat ?>" />
	<input type="hidden" name="faktor" value="<?php echo $faktor ?>" />
	<input type="submit" value="Svar"/>
			
</form>



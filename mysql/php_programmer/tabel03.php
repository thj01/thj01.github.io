<!-- tredie side i tabel - resultat.php  -->

<meta charset="UTF-8" lang="da"/>

<?php
 $tabel = $_GET["tabel"];
 $svar = $_GET["svar"];
 $faktor = $_GET["faktor"];
 $resultat = $_GET["resultat"];
 
 if ($svar == $resultat ) {
	 
		$evaluer = "<h1>RIGTIGT</h1>";
	 
	 }
	 
	 else {
		 
		 $evaluer = "forkert :(";
 
	}
	
?>

<p>Du svarede <?php echo $svar ?>, og det er <?php echo $evaluer ?> </p>

<p><?php echo $tabel ?> &middot; <?php echo $faktor ?> er <?php echo $resultat ?></p>

<form method="get" action="tabel02.php">

	<input type="hidden" name="tabel" value="<?php echo $tabel ?>" />
	<input type="submit" value="Prøv samme tabel igen"/ autofocus>
			
</form>

<hr>

<a href="tabel01.php"><button type="button">Jeg vil prøve en ny tabel</button></a>



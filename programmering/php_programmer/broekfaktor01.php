<!-- anden side i tabel - gange.php  -->

<meta charset="UTF-8" lang="da"/>

<?php
					
	$taeller = mt_rand(1,100); // Vælg et tilfældigt tal mellem 1 og 100
	
	$naevner = mt_rand (2,100) // Vælg et tilfældigt tal mellem 2 og 100 - det er ikke sjovt at dividere med 1....
	
?>

<h1>Kan brøken <?php echo $taeller ?> / <?php echo $naevner ?> forkortes?</h1> 

<form method="GET" >

	Ja - Den kan faktoriseres med : <input type="" name="svar" placeholder="Dit svar" autofocus required />
	
		<input type="hidden" name="tabel" value="<?php echo $tabel ?>" />
	<input type="hidden" name="resultat" value="<?php echo $resultat ?>" />
	<input type="hidden" name="faktor" value="<?php echo $faktor ?>" />
	<input type="submit" value="Svar"/>

</form>



<table class="">
	<thead>
		<tr>
			<th colspan="3">Primtal</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>2</td>
			<td>3</td>
			<td>5</td>
		</tr>
		<tr>
			<td>7</td>
			<td>11</td>
			<td>13</td>
		</tr>
		<tr>
			<td>17</td>
			<td>19</td>
			<td>23</td>
		</tr>
		<tr>
			<td>29</td>
			<td>31</td>
			<td>37</td>
		</tr>							
	</tbody>
</table>







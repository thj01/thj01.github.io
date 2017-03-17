<!-- Faktorisering af tal -->

<meta charset="UTF-8" lang="da"/>

<?php
					
	$tal = mt_rand(1,100); // Vælg et tilfældigt tal mellem 1 og 100
	$primtal= array(2,3,5,7,11,13,17,19,23,29,31)
	
?>

<h1>Kan tallet <?php echo $tal ?> faktoriseres?</h1> 


Ja - Den kan faktoriseres med : 
<form method="GET" >	
	<input type="number" name="number"/>
	<Input type="submit">
</form>


<?php

if (isset($_get["number"] )) {

if (in_array($number, $primtal)) { 
	
	echo "Det er et primtal"; 
	
	}
    
    else {
		
		echo "no prime"; 
		
		}

	}
?>






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







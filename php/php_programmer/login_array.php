<meta charset="UTF-8" lang="da"/>

<style>
table, td {
width: 400px;
text-align: center;

}
</style>



<form method="POST" >

	Brugernavn: <input placeholder="Dit brugernavn" type="text" name="username" required />
	Password: <input placeholder="Dit password" type="text" name="password" required />
	
	<input type="submit" name="submit"/>


</form>

<html>
	


<?php

	if (isset($_POST["submit"])) {
	
		$username = $_POST["username"];
		$password = $_POST["password"];
		
		//
		// Arrays kan også skrives som nedenfor, men det giver mening at skrive dem helt ud, da det er en liste der skal kunne editeres.
		//
		//$user_names = array("far", "mor","bror");
		//$user_pwd = array(123,456,789);
		
		$user_names[0] = "far";
		$user_names[1] = "mor";
		$user_names[2] = "bror";
		$user_names[3] = "søster";
		
		$user_pwd[0] = "123";
		$user_pwd[1] = "456";
		$user_pwd[2] = "789";
		$user_pwd[3] = "123";
		
		//Tæl antallet af elementer i de 2 arrays
		
		$user_names_check = count($user_names);
		$user_pwd_check = count($user_pwd);
	
		
		for ($i=0 ; $i <= $user_names_check ; $i++) {	
		
		if ( $username == $user_names[$i] AND $password == $user_pwd[$i] ) { $check_user = 1;}	
			
		}
				
		if ($check_user == 1) { echo "Du kommer ind!";}	
		
			else { echo "Du har ikke adgang";}
			
			
		
		echo "<hr>";
		
		
		echo "<h1>Indtastede værdier</h1>";
		
		echo "<br>Brugernavn: ".$username."<br> Password: ".$password;
		
		echo "<br><br>Antal brugere: ".$user_names_check . "<br> Antal Passwords: ".$user_pwd_check;
		
		
		echo "<br>result :".$check_user	;
				
		echo "<h2>Udskriv Arrrays</h2>";
		
		echo "
					
				<table>	
					<th>
						<td>Bruger</td>
						<td>Brugernavn</td>
						<td>Password:</td>
					</th>
				</table>";
		
		for ($i=0 ; $i < $user_names_check ; $i++) {
			
			echo "<table>
			
					<tr>
						<td>".$i."</td>
						<td>".$user_names[$i]."</td>
						<td>".$user_pwd[$i]."</td>
					</tr>
					
				</table>";
				
		}
		

		
	}	 



?>

</html>

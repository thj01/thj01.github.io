<meta charset="UTF-8" lang="da"/>

<form action="mail_recieve.php" method="POST" >

	Email: <input placeholder="Din e-mail"type="email" name="email" required />
	<input type="submit" name="submit"/>

</form>

<!--
<?php

	if (isset($_POST["submit"])) {
	
		$email = $_POST["email"];
		echo "<hr>Du angav mailen: ".$email;
		echo "<br>Er det korrekt";
	
	}	 

?>

-->

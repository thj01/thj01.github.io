<html>
<head>
<title>CALCULATOR USING PHP</title>	
<style type="text/css">              /*ADDING BACKGROUNG COLOUR ANS SETTINGS*/
    body{
	margin-left: 20%;
	margin-right:20%;
	border: 1px dotted gray;
	font-family: sans-serif;
        }
</style>
	
<head>
<body>

<center></br></br>

<form name="frm" action="form1.php" method="post"> 
 Enter Value: 
<input type="text" name="first" value= "<?php echo $_REQUEST['number']; 
 echo $_REQUEST['calculate'];echo $_REQUEST['result']; ?>"> </br></br>
</from>


<form name="frm" action="form1.php" method="post">
<input type="submit" name="number" value="1">
</from>

<form name="frm" action="form1.php" method="post">
 <input type="submit" name="number" value="2">
 </from>
 
 <form name="frm" action="form1.php" method="post">
<input type="submit" name="number" value="3"></br></br>
</from>
<form name="frm" action="form1.php" method="post">
<input type="submit" name="number" value="4">
</from>

<form name="frm" action="form1.php" method="post">
<input type="submit" name="number" value="5">
</from>

<form name="frm" action="form1.php" method="post">
<input type="submit" name="number" value="6"></br></br>
</from>

<form name="frm" action="form1.php" method="post">
<input type="submit" name="number" value="7">
</from>

<form name="frm" action="form1.php" method="post">
<input type="submit" name="number" value="8">
</from>


<form name="frm" action="form1.php" method="post">
<input type="submit" name="number" value="9"></br></br>
</from>

<form name="frm" action="form1.php" method="post">
<input type="submit" name="calculate" value="+">
</from>

<form name="frm" action="form1.php" method="post">
<input type="submit" name="calculate" value="0">
</from>

<form name="frm" action="form1.php" method="post">
<input type="submit" name="calculate" value="*"></br></br>
</from>
<form name="frm" action="form1.php" method="post">
<input type="submit" name="calculate" value="/">
</from>


<form name="frm" action="form1.php" method="post">
<input type="submit" name="calculate" value="-"></br></br>
</form>

<form name="frm" action="form1.php" method="post">
<input type="submit" value="=" name="result">

</form>

</center>
</body>
</html>

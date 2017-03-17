<meta charset="UTF-8" lang="da"/>
<?php

for ($i=3;$i<=20;$i++) {
	
$vinkelsum = 180 * ($i-2);
$enkeltvinkel = $vinkelsum/$i;

echo "I en ".$i."-kant er vinkelsummen ".$vinkelsum." og 
den enkelte vinkel er : ".$enkeltvinkel."<br>";

}

?>

<meta charset="UTF-8" lang="da"/>
<?php

$x = 0;
$y = 1;

for($i=0;$i<=20;$i++){

    $z = $x + $y;
    $f = $y / $x;
    
    echo $z." &rArr; &phi; &asymp; ".$f."</br>";

    $x=$y;
    $y=$z;
    }
    
?>

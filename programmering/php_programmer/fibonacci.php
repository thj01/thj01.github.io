<meta charset="UTF-8" lang="da"/>

<?php

$x = 0;
$y = 1;

for($i=0;$i<=20;$i++){

    $z = $x + $y;
    echo $z.", ";
    $x=$y;
    $y=$z;
    }
    
?>

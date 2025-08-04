<?php

function showDesc($m){
    //Caso base, debe detener la recursión para evitar el desbordamiento de pila
    if($m <= 0){
        return;
    }
    echo $m . "<br>";
    showDesc($m - 1);
}

function showAsc($m){
    //Caso base
    if($m >= 100){
        return;
    }
    echo $m . "<br>";
    showAsc($m + 1);
}

echo "<br><br>Contando de 100 a 1 de forma recursiva: <br><br>";
showDesc(100);
echo "<br><br>Contando de 1 a 100 de forma recursiva: <br><br>";
showAsc(1);
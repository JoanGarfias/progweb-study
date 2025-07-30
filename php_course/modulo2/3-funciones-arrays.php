<?php

$beers = [
    "Tecate",
    "El Jimador",
    "Corona oscura",
];

//Agregar un elemento a un array
$beers[] = "Corona clara";
array_push($beers, "2X Layer");


echo count($beers) . '<br>';
print_r($beers);

$beerPop = array_pop($beers);
echo "Eliminé " . $beerPop . '<br>';

echo "Buscaré la cerveza Tecate..." . '<br>';
if(in_array("Tecate", $beers) ){
    echo "Tecate está en el array" . '<br>';
}
else{
    echo "Tecate no está en el array" . '<br>';
}

$beers2 = [
    "Corolus 2",
    "Mezcal",
    "Johnie Walker",
];

echo "El array de cervezas 2 es: " . '<br>';
print_r($beers2);

echo "Fusionaré el array 1 y array 2 de cervezas" . '<br>';
$beersMerge = array_merge($beers, $beers2);
print_r($beersMerge);
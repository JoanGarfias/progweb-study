<?php


/*
 * Es una forma de crear objetos de forma dinámica sin necesidad de definir una clase especifica 
 */


echo "<br><br><br>Clase dinámica<br><br>";
$beer = new stdClass();

$beer->name = "Tecate";
$beer->price = 10.5;

print_r($beer);
echo "<br>";

echo "<br><br><br>Convertir objeto a array <br><br>";

//Casting a stdClass to an array
$arr = (array) $beer;
echo gettype($arr);
echo "<br>";
echo $arr['name'];

echo "<br><br><br>Convertir de array a objeto <br><br>";


$arrBeer = [
    "address" => "Calle del pepe",
    "country" => "México",
];

$objBeer = (object) $arrBeer;
echo $objBeer->address;
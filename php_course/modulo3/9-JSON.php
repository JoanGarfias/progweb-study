<?php

/**
 * JSON es un formato sencillo de entender
 * para el intercambio de datos
 */

class Beer {
    public string $name;
    public string $brand;
    public float $alcoholContent;
    public bool $isCraft;

    public function __construct(string $name, string $brand, float $alcoholContent, bool $isCraft) {
        $this->name = $name;
        $this->brand = $brand;
        $this->alcoholContent = $alcoholContent;
        $this->isCraft = $isCraft;
    }
}

$beer = new Beer("Corona premium", "Corona", 8.5, false);

echo "<br><br>Convertir de objeto PHP a JSON<br><br>";

$json = json_encode($beer);

echo $json;


echo "<br><br>Convertir de JSON a objeto PHP, por defecto lo convierte a un objeto stdClass<br><br>";

$jsonBeer = '
{"name":"Corona premium","brand":"Corona","alcoholContent":8.5,"isCraft":false}
';

$beerFromJson = json_decode($jsonBeer);
print_r($beerFromJson);


/** SI REQUEREMOS QUE LA DESERIALIZACIÓN SE HAGA A UN 
 * ARRAY ASOCIATIVO, DEBEMOS PASAR UN SEGUNDO PARÁMETRO A LA FUNCIÓN json_decode
 * 
 * $beerFromJson = json_decode($jsonBeer, true);
 * 
 * print_r($beerFromJson);
 * 
 * De esta forma, el resultado será un array asociativo en lugar de un objeto stdClass.
 */
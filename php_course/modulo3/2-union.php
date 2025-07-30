<?php

declare(strict_types = 1);

/**
 * UNION  permiten que un parámetro o retorno
 * puede ser de varios tipos
 */

class Persona{
    public string $nombre;
    public int|float $edad;

    public function __construct(
        string $nombre,
        int|float $edad){


        $this->nombre = $nombre;
        $this->edad = $edad;
    }
}

$pepe = new Persona("Pepe", 20);
$sech = new Persona("Sech", 24.88);

echo "Valores de pepe: <br>";
print_r($pepe);

echo "<br><br>Valores de sech: <br>";
print_r($sech);
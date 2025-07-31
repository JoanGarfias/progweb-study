<?php

/**
 * Las clases abstractas son moldes de otras clases
 * 
 * No se pueden crear objetos con estas clases abstractas.
 * Sirve más para arquitectura y diseño de software.
 * 
 * Para usar estas clases debemos tener muy bien pensado
 * el diseño del software.
 * 
 */

abstract class Product{
    protected string $name;
    protected float $price;

    //Solo es la estructura de la función, no se define el comportamiento en una clase abstracta.
    abstract public function calculatePrice(): float;

    public function getName(): string{
        return $this->name;
    }
}

/** ESTO NO SE PUEDE HACER
 * $product1 = new Product();
 */

//Con la clase Beer ahora si ya podemos crear objetos
class Beer extends Product{
    const TAX = 1.1;

    public function calculatePrice(): float{
        return $this->price * self::TAX;        
    }

    public function __construct(string $name, float $price){
        $this->name = $name;
        $this->price = $price;
    }
}

function showInfo(Product $product){
    echo $product->getName() . "<br> $" . $product->calculatePrice();
}

$beer = new Beer("Tecate", 20.5);
echo showInfo($beer);
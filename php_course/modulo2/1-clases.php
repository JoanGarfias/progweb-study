<?php

/**
 *  Una clase es una plantilla para crear objetos.
 * Un objeto es una instancia de una clase.
 * * Las clases pueden tener propiedades (variables) y métodos (funciones).
 * * Las propiedades pueden ser públicas, protegidas o privadas.
 * * Las propiedades públicas pueden ser accedidas desde fuera de la clase.
 * * Las propiedades protegidas solo pueden ser accedidas desde dentro de la clase o por clases que heredan de ella.
 * * Las propiedades privadas solo pueden ser accedidas desde dentro
 * 
 * Por defecto se tiene que pasar el orden de los parámetros en el constructor
 * pero se pueden utilizar los "named parameters" para poder pasarlos en el orden de queramos.
 * 
 */

//Para visualizar los errores en el navegador
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

class Persona {
    public $nombre = "";
    public $edad = 0;
    private $email = "";
    private $telefono;

    public function __construct($nombre, $edad, $email, $telefono = 0){
        $this->nombre = $nombre;
        $this->edad = $edad;
        $this->email = $email;
        $this->telefono = $telefono;
    }

    public function getEmail() {
        return $this->email;
    }

    public function getPhone(){
        return $this->telefono;
    }
}

// Creando los atributos con parametros definidos en el constructor
class Car {
    public function __construct(
        public $marca = "",
        public $modelo = "",
        public $year = 2020)
    {
        $this->marca = $marca;
        $this->modelo = $modelo;
        $this->year = $year;
    }
}

$person1 = new Persona("Joan", 25, "joanpab@pepe.com");

echo print_r($person1);
echo "<br>";
echo $person1->getEmail();

echo "<br><br>";

$personas = [
    new Persona("Carlos", 30, "carlos@pedsd.com"),
    new Persona("Maria K.", 23, "maria@psddsd.com", 9717296772),
    new Persona("Pedrito G.", 42, "pedritog@sech.pepe"),
];

foreach ($personas as $persona) {
    echo "<br>Nombre: {$persona->nombre}, Edad: {$persona->edad}, Email: {$persona->getEmail()}, Telefono: {$persona->getPhone()}";
}

$cars = [
    new Car(marca: "Toyota", modelo: "Corolla", year: 2021),
    new Car(year: 2020, marca: "Honda", modelo: "Civic"),
    new Car(modelo: "Model S", marca: "Tesla", year: 2022),
];

foreach($cars as $car){
    echo "<br>Marca: {$car->marca}, Modelo: {$car->modelo}, Año: {$car->year}";
}
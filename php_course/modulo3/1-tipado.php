<?php

// Usar tipado fuerte en PHP
declare(strict_types = 1);

/*
PHP a partir de la versión 7.4 permite declarar el tipo de datos 
en las propiedades y en los parámetros de los métodos.
*/

class Sale {
    public int $total;           // Propiedad tipada: solo acepta enteros.
    public string $date;         // Propiedad tipada: solo acepta strings.
    public static $count;        // Propiedad estática compartida por todas las instancias.
    public array $concepts = []; // Arreglo para almacenar objetos Concept.

    public function __construct(int $total, string $date){
        $this->total = $total;   // Se asigna el total de la venta.
        $this->date = $date;     // Se asigna la fecha de la venta.
        self::$count++;          // Se incrementa el contador estático.
    }

    // Método que solo acepta parámetros del tipo Concept
    public function addConcept(Concept $concept){
        $this->concepts[] = $concept;
    }
}

class Concept {
    public string $description;  // Descripción del concepto.
    public float $amount;        // Monto asociado al concepto.

    public function __construct(string $description, float $amount){
        $this->description = $description;
        $this->amount = $amount;
    }
}

// Crear un objeto Sale y un Concept asociado
$sale1 = new Sale(10, date('Y-m-d'));
$concept1 = new Concept("Chescos", 99.5);
$sale1->addConcept($concept1);

// Mostrar estructura del objeto
echo json_encode($sale1);

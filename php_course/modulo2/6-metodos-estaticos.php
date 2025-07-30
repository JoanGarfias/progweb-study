<?php

class Sale {
    public $total;        // Propiedad de instancia: cada objeto tiene su propio valor.
    public $date;         // Propiedad de instancia.
    public static $count; // Propiedad estática: compartida por todas las instancias.

    public function __construct($total, $date){
        $this->total = $total;   // Se asigna el total de la venta.
        $this->date = $date;     // Se asigna la fecha de la venta.
        self::$count++;          // Se incrementa el contador estático.
        $countTemp = self::$count;
        echo "Count: $countTemp <br>"; // Se imprime el valor actualizado del contador.
    }

    public static function reset(){
        self::$count = 0; // Se reinicia el contador a 0.
        echo "Se reseteo el contador";
    }
}

// Creación de 3 objetos Sale
$sale1 = new Sale(10.5, date('Y-m-d'));
$sale2 = new Sale(12.9, date('Y-m-d'));
$sale3 = new Sale(150.2, date('Y-m-d'));

// Llamada al método estático sin necesidad de un objeto
Sale::reset();

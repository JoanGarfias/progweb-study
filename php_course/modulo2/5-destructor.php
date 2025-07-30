<?php

class Sale{
    public $total;
    public $date;

    public function __construct($total, $date){
        $this->total = $total;
        $this->date = $date;
    }

    public function __destruct(){
        echo "Se ha elimindo el objeto";
    }

    public function createInvoice(){
        echo "Se crea la factura";
    }
}

$sale = new Sale(10.5, date('Y-m-d'));

/*$sale->total = 10.5;
$sale->date = date('Y-m-d');
*/

print_r($sale);
echo "<br>";
$sale->createInvoice();
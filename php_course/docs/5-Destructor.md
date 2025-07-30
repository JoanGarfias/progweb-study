```php
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
```

Es importante tomar en cuenta que el destructor siempre se ejecutará al final del script. 

Es muy util para cerrar conexiones a bases de datos y tambien para manejo de archivos.
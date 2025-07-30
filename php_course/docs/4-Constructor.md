```php
class Sale{
    public $total;
    public $date;

    public function __construct($total, $date){
        $this->total = $total;
        $this->date = $date;
    }

    public function createInvoice(){
        echo "Se crea la factura";
    }
}
```

> [!NOTE]
> En PHP no existe la sobrecarga del constructor, solo existe 1 constructor.
# Herencia en PHP

Se crea una clase padre y en la clase hijo se usa la palabra reservada "extends".

# Usando parent::__construct para llamar al constructor del padre

```php
class Persona {
    public $nombre;
    public $edad;
    public $salario;

    public function __construct($nombre, $edad, $salario = 0.0){
        $this->nombre = $nombre;
        $this->edad = $edad;
        $this->salario = $salario;
    }
}

class Programador extends Persona{
    public $teclado;
    public $mouse;

    public function __construct($teclado, $mouse, $nombre, $edad, $salario = 0.0){
        parent::__construct($nombre, $edad, $salario);
        $this->teclado = $teclado;
        $this->mouse = $mouse;
    }
}
```
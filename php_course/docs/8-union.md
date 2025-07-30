# Uso de **Union Types** en PHP 8

## 📌 ¿Qué son los *Union Types*?

En **PHP 8** se introdujeron los **Union Types**, que permiten que una variable, parámetro o valor de retorno pueda aceptar **más de un tipo de dato**.  
Se declaran utilizando el carácter `|` para separar los tipos permitidos.

---

## ✅ **Ejemplo práctico**

El siguiente ejemplo define una clase `Persona` donde la propiedad `$edad` puede ser **`int`** o **`float`**, gracias a los *Union Types*.

```php
<?php

declare(strict_types = 1);

/**
 * UNION TYPES permiten que un parámetro, propiedad o retorno
 * pueda aceptar varios tipos de datos (ej. int|float|string).
 */
class Persona {
    public string $nombre;
    public int|float $edad; // Puede ser entero o decimal

    public function __construct(string $nombre, int|float $edad) {
        $this->nombre = $nombre;
        $this->edad = $edad;
    }
}

$pepe = new Persona("Pepe", 20);       // int
$sech = new Persona("Sech", 24.88);    // float

echo "Valores de pepe:<br>";
print_r($pepe);
echo "Valores de sech:<br>";
print_r($sech);

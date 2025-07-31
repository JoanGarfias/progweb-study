# Curso de PHP – Clases Abstractas

Este ejemplo muestra el uso de **clases abstractas** en PHP, cómo se definen, para qué sirven y cómo se implementan mediante herencia.

---

## ¿Qué es una clase abstracta?

- **No se pueden instanciar directamente** (no se pueden crear objetos de ellas).
- **Sirven como molde o plantilla** para otras clases.
- **Definen la estructura**, pero no el comportamiento de los métodos abstractos.
- Se utilizan para diseñar una arquitectura de software más clara y organizada.

---

## Código de ejemplo

```php
<?php

abstract class Product {
    protected string $name;
    protected float $price;

    // Método abstracto: solo se define la firma, no el comportamiento.
    abstract public function calculatePrice(): float;

    public function getName(): string {
        return $this->name;
    }
}
```

# Implementación de una clase concreta

```php
class Beer extends Product {
    const TAX = 1.1;

    public function calculatePrice(): float {
        return $this->price * self::TAX;
    }

    public function __construct(string $name, float $price) {
        $this->name = $name;
        $this->price = $price;
    }
}
```

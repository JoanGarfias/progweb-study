# 📄 Documentación: Tipado Fuerte y Clases en PHP 7.4+

## ✅ Conceptos Clave

### 🔹 **Tipado Fuerte (`declare(strict_types=1)`)**
- La declaración `declare(strict_types=1);` obliga a que los valores pasados a funciones y métodos **coincidan exactamente** con el tipo especificado.
- Si se envía un valor de tipo incorrecto, PHP lanzará un error.
- El tipado fuerte está disponible a partir de PHP 7 y mejorado en PHP 7.4.

### 🔹 **Propiedades Tipadas (PHP 7.4+)**
- PHP 7.4 introduce **tipado en las propiedades de clase**.
- Se define con la sintaxis:  
```php
  public int $total;
  public string $date;
```

Si se intenta asignar un valor de tipo incorrecto, se lanza un error.
# Documentación sobre Namespaces en PHP

## ¿Qué es un Namespace?

Un **namespace** en PHP es un contenedor que permite organizar clases, interfaces, funciones y constantes, evitando conflictos de nombres entre diferentes partes del código o librerías externas.

PHP introdujo los namespaces a partir de la versión **5.3**.

---

## ¿Por qué usar Namespaces?

- Evitar **conflictos de nombres** cuando usamos múltiples librerías.
- Mejor **organización** del código en proyectos grandes.
- Permite **estructurar** las clases de forma lógica.

---

## Sintaxis Básica

```php
<?php
namespace MiProyecto;

class Usuario {
    public function saludar() {
        return "Hola desde MiProyecto\\Usuario";
    }
}
```

---

## Uso de Clases con Namespaces

```php
<?php
require 'Usuario.php';

$usuario = new \\MiProyecto\\Usuario();
echo $usuario->saludar();
```

---

## Sub-namespaces

```php
<?php
namespace MiProyecto\Modelos;

class Producto {
    public function info() {
        return "Soy un producto";
    }
}
```

```php
<?php
use MiProyecto\Modelos\Producto;

$producto = new Producto();
echo $producto->info();
```

---

## Alias de Namespaces con `use`

```php
<?php
use Libreria\Paquete\ClaseLarga as Clase;

$obj = new Clase();
```

---

## Funciones y Constantes en Namespaces

```php
<?php
namespace MiProyecto\Utils;

const VERSION = '1.0';

function debug($msg) {
    echo "[DEBUG] $msg";
}
```

```php
<?php
use function MiProyecto\Utils\debug;
use const MiProyecto\Utils\VERSION;

debug("Versión actual: " . VERSION);
```

---

## Namespace Global

```php
<?php
namespace MiProyecto;

echo \\strlen("Hola");
```

---

## Buenas Prácticas

1. **Un namespace por archivo.**
2. Seguir una convención, por ejemplo **PSR-4** para autoloading.
3. Usar `use` para evitar escribir rutas largas.

---

## Ejemplo Completo

```
src/
 └── Models/
     └── Usuario.php
index.php
```

**Usuario.php**
```php
<?php
namespace App\Models;

class Usuario {
    public function nombre() {
        return "Joan";
    }
}
```

**index.php**
```php
<?php
require 'src/Models/Usuario.php';

use App\Models\Usuario;

$u = new Usuario();
echo $u->nombre();
```

---

## Recursos

- [Documentación Oficial de PHP](https://www.php.net/manual/es/language.namespaces.php)
- [PSR-4: Autoloading Standard](https://www.php-fig.org/psr/psr-4/)

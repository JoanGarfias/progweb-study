# TypeScript Guards

En TypeScript, los **guards** (o **type guards**) son expresiones que permiten refinar el tipo de una variable dentro de una condición. Gracias a ellos, el compilador puede saber con mayor precisión qué operaciones son seguras de realizar sobre una variable que puede tener múltiples tipos.

## ¿Para qué sirven?

Cuando se trabaja con tipos compuestos (por ejemplo, `string | number`), TypeScript no puede saber de inmediato qué tipo específico tiene una variable en tiempo de ejecución. Los **guards** nos permiten indicarle al compilador qué tipo tiene una variable en un bloque determinado, mejorando la seguridad y reduciendo errores.

---

## Tipos comunes de guards

### 1. **`typeof` guard**

Usado para tipos primitivos como `string`, `number`, `boolean`, etc.

```ts
function imprimir(valor: string | number) {
  if (typeof valor === "string") {
    console.log("Texto en mayúsculas:", valor.toUpperCase());
  } else {
    console.log("Número formateado:", valor.toFixed(2));
  }
}
```

### 2. **`instanceof` guard**

Usado para instancias de clases

```ts
class Perro {
  ladrar() {
    console.log("¡Guau!");
  }
}

class Gato {
  maullar() {
    console.log("¡Miau!");
  }
}

function hacerSonido(animal: Perro | Gato) {
  if (animal instanceof Perro) {
    animal.ladrar();
  } else {
    animal.maullar();
  }
}
```

### 3. **`in` guard**
Verifica si una propiedad existe en un objeto.

```ts
type Admin = { rol: "admin"; permisos: string[] };
type Usuario = { rol: "usuario"; nombre: string };

function procesar(persona: Admin | Usuario) {
  if ("permisos" in persona) {
    console.log("Admin con permisos:", persona.permisos);
  } else {
    console.log("Usuario:", persona.nombre);
  }
}
```

### 4. Type guards personalizados (predicados de tipo)
Puedes crear tus propios guards con funciones que usan un type predicate (valor is Tipo).

```ts
type Pez = { nadar: () => void };
type Pájaro = { volar: () => void };

function esPez(animal: Pez | Pájaro): animal is Pez {
  return (animal as Pez).nadar !== undefined;
}

function mover(animal: Pez | Pájaro) {
  if (esPez(animal)) {
    animal.nadar();
  } else {
    animal.volar();
  }
}
```

### Conclusión

Los **type guards** son una herramienta poderosa en TypeScript para trabajar con tipos compuestos o personalizados, permitiendo un código más seguro y mantenible. Dominar su uso es fundamental para aprovechar al máximo el sistema de tipos de TypeScript.
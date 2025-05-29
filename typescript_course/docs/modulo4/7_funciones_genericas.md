# Funciones Genéricas en TypeScript

Las **funciones genéricas** en TypeScript permiten escribir funciones que trabajan con **tipos variables**, en lugar de tipos fijos. Esto permite **reutilizar código** manteniendo la seguridad de tipos.

---

## 🎯 ¿Por qué usar funciones genéricas?

- Para **escribir funciones reutilizables** sin perder la inferencia de tipos.
- Para **evitar duplicación** de código con diferentes tipos.
- Para mantener la **seguridad de tipos** en tiempo de compilación.

---

## 🔧 Sintaxis básica

```ts
function identidad<T>(valor: T): T {
  return valor;
}

const num = identidad<number>(10); // devuelve 10
const texto = identidad<string>("Hola"); // devuelve "Hola"
```

> `T` es un **parámetro de tipo**, puedes nombrarlo como quieras (`T`, `U`, `K`, etc.).

---

## 🤖 Inferencia automática de tipo

TypeScript usualmente **infiera el tipo automáticamente**:

```ts
const nombre = identidad("María"); // infiere T como string
```

---

## 🛠️ Ejemplo con arrays

```ts
function obtenerPrimero<T>(arr: T[]): T {
  return arr[0];
}

const primero = obtenerPrimero([1, 2, 3]); // number
const primeroStr = obtenerPrimero(["a", "b", "c"]); // string
```

---

## 🧩 Funciones genéricas con múltiples tipos

```ts
function combinar<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}

const resultado = combinar<string, number>("Edad", 25); // ["Edad", 25]
```

---

## 🧰 Restricciones con `extends`

Puedes **restringir los tipos permitidos** con `extends`:

```ts
function obtenerLongitud<T extends { length: number }>(valor: T): number {
  return valor.length;
}

obtenerLongitud("Hola"); // ✅
obtenerLongitud([1, 2, 3]); // ✅
obtenerLongitud(42); // ❌ Error: number no tiene length
```

---

## 📦 Genéricos en funciones flecha

```ts
const identidad = <T>(valor: T): T => valor;
```

---

## 🧠 Conclusión

Las funciones genéricas son una herramienta poderosa que permite crear **funciones flexibles, reutilizables y seguras**. Ayudan a escribir mejor código sin sacrificar la robustez de los tipos.

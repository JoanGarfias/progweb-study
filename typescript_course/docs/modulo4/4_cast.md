# Casting en TypeScript

El **casting** (o *type assertion*) en TypeScript se utiliza para indicarle al compilador que trate una variable como si fuera de otro tipo. Es útil cuando sabes más sobre el tipo de un valor que el propio compilador.

---

## 📌 ¿Por qué usar casting?

- Para acceder a propiedades específicas de un tipo cuando el compilador no puede inferirlas.
- Para ayudar al compilador en situaciones donde hay ambigüedad.
- Para trabajar con tipos más amplios (como `unknown` o `any`).

---

## 🧪 Sintaxis del casting

### 1. Usando `as`

```ts
let valor: unknown = "Hola TypeScript";
let longitud = (valor as string).length;
```

### 2. Usando los signos `<>` (no recomendado en JSX)

```ts
let valor: unknown = "Hola TypeScript";
let longitud = (<string>valor).length;
```

**⚠️ Nota:** La sintaxis con `<>` **no se puede usar en archivos `.tsx`** (JSX), ya que entra en conflicto con los elementos JSX.

---

## 🧱 Ejemplo con interfaces

```ts
interface Usuario {
  nombre: string;
  edad: number;
}

const objeto: any = { nombre: "Ana", edad: 30 };

const usuario = objeto as Usuario;
console.log(usuario.nombre); // "Ana"
```

---

## 🧩 Casting entre tipos relacionados

```ts
type A = { valor: string };
type B = { valor: string, extra: number };

const a: A = { valor: "Hola" };
const b = a as B; // TypeScript lo permite, pero debes tener cuidado
```

**⚠️ Precaución:** TypeScript no realiza verificación en tiempo de ejecución. El casting sólo afecta al sistema de tipos, no transforma los datos realmente.

---

## 🧰 Casos comunes de uso

### 1. Acceso a elementos DOM

```ts
const input = document.getElementById("miInput") as HTMLInputElement;
console.log(input.value);
```

### 2. Trabajar con `unknown` o `any`

```ts
function procesar(valor: unknown) {
  const texto = valor as string;
  console.log(texto.toUpperCase());
}
```

---

## ✅ Buenas prácticas

- Usa casting sólo cuando estés seguro del tipo.
- Prefiere `as Tipo` en lugar de `<>` por compatibilidad con JSX.
- Evita abusar del casting como forma de "engañar" al compilador.

---

## 🧠 Conclusión

El casting en TypeScript es una herramienta poderosa para ayudar al compilador a entender tus intenciones. Úsalo con cuidado para mantener la seguridad y legibilidad de tu código.
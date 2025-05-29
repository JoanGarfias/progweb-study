# Decoradores en TypeScript

Los **decoradores** en TypeScript son una funcionalidad avanzada que permiten **modificar el comportamiento de clases, métodos, propiedades o parámetros** en tiempo de ejecución. Son útiles para añadir funcionalidades reutilizables de forma declarativa.

> ⚠️ Los decoradores son una característica experimental. Debes activar `"experimentalDecorators": true` en tu `tsconfig.json`.

---

## 🎯 ¿Para qué sirven?

- Añadir **metadatos** a clases o métodos.
- Modificar comportamientos como **logs, validaciones o control de acceso**.
- Permitir la **inyección de dependencias**.
- Implementar patrones como **AOP** (programación orientada a aspectos).

---

## 🔧 Tipos de decoradores

### 1. Decorador de clase

```ts
function Log(constructor: Function) {
  console.log("Clase registrada:", constructor.name);
}

@Log
class Persona {
  constructor(public nombre: string) {}
}
```

### 2. Decorador de propiedad

```ts
function Constante(target: any, propertyKey: string) {
  Object.defineProperty(target, propertyKey, {
    writable: false,
  });
}

class Config {
  @Constante
  version = "1.0";
}
```

### 3. Decorador de método

```ts
function LogLlamada(target: any, method: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Llamando a ${method} con`, args);
    return original.apply(this, args);
  };
}

class Calculadora {
  @LogLlamada
  sumar(a: number, b: number) {
    return a + b;
  }
}
```

### 4. Decorador de parámetro

```ts
function LogParametro(target: any, method: string, index: number) {
  console.log(`Parámetro decorado en ${method} en posición ${index}`);
}

class Servicio {
  guardar(@LogParametro data: string) {
    console.log("Guardando:", data);
  }
}
```

---

## 🧱 Casos de uso reales

Los decoradores son muy comunes en:

- **Angular**: `@Component`, `@Injectable`
- **NestJS**: `@Controller`, `@Get`, `@Post`
- **TypeORM**: `@Entity`, `@Column`
- Librerías como **MobX**, **Class-validator**, etc.

---

## ✅ Ventajas

- Código más **modular** y **declarativo**.
- Permiten reutilizar lógica transversal.
- Separan preocupaciones del código principal.

---

## ⚠️ Consideraciones

- Son **experimentales** y aún no parte del estándar de JavaScript.
- Pueden hacer el código más difícil de seguir si se abusa de ellos.

---

## 🧠 Conclusión

Los decoradores permiten extender el comportamiento de clases y elementos de forma elegante y reutilizable. Aunque son avanzados, resultan muy poderosos cuando se entienden y aplican correctamente.
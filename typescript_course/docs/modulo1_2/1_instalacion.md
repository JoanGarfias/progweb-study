# Instalar Typescript

```bash
npm init

npm install typescript --save-dev
```

Para crear el tsconfig.json:
```
npx tsc --init
```

# Modificar el tsconfig.json para compilar JS en otra ruta

Dentro de tsconfig.json se debe modificar para que la salida de la compilación de TypeScript a JS sea en 

> dist/

Esto se hace cambiando el 

```typescript
"outDir": "./dist",
```

# Compilar TypeScript a JS

Solo se requiere ejecutar:

```bash
tsc
```

# Ejecutar un JS con Node

```bash
node dist/<nombre>.js
```
# Compilar archivos TypeScript en tiempo real

```bash
tsc --watch
```
Esto escuchará los cambios en tiempo real y compilará los TS a JS.
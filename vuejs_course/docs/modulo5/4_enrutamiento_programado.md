# Enrutamiento Programado

En lugar de tener `<RouterLink>` en las vistas para hacer enlaces, podemos hacerlo con JavaScript (Typescript).

Un ejemplo es en un componente global, como `AppHeader.vue`:

```typescript

    import {router} from 'vue-router';

    const router = useRouter();

    const redirectToMain = () => {
        router.push('/'); //Redirecciona al inicio
    };

```

Y dentro del template tener algo como:

```vue

<template>
    <!-- Código...-->

    <div>
        <a @click="redirectToMain">Inicio</a>
    </div>

</template>
```

> [!IMPORTANT]
> También se puede `enviar un objeto` dentro de `router.push`

Un ejemplo de esto es:

```typescript

    const redirectToMain = () => {
        router.push({
            name: 'user',
            params: {
                id: 2,
            }
        })
    };
```

> [!NOTE]
> Esto equivale a entrar a la página en `/user/2`, solo que esto es una redirección.
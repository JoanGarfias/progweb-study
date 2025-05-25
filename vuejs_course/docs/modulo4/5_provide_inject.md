# Provide-Inject una forma de usar "variables" globales en VueJS

Para utilizar variables globales y que puedan ser utilizados en cada uno de los componentes de la aplicación podemos hacer lo siguiente


> En App.vue ponemos:
```typescript
    import { provide } from 'vue' //esto es necesario

    const cart = ref<Product[]>([]); //esta es la variable que queremos que sea global
    provide('cart', cart); //Acá hacemos que cart sea global, su llave será 'cart'
```

> Ahora, en algún componente hijo como `AppHeader.vue` usaremos:

```typescript

    import {inject, computed} from 'vue';

    const cart = inject('cart') //Inject = inyectar, obtiene lo del padre
    const totalCart = computed(() => cart.value.length);
```

> Y ahora, para usar los valores de cart en el html (por ej: de `AppHeader.vue`) usaremos:

```vuejs
    cart: {{ totalCart }}
```
Para acceder a los productos podemos hacer un `v-for`.
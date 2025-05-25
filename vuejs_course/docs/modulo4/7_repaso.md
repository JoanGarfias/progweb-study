# ¿Cúal es la sintaxis para registrar componentes de forma global en Vue 3?

> App.vue

```vue
    import { createApp } from 'vue';
    impot App from './App.vue';
    import AppHeader from '@/components/AppHeader.vue';

    const app = createApp(app);

    app.component('AppHeader', AppHeader);
    app.mount('#app');

```

# ¿Qué metodos tenemos para pasar valores entre componentes?

1. Props
2. Emits
3. Provide-inject

# ¿Cómo pasamos template htmt para pasar template html a los componentes hijo?

1. Slots


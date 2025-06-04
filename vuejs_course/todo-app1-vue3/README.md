# Yet another TODO app

The sad truth - there are really no simple TODO's around anymore. The search yields "todo app with firebase", "todo app with XYZ state engine", "todo app with mongo and bootstrap", and many more nonsense. 

This is a simple Vue 3 Todo App, built as a plugin so I can showcase a Vue 3 app integration with Apostrophe CMS in upcoming demo.

"Simple" means no external dependencies, built on top of Composition API, styled with Tailwind. That's it. It uses https://github.com/jsbroks/vuex-typescript-todoapp as Vue components starting point, but it's heavily modified (the original uses old APIs) and simplified. 

## It's a Vite project...

...so just use the usual `npm run dev`, `npm run build`. 

## As a plugin

You can open the project in development as usual. However, the build exports a plugin and a component. 

Add it as a dependency in your package.json:

```
{
  "dependencies": {
    "@myovchev/todo-vue3": "github:myovchev/todo-vue3"
  }
}
```

To use it directly in your App as a component:

```html
// In your App
<script>
import { TodoApp } '@myovchev/todo-vue3';

// optionally add initial todos
const initialTodos = ref([{ id: 1, text: 'todo', completed: true }]);
</script>

<template>
  <TodoApp :todos={initialTodos}
</template>
```


Or register it as a plugin
```js
import { createApp } from 'vue';
import { TodoAppPlugin } '@myovchev/todo-vue3';

//css - or you can build it with your own Tailwind instance.
import '@/myovchev/todo-vue3/style.css';

app.use(TodoAppPlugin);
createApp(App).mount('#app');

```

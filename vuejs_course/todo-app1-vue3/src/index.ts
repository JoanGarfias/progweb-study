import type { Plugin } from 'vue';
import TodoApp from '@/TodoApp.vue';
import TodoComponent from '@/components/TodoComponent.vue';
import TodoItem from '@/components/TodoItem.vue';
import TodoStatusBar from '@/components/TodoStatusBar.vue';
import TodoActionBar from '@/components/TodoActionBar.vue';
import TodoList from '@/components/TodoList.vue';
// import './assets/index.css';

const TodoAppPlugin: Plugin = {
  install(app) {
    app.component('TodoApp', TodoApp);
    app.component('TodoComponent', TodoComponent);
    app.component('TodoStatusBar', TodoStatusBar);
    app.component('TodoItem', TodoItem);
    app.component('TodoActionBar', TodoActionBar);
    app.component('TodoList', TodoList);
  },
};

export type { ITodoItem } from '@/components/TodoComponent.vue';
export {
  TodoAppPlugin,
  TodoApp,
  TodoComponent,
  TodoItem,
  TodoActionBar,
  TodoStatusBar,
  TodoList,
};

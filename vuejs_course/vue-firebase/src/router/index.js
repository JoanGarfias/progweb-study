import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '../components/ProductList.vue';
import OrderList from '../components/OrderList.vue';
import CreateOrder from '../components/CreateOrder.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/create-order',
      name: 'create-order',
      component: CreateOrder,
    },
    {
      path: '/products',
      name: 'products',
      component: ProductList,
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrderList,
    },
  ],
})

export default router;
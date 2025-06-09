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
      props: route => ({ products: route.params.products }),
    },
    {
      path: '/products',
      name: 'products',
      component: ProductList,
      props: route => ({ products: route.params.products }),
      emits: ['add-product', 'addProduct'],
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrderList,
      props: route => ({ products: route.params.products }),
    },
  ],
})

export default router;
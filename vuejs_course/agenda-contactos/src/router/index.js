import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CreateContact from '@/views/CreateContact.vue';
import ContactList from '@/views/ContactList.vue';
import EditContact from '@/views/EditContact.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        name: 'inicio',
        component: HomeView,
    },
    {
        path: '/crear-contacto',
        name: 'crear-contacto',
        component: CreateContact,
    },
    {
        path: '/contactos',
        name: 'contactos',
        component: ContactList,
    },
    {
        path: '/editar-contacto/:id',
        name: 'editar-contacto',
        component: EditContact,
    }
  ],
})

export default router;
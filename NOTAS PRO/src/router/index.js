import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '@/views/Home.vue';
import Registro from '@/views/Registro.vue';
import Login from '@/views/Login.vue';
import Descargar from '@/views/Descargar.vue';



const routes = [
  { path: '/', component: Home },
  { path: '/registro', component: Registro },
  { path: '/login', component: Login },
  { path: '/descargar', component: Descargar },

];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;

import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layouts/Layout.vue'

import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue';
import Careers from '../views/Careers.vue';

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: 'home', name: 'Home', component: Home },
      { path: 'contact', name: 'Contact', component: Contact },
      { path: 'careers', name: 'Careers', component: Careers }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
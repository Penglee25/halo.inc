import { createRouter, createWebHistory } from "vue-router";
import Layout from "../layouts/Layout.vue";

import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import BuySpot from "../views/BuySpot.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        redirect: "home", // Automatically redirects '/' to '/home'
      },
      { path: "home", name: "Home", component: Home },
      { path: "contact", name: "Contact", component: Contact },
      { path: "buyspot", name: "Buy a spot", component: BuySpot },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

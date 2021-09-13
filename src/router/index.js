import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/main.vue";
import City from "../views/city.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/city",
    name: "city",
    component: City,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

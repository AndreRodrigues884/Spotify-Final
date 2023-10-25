import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LandPage from "../views/LandPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "default",
      component: LandPage,
    },
    {
      path: "/landpage",
      name: "landPage",
      component: LandPage,
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
  ],
});

export default router;

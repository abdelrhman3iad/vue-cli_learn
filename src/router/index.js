import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import ProfilePage from "@/views/ProfilePage.vue";
const routes = [
  {
    name: "home-page",
    path: "/",
    component: HomePage,
  },
  {
    name: "profile-page",
    path: "/profile-page",
    component: ProfilePage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

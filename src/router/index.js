import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      // route level code-splitting
      // this generates a separate chunk (Login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/Login.vue"),
      children: [
        {
          path: "",
          name: "login",
          meta: { title: "Login" },
          component: () => import("@/components/LoginLocal.vue"),
        },
        {
          path: "register",
          name: "register",
          meta: { title: "Create Account" },
          component: () => import("@/components/LoginRegister.vue"),
        },
        {
          path: "success",
          name: "login-success",
          meta: { title: "Success" },
          component: () => import("@/components/LoginSuccess.vue"),
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/group",
      name: "group",
      // route level code-splitting
      // this generates a separate chunk (Group.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/Group.vue"),
    },
  ],
});

export default router;

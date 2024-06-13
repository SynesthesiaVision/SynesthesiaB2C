import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("@/views/HomeVision.vue") },
  { path: "/sobre", component: () => import("@/views/AboutVision.vue") },
  { path: "/educacao", component: () => import("@/views/EducationVision.vue") },
  { path: "/noticias", component: () => import("@/views/NewsVision.vue") },
  { path: "/login", component: () => import("@/views/SignInVision.vue") },
  { path: "/cadastro", component: () => import("@/views/SignUpVision.vue") },
  { path: "/compra", component: () => import("@/views/MainVision.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

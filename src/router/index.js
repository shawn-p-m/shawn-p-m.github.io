import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "Home",

    component: () => import("../views/Home.vue"),
  },
  {
    path: "/whackamole",
    name: "Whackamole",

    component: () => import("../views/Whackamole.vue"),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router

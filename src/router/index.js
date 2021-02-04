import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/TicketHub",
    name: "Home",
    component: () => import("views/Home.vue"),
  },
  {
    path: "/profile/:inputedname",
    name: "Profile",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("views/Profile.vue"),
  },
  {
    path: "/signin",
    name: "Signin",
    component: () => import("views/Signin.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Trade from "../views/Trade.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/trade",
    name: "trade",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Trade
  }
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes
});

export default router;

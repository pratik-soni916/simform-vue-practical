import Vue from "vue";
import VueRouter from "vue-router";
import PickDate from "@/components/PickDate.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: PickDate,
  },
  {
    path: "/ingredients",
    name: "Ingredients",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "@/components/ListIngredients.vue"
      ),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;

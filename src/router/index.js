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
    children: [
      // UserHome will be rendered inside User's <router-view>
      // when /user/:id is matched
      {
        path: "/recipes",
        component: () =>
          import(
            /* webpackChunkName: "list-recipes" */ "@/components/ListRecipes.vue"
          ),
      },

      // ...other sub routes
    ],
    // route level code-splitting
    // this generates a separate chunk (list-ingredients.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "list-ingredients" */ "@/components/ListIngredients.vue"
      ),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;

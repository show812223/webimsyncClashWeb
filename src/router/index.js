import Vue from "vue";
import VueRouter from "vue-router";
// import MainLayout from "@/layouts/Main.vue";
import Home from "../views/Home.vue";
import FullPage from "../views/FullPage.vue";
// import store from "@/store";
// import { vuexOidcCreateRouterMiddleware } from "vuex-oidc";

Vue.use(VueRouter);

const routes = [
 
  {
    path: "",
    name: "Main",
    component: FullPage,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// router.beforeEach((to, from, next) => {
//   if (to.name == "Home" && to.query.code) {
//     next({ name: "oidcCallback", query: to.query });
//   }
//   vuexOidcCreateRouterMiddleware(store, "oidcStore");
//   next();
// });

export default router;

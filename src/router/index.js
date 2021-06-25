import Vue from "vue";
import VueRouter from "vue-router";
import MainLayout from "@/layouts/Main.vue";
import Home from "../views/Home.vue";
import FullPage from "../views/FullPage.vue";

// import FullPageRouters from "./FullPage"

// import store from "@/store";
// import { vuexOidcCreateRouterMiddleware } from "vuex-oidc";

Vue.use(VueRouter);

const routes = [
  
  {
    path: "",
    name: "",
    component: FullPage,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home
      }
    ]
  },

 
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

import Vue from "./libs/vue.esm.browser.js";
import VueRouter from "./libs/vue-router.esm.browser.js";
Vue.use(VueRouter);

import home from "./views/home.js";
import about from "./views/about.js";

export const router = new VueRouter({
  mode: "history",

  routes: [
    {
      name: "home",
      path: "/",
      component: home
    },

    {
      name: "about",
      path: "/about",
      component: about
    }
  ]
});
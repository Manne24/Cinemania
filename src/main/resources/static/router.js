import Vue from "./libs/vue.esm.browser.js";
import VueRouter from "./libs/vue-router.esm.browser.js";
Vue.use(VueRouter);

import cinemania from "./views/Cinemania.js";
import films from "./views/films.js";
import login from "./views/login.js";
import news from "./views/news.js";
import tickets from "./views/tickets.js";
import filmInfo from "./views/filmInfo.js";

export const router = new VueRouter({
  mode: "history",

  routes: [
    {
      name: "home",
      path: "/",
      component: cinemania
    },

    {
      name: "films",
      path: "/films",
      component: films
    },
    {
      path: '/films/:id',
      name: 'films',
      component: filmInfo
    },
    {
      name: "login",
      path: "/login",
      component: login
    },

    {
      name: "news",
      path: "/news",
      component: news
    },

    {
      name: "tickets",
      path: "/tickets",
      component: tickets
    }
  ]
});
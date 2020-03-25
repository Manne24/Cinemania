import Vue from "./libs/vue.esm.browser.js";
import VueRouter from "./libs/vue-router.esm.browser.js";
Vue.use(VueRouter);

import cinemania from "./views/Cinemania.js";
import films from "./views/films.js";
import login from "./views/login.js";
import signup from "./views/signUp.js";
import news from "./views/news.js";
import tickets from "./views/tickets.js";
import filmDetails from "./views/filmDetails.js";
import booking from "./views/booking.js";
import seats from "./views/seats.js";

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
      name: "filmDetails",
      path: "/films/:id",
      component: filmDetails
    },
    {
      name: "booking",
      path: "/booking",
      component: booking
    },
    {
      name: "login",
      path: "/login",
      component: login
    },
    {
      name: "signup",
      path: "/signup",
      component: signup
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
    },
    {
      name: "seats",
      path: "/seats",
      component: seats
    }
  ]
});

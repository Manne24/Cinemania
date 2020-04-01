import Vue from "./libs/vue.esm.browser.js";
import VueRouter from "./libs/vue-router.esm.browser.js";
Vue.use(VueRouter);

import cinemania from "./views/Cinemania.js";
import films from "./views/films.js";
import login from "./views/login.js";
import register from "./views/register.js"
import tickets from "./views/tickets.js";
import filmDetails from "./views/filmDetails.js";
import ticketType from "./views/ticketType.js";
import seats from "./views/seats.js";
import addFilmAdmin from './views/addFilmAdmin.js'
import myPage from "./views/myPage.js";

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
      name: "ticketType",
      path: "/tickettype",
      component: ticketType
    },
    {
      name: "login",
      path: "/login",
      component: login
    },
    {
      name: "register",
      path: "/register",
      component: register
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
    },
    {
      name: "myPage",
      path: "/mypage",
      component: myPage
    },
    {
      name: "addFilmAdmin",
      path: "/addFilmAdmin",
      component: addFilmAdmin
    },
  ]
});

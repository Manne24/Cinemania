import Vue from "./libs/vue.esm.browser.js";
import VueRouter from "./libs/vue-router.esm.browser.js";
Vue.use(VueRouter);

import cinemania from "./views/Cinemania.js";
import films from "./views/films.js";
import login from "./views/login.js";
import register from "./views/register.js";
import bokTickets from "./views/bokTickets.js";
import filmDetails from "./views/filmDetails.js";
import ticketChoice from "./views/ticketChoice.js";
import seats from "./views/seats.js";
import addFilmAdmin from "./views/addFilmAdmin.js";
import myPage from "./views/myPage.js";
import myTicket from "./views/myTicket.js";

export const router = new VueRouter({
  mode: "history",

  routes: [
    {
      name: "home",
      path: "/",
      component: cinemania,
    },

    {
      name: "films",
      path: "/films",
      component: films,
    },
    {
      name: "filmDetails",
      path: "/films/:id",
      component: filmDetails,
    },
    {
      name: "ticketChoice",
      path: "/bokTickets/ticketChoice/screening/:id",
      component: ticketChoice,
    },
    {
      name: "login",
      path: "/login",
      component: login,
    },
    {
      name: "register",
      path: "/register",
      component: register,
    },
    {
      name: "bokTickets",
      path: "/bokTickets",
      component: bokTickets,
    },
    {
      name: "seats",
      path: "/bokTickets/ticketChoice/screening/:id/seats",
      component: seats,
    },
    {
      name: "myPage",
      path: "/mypage",
      component: myPage,
    },
    {
      name: "myTicket",
      path: "/tickets/ticketChoice/screening/:id/seats/:id",
      component: myTicket
    },
    {
      name: "addFilmAdmin",
      path: "/addFilmAdmin",
      component: addFilmAdmin,
    },
  ],
});

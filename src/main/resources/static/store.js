import Vue from "./libs/vue.esm.browser.js";
import Vuex from "./libs/vuex.esm.browser.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    films: [],
    users: [],
    screenings: [],
    seats: [],
    user: null
  },
  mutations: {
    setFilms(state, films) {
      state.films = films;
    },

    setUsers(state, users) {
      state.users = users;
    },
    setScreenings(state, screenings) {
      state.screenings = screenings;
    },
    appendUser(state, user) {
      state.users.push(user);
    },
    setSeats(state, seats) {
      state.seats = seats;
    },
    setUser(state, user) {
      state.user = user
    }
  }
});

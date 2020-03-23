import Vue from "./libs/vue.esm.browser.js";
import Vuex from "./libs/vuex.esm.browser.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    films: [],
    users: []
  },

  mutations: {
    setFilms(state, films) {
      state.films = films
    },

    setUsers(state, users) {
      state.users = users
    },


    appendUser(state, user){
      state.users.push(user)
    }
  },
});
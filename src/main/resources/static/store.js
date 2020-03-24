import Vue from "./libs/vue.esm.browser.js";
import Vuex from "./libs/vuex.esm.browser.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    films: [],
    users: [],
    screenings: [
      {
        date:'01/04/2020',
        time:'16:00',
        film_id:'1',
        salon_id:'1',
      },
      {
        date:'02/04/2020',
        time:'20:00',
        film_id:'3',
        salon_id:'2',
      },
      {
        date:'03/04/2020',
        time:'16:00',
        film_id:'5',
        salon_id:'2',
      },
      {
        date:'04/04/2020',
        time:'20:00',
        film_id:'2',
        salon_id:'1',
      },
      {
        date:'05/04/2020',
        time:'16:00',
        film_id:'4',
        salon_id:'1',
      },
      {
        date:'06/04/2020',
        time:'20:00',
        film_id:'1',
        salon_id:'2',
      },

    ]
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
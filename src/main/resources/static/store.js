import Vue from "./libs/vue.esm.browser.js";
import Vuex from "./libs/vuex.esm.browser.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    films: [],
    users: [],
    screenings: [
      {
        screening_id: "1",
        date: "01/04/2020",
        time: "16:00",
        film_id: "1",
        salon_id: "1"
      },
      {
        screening_id: "2",
        date: "02/04/2020",
        time: "20:00",
        film_id: "3",
        salon_id: "2"
      },
      {
        screening_id: "3",
        date: "03/04/2020",
        time: "16:00",
        film_id: "5",
        salon_id: "2"
      },
      {
        screening_id: "4",
        date: "04/04/2020",
        time: "20:00",
        film_id: "2",
        salon_id: "1"
      },
      {
        screening_id: "5",
        date: "05/04/2020",
        time: "16:00",
        film_id: "4",
        salon_id: "1"
      },
      {
        screening_id: "6",
        date: "06/04/2020",
        time: "20:00",
        film_id: "1",
        salon_id: "2"
      }
    ],
    seats: [
        {
          number: "A1"
        },
        {
          number: "A2"
        },
        {
            number: "A3"
        },
        {
            number: "A4"
        },
        {
          number: "B1"
        },
        {
          number: "B2"
        },
        {
          number: "B3"
        },
        {
          number: "B4"
        },
        {
          number: "C1"
        },
        {
          number: "C2"
        },
        {
            number: "C3"
        },
        {
            number: "C4"
        },
        {
          number: "D1"
        },
        {
          number: "D2"
        },
        {
          number: "D3"
        },
        {
          number: "D4"
        }
      //[
      //  {
      //    number: "A1"
      //  },
      //  {
      //    number: "A2"
      //  }
      //],
      //[
      //  {
      //    number: "B1"
      //  },
      //  {
      //    number: "B2"
      //  }
      //]
    ]
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
    }
  }
});

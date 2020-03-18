import Vue from "./libs/vue.esm.browser.js";
import Vuex from "./libs/vuex.esm.browser.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    films: [{
      title: 'Blade Runner',
      trailer: 'link',
      description: 'sci-fi',
      length: '1:35:20'
    }
    ]
  },

  mutations: {

  },
});
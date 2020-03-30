import Vue from "./libs/vue.esm.browser.js";
import { store } from "./store.js";
import { router } from "./router.js";

import app from "./app.js";

//Filters
 Vue.filter('to-uppercase', (value) => {
  return value.toUpperCase()
})

Vue.use(window.vuelidate.default);

new Vue({
  store,
  router,
  render: h => h(app)
}).$mount("#app");
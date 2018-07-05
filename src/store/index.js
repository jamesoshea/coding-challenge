import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import BasketModule from "./modules/basket";

export default new Vuex.Store({
  modules: {
    basket: BasketModule,
  },
});

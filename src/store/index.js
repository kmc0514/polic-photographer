import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    onSale: false,
  },
  getters: {
    onSaleGetter(state) {
      return state.onSale;
    },
  },
});

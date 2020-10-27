import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions.js";
import getters from "./getters.js";
import mutations from "./mutations";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    id: "126",
    logIn: false, // 로그인 상태 기억하도록 설정
    onSale: false, // 판매 상태 기억하도록 설정
    reqList: [],
    authorInfo: null,
    photoList: [],
  },
  getters,
  actions,
  mutations,
});

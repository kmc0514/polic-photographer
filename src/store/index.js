import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    logIn: false, // 로그인 상태 기억하도록 설정
    onSale: false, // 판매 상태 기억하도록 설정
    reqList: [],
  },
  getters: {
    onSaleGetter(state) {
      return state.onSale;
    },
    reqListGetter(state) {
      return state.reqList;
    },
  },
  actions: {
    async FETCH_REQUEST_LIST({ commit }, { headers, params }) {
      let API_BASE = "http://175.196.48.113:8300/api/v/1";
      const response = await axios({
        method: "post",
        url: API_BASE,
        headers,
        params,
      });
      commit("GET_REQUEST_LIST", response.data.data);
    },
  },
  mutations: {
    GET_REQUEST_LIST(state, list) {
      state.reqList = list.requestList;
      console.log(state.reqList);
    },
  },
});

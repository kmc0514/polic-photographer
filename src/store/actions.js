import { fetchRequestList, fetchAuthorData } from "../api/cert.js";

export default {
  async FETCH_REQUEST_LIST({ commit }) {
    try {
      const response = await fetchRequestList();
      commit("GET_REQUEST_LIST", response.data.data);
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_REQUEST_AUTHOR_DETAIL({ commit }, payload) {
    try {
      let { data } = await fetchAuthorData(payload.headers, payload.params);
      commit("SET_AUTHOR_INFO", data);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};

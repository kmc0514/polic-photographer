import { fetchRequestList } from "../api/cert.js";

export default {
  async FETCH_REQUEST_LIST({ commit }) {
    const response = await fetchRequestList();
    commit("GET_REQUEST_LIST", response.data.data);
  },
};

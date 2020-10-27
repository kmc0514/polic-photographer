export default {
  GET_REQUEST_LIST(state, list) {
    state.reqList = list.requestList;
  },
  SET_AUTHOR_INFO(state, data) {
    console.log(data);
    state.authorInfo = data.data.authorInfo;
    state.photoList = data.data.portfolioList;
    if (state.authorInfo.user_status === "request") {
      state.onSale = true;
    } else {
      state.onSale = false;
    }
  },
};

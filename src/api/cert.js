import axios from "axios";

let API_BASE = "http://175.196.48.113:8300/api/v/1";
//let API_BASE = "http://220.79.240.155:8300/api/v/1";

let headers = {
  token: "ef59a1297ddfd2f632a8b17d124fb366",
  tos: "customer_request_list",
};

let params = {};

const fetchRequestList = () => {
  return axios({
    method: "post",
    url: API_BASE,
    headers,
    params,
  });
};

const fetchAuthorData = async (headers, data) => {
  return axios.post(API_BASE, data, { headers });
};

export { fetchRequestList, fetchAuthorData };

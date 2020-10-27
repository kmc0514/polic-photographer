import axios from "axios";

let API_BASE = "http://175.196.48.113:8300/api/v/1";
//let API_BASE = "http://220.79.240.155:8300/api/v/1";

const fetchRequestList = async (headers, data) => {
  return axios.post(API_BASE, data, { headers });
};

const fetchAuthorData = async (headers, data) => {
  return axios.post(API_BASE, data, { headers });
};

export { fetchRequestList, fetchAuthorData };

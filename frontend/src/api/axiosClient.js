import axios from "axios";
import queryString from "query-string";
const REACT_APP_API_URL = "http://127.0.0.1:5000/api";
const axiosClient = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.request.use(
  (config) => {
    const getLocalToken = localStorage.getItem("token");
    if (getLocalToken) {
      config.headers.Authorization = `Bearer ${getLocalToken}`;
    }
    return config;
  },
  function error() {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;

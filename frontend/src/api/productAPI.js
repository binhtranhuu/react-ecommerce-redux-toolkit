import axiosClient from "./axiosClient";

const productAPI = {
  getProductAll: (params) => {
    const url = "/products";
    return axiosClient.get(url);
  },
};

export default productAPI;

import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const getProductAll = createAsyncThunk("listProducts", async () => {
  const { data } = await Axios.get("/api/products");
  return data;
});

export const detailsProduct = createAsyncThunk(
  "detailsProduct",
  async (productId) => {
    const { data } = await Axios.get(`/api/products/${productId}`);
    return data;
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductAll = createAsyncThunk("listProducts", async () => {
  const { data } = await axios.get("/api/products");
  return data;
});

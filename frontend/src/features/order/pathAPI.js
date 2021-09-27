import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const createOrder = createAsyncThunk(
  "createOrder",
  async (order, { getState }) => {
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await Axios.post("/api/orders", order, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });

    return data.order;
  }
);

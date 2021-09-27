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

export const detailsOrder = createAsyncThunk(
  "detailsOrder",
  async (orderId, { getState }) => {
    const {
      userSignin: { userInfo },
    } = getState();

    const { data } = await Axios.get(`/api/orders/${orderId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });

    return data;
  }
);

export const payOrder = createAsyncThunk(
  "payOrder",
  async ({ order, paymentResult }, { getState }) => {
    const {
      userSignin: { userInfo },
    } = getState();

    const { data } = Axios.put(`/api/orders/${order._id}/pay`, paymentResult, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });

    return data;
  }
);

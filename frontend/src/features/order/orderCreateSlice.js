import { createSlice } from "@reduxjs/toolkit";
import { createOrder } from "./pathAPI";

const orderCreateSlice = createSlice({
  name: "orderCreateSlice",
  initialState: {},
  reducers: {
    createOrderReset: (state) => {
      state = null;
    },
  },
  extraReducers: {
    [createOrder.pending]: (state) => {
      state.loading = true;
    },
    [createOrder.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
      state.order = action.payload;
      localStorage.removeItem("cartItems");
    },
    [createOrder.rejected]: (state) => {
      state.loading = false;
      state.error = "Đặt hàng không thành công";
    },
  },
});

const { reducer, actions } = orderCreateSlice;
export const { createOrderReset } = actions;
export default reducer;

import { createSlice } from "@reduxjs/toolkit";
import { payOrder } from "./pathAPI";

const payOrderSlice = createSlice({
  name: "payOrderSlice",
  initialState: {},
  reducers: {
    payOrderReset: (state) => {
      state = null;
    },
  },
  extraReducers: {
    [payOrder.pending]: (state) => {
      state.loading = true;
    },
    [payOrder.fulfilled]: (state) => {
      state.loading = false;
      state.success = true;
    },
    [payOrder.rejected]: (state) => {
      state.loading = false;
    },
  },
});

const { reducer, actions } = payOrderSlice;
export const { payOrderReset } = actions;
export default reducer;

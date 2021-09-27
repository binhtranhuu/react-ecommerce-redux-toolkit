import { createSlice } from "@reduxjs/toolkit";
import { listOrderMine } from "./pathAPI";

const orderMineListSlice = createSlice({
  name: "orderMineListSlice",
  initialState: {
    orders: [],
  },
  extraReducers: {
    [listOrderMine.pending]: (state) => {
      state.loading = true;
    },
    [listOrderMine.fulfilled]: (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    },
    [listOrderMine.rejected]: (state) => {
      state.loading = false;
      state.error = "Có lỗi xảy ra, vui lòng thử lại!";
    },
  },
});

const { reducer } = orderMineListSlice;
export default reducer;

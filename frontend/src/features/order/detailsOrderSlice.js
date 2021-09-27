import { createSlice } from "@reduxjs/toolkit";
import { detailsOrder } from "./pathAPI";

const detailsOrderSlice = createSlice({
  name: "detailsOrderSlice",
  initialState: { loading: true },
  extraReducers: {
    [detailsOrder.pending]: (state) => {
      state.loading = true;
    },
    [detailsOrder.fulfilled]: (state, action) => {
      state.loading = false;
      state.order = action.payload;
    },
    [detailsOrder.rejected]: (state) => {
      state.loading = false;
      state.error = "Có lỗi xảy ra, đơn hàng không tồn tại.";
    },
  },
});

const { reducer } = detailsOrderSlice;
export default reducer;

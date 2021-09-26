import { createSlice } from "@reduxjs/toolkit";
import { detailsProduct } from "./pathAPI";

const productDetailsSlice = createSlice({
  name: "detailsProduct",
  initialState: {
    product: {},
    loading: true,
  },
  extraReducers: {
    [detailsProduct.pending]: (state) => {
      state.loading = true;
    },
    [detailsProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    [detailsProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

const { reducer } = productDetailsSlice;

export default reducer;

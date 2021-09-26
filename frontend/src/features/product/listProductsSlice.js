import { createSlice } from "@reduxjs/toolkit";
import { getProductAll } from "./pathAPI";

const listProductsSlice = createSlice({
  name: "listProducts",
  initialState: {
    loading: true,
    products: [],
  },
  extraReducers: {
    [getProductAll.pending]: (state) => {
      state.loading = true;
    },
    [getProductAll.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [getProductAll.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

const { reducer } = listProductsSlice;
export default reducer;

import { configureStore } from "@reduxjs/toolkit";
import listProductsSlice from "../features/product/listProductsSlice";
import productDetailsSlice from "../features/product/productDetailsSlice";

const rootReducer = {
  productList: listProductsSlice,
  productDetails: productDetailsSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

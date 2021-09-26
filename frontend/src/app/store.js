import { configureStore } from "@reduxjs/toolkit";
import productListReducer from "../features/product/listProductsSlice";

const rootReducer = {
  productList: productListReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import listProductsSlice from "../features/product/listProductsSlice";
import productDetailsSlice from "../features/product/productDetailsSlice";
import cartSlice from "../features/cart/cartSlice";

const rootReducer = {
  productList: listProductsSlice,
  productDetails: productDetailsSlice,
  cart: cartSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import listProductsSlice from "../features/product/listProductsSlice";
import productDetailsSlice from "../features/product/productDetailsSlice";
import cartSlice from "../features/cart/cartSlice";
import signinSlice from "../features/user/signinSlice";
import registerSlice from "../features/user/registerSlice";

const rootReducer = {
  productList: listProductsSlice,
  productDetails: productDetailsSlice,
  cart: cartSlice,
  userSignin: signinSlice,
  userRegister: registerSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

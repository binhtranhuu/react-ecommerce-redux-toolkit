import { configureStore } from "@reduxjs/toolkit";
import listProductsSlice from "../features/product/listProductsSlice";
import productDetailsSlice from "../features/product/productDetailsSlice";
import cartSlice from "../features/cart/cartSlice";
import signinSlice from "../features/user/signinSlice";
import registerSlice from "../features/user/registerSlice";
import orderCreateSlice from "../features/order/orderCreateSlice";
import detailsOrderSlice from "../features/order/detailsOrderSlice";
import payOrderSlice from "../features/order/payOrderSlice";

const rootReducer = {
  productList: listProductsSlice,
  productDetails: productDetailsSlice,
  cart: cartSlice,
  userSignin: signinSlice,
  userRegister: registerSlice,
  orderCreate: orderCreateSlice,
  orderDetails: detailsOrderSlice,
  orderPay: payOrderSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

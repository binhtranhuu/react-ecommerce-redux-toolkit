import { createSlice } from "@reduxjs/toolkit";
import { signin } from "./pathAPI";

const signinSlice = createSlice({
  name: "signin",
  initialState: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  reducers: {
    signout: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
      localStorage.removeItem("cartItems");
    },
  },
  extraReducers: {
    [signin.pending]: (state) => {
      state.loading = true;
    },
    [signin.fulfilled]: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
    },
    [signin.rejected]: (state) => {
      state.loading = false;
      state.error = "Thông tin tài khoản hoặc mật khẩu không chính xác";
    },
  },
});

const { reducer, actions } = signinSlice;
export const { signout } = actions;

export default reducer;

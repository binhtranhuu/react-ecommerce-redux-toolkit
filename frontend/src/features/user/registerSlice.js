import { createSlice } from "@reduxjs/toolkit";
import { register } from "./pathAPI";

const registerSlice = createSlice({
  name: "register",
  initialState: {},
  extraReducers: {
    [register.pending]: (state) => {
      state.loading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
    },
    [register.rejected]: (state) => {
      state.loading = false;
      state.error = "Đăng ký không thành công!";
    },
  },
});

const { reducer } = registerSlice;

export default reducer;

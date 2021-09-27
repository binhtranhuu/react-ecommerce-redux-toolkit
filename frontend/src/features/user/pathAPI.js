import Axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signin = createAsyncThunk(
  "signin",
  async ({ email, password }) => {
    const { data } = await Axios.post("/api/users/signin", { email, password });
    return data;
  }
);

export const register = createAsyncThunk(
  "register",
  async ({ name, email, password }, { dispatch }) => {
    const { data } = await Axios.post("/api/users/register", {
      name,
      email,
      password,
    });

    dispatch(signin.fulfilled(data));

    return data;
  }
);

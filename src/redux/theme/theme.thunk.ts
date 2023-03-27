import { createAsyncThunk } from "@reduxjs/toolkit";
import { SET_THEME_ACTION } from "./actions";

export const setTheme: any = createAsyncThunk(
  SET_THEME_ACTION,
  async (theme) => {
    return theme;
  }
);

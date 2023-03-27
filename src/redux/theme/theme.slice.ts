import { createSlice } from "@reduxjs/toolkit";
import { setTheme } from "./theme.thunk";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: {
      theme: "theme_light",
      properties: [
        { property: "--theme-body-bg", color: "#ccc" },
        { property: "--theme-content-box-bg", color: "#eee" },
        { property: "--theme-content-box-headingColor", color: "#222" },
        { property: "--theme-content-box-textColor", color: "#000" },
        { property: "--theme-button-bg", color: "#222" },
        { property: "--theme-button-color", color: "#fff" },
      ],
    },
    loading: "idle",
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setTheme.pending, (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    });
    builder.addCase(setTheme.fulfilled, (state, action) => {
      if (state.loading === "pending") {
        state.theme = action.payload;
        state.loading = "idle";
      }
    });
    builder.addCase(setTheme.rejected, (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.error = true;
      }
    });
  },
});
export default themeSlice.reducer;

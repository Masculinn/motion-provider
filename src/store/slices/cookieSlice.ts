import { createSlice } from "@reduxjs/toolkit";
import { ReduxCookieProps } from "../../interfaces";

const INITIAL_STATE: ReduxCookieProps = false;

const cookieSlice = createSlice({
  initialState: INITIAL_STATE,
  name: "cookie",
  reducers: {
    setCookie: (_, action) => {
      return action.payload;
    },
  },
});

export const { setCookie } = cookieSlice.actions;
export default cookieSlice.reducer;

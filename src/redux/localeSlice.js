import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "locale",
  initialState: {
    lang: "uk",
  },
  reducers: {
    changeLang: {
      reducer: (state, action) => {
        state.lang = action.payload.lang;
      },
      prepare: (newLang) => {
        return {
          payload: {
            id: crypto.randomUUID(),
            lang: newLang,
          },
        };
      },
    },
  },
});

export const { changeLang } = slice.actions;

export default slice.reducer;

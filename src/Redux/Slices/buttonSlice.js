import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    content: "Button",
    width: 100,
    height: 40,
    borderRadius: 0,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#000000",
    backgroundColor: "#ffffff",
    cursor: "auto",
  },
};
export const buttonSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    updateValue: (state, action) => {
      const { dataref, newValue } = action.payload;
      state.value[dataref] = newValue;
    },
  },
});

export const { updateValue } = buttonSlice.actions;
export default buttonSlice.reducer;

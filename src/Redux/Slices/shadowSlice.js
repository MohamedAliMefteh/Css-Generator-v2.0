import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: {
        horizontal: 0,
        vertical: 0,
        blurRadius: 0,
        spreadRadius: 0,
        shadowOpacity: 1,
        shadowColor: "#000000",
        boxColor: "#969696",
    }
}
export const shadowSlice = createSlice({
    name: "shadow",
    initialState,
    reducers: {
        updateValue: (state, action) => {
            const { dataref, newValue } = action.payload
            state.value[dataref] = newValue

        }
    }
})
export const { updateValue } = shadowSlice.actions;
export default shadowSlice.reducer;
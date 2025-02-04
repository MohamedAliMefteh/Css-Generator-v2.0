import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: {
        height: 200,
        width: 200,
        topLeftBorder: 0,
        topRightBorder: 0,
        bottomRightBorder: 0,
        bottomLeftBorder: 0,
        allBorders: 0,
    }
}
export const borderSlice = createSlice({
    name: 'border',
    initialState,
    reducers: {
        updateValue: (state, action) => {
            const { dataref, newValue } = action.payload;
            switch(dataref){
                case 'allBorders':
                    state.value.topLeftBorder=newValue
                    state.value.topRightBorder=newValue
                    state.value.bottomRightBorder=newValue
                    state.value.bottomLeftBorder=newValue
                    state.value.allBorders=newValue
                    break
                default:
                    state.value[dataref] = newValue;
            }
            
        }
    }
})
export const { updateValue } = borderSlice.actions
export default borderSlice.reducer
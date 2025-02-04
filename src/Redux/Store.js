import { configureStore } from "@reduxjs/toolkit";
import buttonReducer from './Slices/buttonSlice'
import shadowReducer from './Slices/shadowSlice'
import borderReducer from './Slices/borderSlice'
export const store = configureStore({
    reducer: {
        button: buttonReducer,
        shadow: shadowReducer,
        border: borderReducer,
    },
})
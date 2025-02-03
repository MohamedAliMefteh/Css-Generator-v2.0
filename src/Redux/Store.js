import { configureStore } from "@reduxjs/toolkit";
import buttonReducer from './Slices/buttonSlice'
import shadowReducer from './Slices/shadowSlice'
export const store =configureStore({
    reducer:{
        button:buttonReducer,
        shadow:shadowReducer,
    },
})